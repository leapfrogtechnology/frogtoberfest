import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ShareButtons from './ShareButtons';
import LoadingIcon from './LoadingIcon';
import PullRequest from './PullRequest';
import IssuesLink from './IssuesLink';
import MeLinkInfo from './MeLinkInfo';
import ErrorText from './ErrorText';
import UserInfo from './UserInfo';
import { fetchInfoFromGitHub, isPullRequestMerged } from '../../../../utils/utils';
import { TOTAL_PR_COUNT, TOTAL_OTHER_PR_COUNT, GITHUB_ORG_NAME, LF_CAREER_URL } from '../../../../config';

/**
 * Returns an object containing user info.
 *
 * @param {string} username
 * @returns {*}
 */
export async function fetchUserInfo(username) {
  const apiUrls = [
    `https://api.github.com/search/issues?q=author:${username}+is:pr+created:2019-10-01..2019-10-31`,
    `https://api.github.com/search/users?q=user:${username}`,
    `https://api.github.com/orgs/${GITHUB_ORG_NAME}/members/${username}`
  ];
  const results = apiUrls.map(url => fetchInfoFromGitHub(url));
  let [data, userDetail, membershipStatus] = await Promise.all(results);

  [data, userDetail, membershipStatus] = [await data.json(), await userDetail.json(), membershipStatus.ok];

  return { data, userDetail, membershipStatus };
}

/**
 * Pull Requests component.
 */
class PullRequests extends Component {
  static defaultProps = {
    username: PropTypes.string.isRequired
  };

  state = {
    loading: true,
    data: null,
    error: null,
    userDetail: null,
    otherReposCount: null
  };

  componentDidMount = () => {
    this.storeUsernameAsMe();
    this.fetchPullRequests();
  };

  /**
   * Lifecycle event for component update.
   *
   * @param {*} prevProps
   */
  componentDidUpdate = prevProps => {
    if (prevProps.username === this.props.username) {
      return;
    }
    this.fetchPullRequests();
  };

  /**
   * Persist username in the local storage.
   */
  storeUsernameAsMe = () => {
    const username = this.props.username;

    if (localStorage.getItem('myGithub')) {
      return;
    }

    localStorage.setItem('myGithub', username);
  };

  /**
   * Fetch pull requests.
   *
   * @returns {Promise}
   */
  fetchPullRequests = async () => {
    try {
      const username = this.props.username;
      const userInfo = await fetchUserInfo(username);

      !userInfo.membershipStatus ? this.showNotAMemberMessage() : this.displayPullRequests(userInfo);
    } catch (error) {
      this.setState({
        error,
        loading: false,
        data: null,
        userDetail: null
      });
    }
  };

  /**
   * Displays general error message.
   *
   * @returns {node}
   */
  getErrorMessage = () => {
    const { data, error } = this.state;

    if (error && error.description) {
      return <> error.error_description</>;
    }

    if (data && data.errors) {
      return <> data.errors.message</>;
    }

    return <> Couldn&apos;t find any data or we hit an error, try again?</>;
  };

  /**
   * Displays Error if User is not a member of organization.
   *
   * @returns {node}
   */
  getNotAMemberMessage = () => {
    return (
      <>
        You are not a member of Leapfrog Technology. However, you can join our{' '}
        <a href={LF_CAREER_URL} target="_blank" rel="noopener noreferrer">
          awesome team
        </a>
        . 😉
      </>
    );
  };

  /**
   * Check the condition for eligibility.
   *
   * @param {*} data
   * @returns {boolean}
   */
  conditionChecker(data) {
    if (data.items.length < TOTAL_PR_COUNT) {
      return false;
    }

    return this.state.otherReposCount >= TOTAL_OTHER_PR_COUNT;
  }

  /**
   * Count other repositories.
   *
   * @param {*} data
   * @param {*} userDetail
   * @returns {number}
   */
  countOtherRepos(data, userDetail) {
    const user = userDetail.items[0].login;
    let count = 0;

    data.items.forEach(pullRequest => {
      const repoOwner = pullRequest.repository_url
        .split('/repos/')
        .pop()
        .split('/')
        .shift();

      if (repoOwner !== user) {
        count++;
      }
    });

    return count;
  }

  /**
   * Change state to list PRs.
   *
   * @param {*} userInfo
   */
  displayPullRequests = userInfo => {
    const { data, userDetail } = userInfo;
    const validData = this.getValidPullRequests(data);
    const otherReposCount = this.countOtherRepos(validData, userDetail);

    this.props.setUserContributionCount(validData.items.length, otherReposCount);

    this.setState({
      data: validData,
      userDetail,
      loading: false,
      otherReposCount,
      error: null,
      isOrgMember: true
    });
  };

  /**
   * Loops through all valid PRs and change PR's state to 'merged' if PR is merged.
   *
   * @param {Object} validData
   * @returns {Object}
   */
  updateMergedStatus = validData => {
    const promises = validData.map(data => {
      return isPullRequestMerged(data).then(isMerged => ({ ...data, isMerged }));
    });

    return Promise.all(promises);
  };

  /**
   * Validates and returns an object containing valid pull requests.
   *
   * @param {*} data
   * @returns {*}
   */
  getValidPullRequests(data) {
    const validPullRequests = data.items.filter(pr => {
      const hasInvalidLabel = ({ name }) => name.toLowerCase() === 'invalid';
      const isPullRequestValid = pr.labels.filter(hasInvalidLabel).length === 0;

      return isPullRequestValid;
    });
    const updatedValidPRWithMergedStatus = this.updateMergedStatus(validPullRequests);

    return { ...data, total_count: updatedValidPRWithMergedStatus.length, items: updatedValidPRWithMergedStatus }; // eslint-disable-line camelcase
  }

  /**
   * Shows up NotAMember message for non leapfroggers.
   */
  showNotAMemberMessage = () => {
    this.setState({
      isOrgMember: false,
      loading: false,
      data: null,
      userDetail: null
    });
  };

  /**
   * Render the component.
   */
  render = () => {
    const username = this.props.username;
    const { loading, data, error, userDetail } = this.state;

    if (loading) {
      return <LoadingIcon />;
    }
    if (!this.state.isOrgMember) {
      return <ErrorText errorMessage={this.getNotAMemberMessage()} />;
    }
    if (error || data.errors || data.message) {
      return <ErrorText errorMessage={this.getErrorMessage()} />;
    }

    const isComplete = this.conditionChecker(data, userDetail);

    return (
      <Fragment>
        <div className="text-center text-white">
          <ShareButtons username={username} pullRequestCount={data.items.length} />
          <UserInfo
            username={username}
            userImage={userDetail.items[0].avatar_url}
            pullRequestCount={data.items.length}
            otherReposCount={this.state.otherReposCount}
          />
        </div>
        <div className="rounded mx-auto shadow overflow-hidden w-5/6 lg:w-1/2 mb-4">
          {data.items.length > 0 &&
            data.items.map((pullRequest, i) => <PullRequest pullRequest={pullRequest} key={i} />)}
        </div>
        {!isComplete && <IssuesLink />}
        <MeLinkInfo username={username} />
      </Fragment>
    );
  };
}

PullRequests.propTypes = {
  username: PropTypes.string,
  setUserContributionCount: PropTypes.func.isRequired
};

export default PullRequests;
