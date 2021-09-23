import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import ShareButtons from './ShareButtons';
import LoadingIcon from './LoadingIcon';
import PullRequest from './PullRequest';
import IssuesLink from './IssuesLink';
import MeLinkInfo from './MeLinkInfo';
import ErrorText from './ErrorText';
import UserInfo from './UserInfo';
import { fetchInfoFromGitHub, getApiUrls } from 'services/index';
import { GITHUB_TOKEN, TOTAL_PR_COUNT, TOTAL_OTHER_PR_COUNT, LF_CAREER_URL } from 'config';
import MotivationalMessage from './UserInfo/MotivationalMessage/index';

/**
 * Returns an object containing user info.
 *
 * @param {string} username
 * @returns {*}
 */
export async function fetchUserInfo(username) {
  const apiUrls = getApiUrls(username);

  const results = apiUrls.map(url => fetchInfoFromGitHub(url, GITHUB_TOKEN));
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

      this.displayPullRequests(userInfo);
    } catch (error) {
      this.setState({
        error,
        loading: false,
        data: null,
        userDetail: null,
        isOrgMember: true
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

    return (
      <div className="flex text-center flex-col text-lg mt-6">
        User information can not be found.
        <small className="pt-3 flex text-center mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="#ffffff">
            <path
              fill-rule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clip-rule="evenodd"
            />
          </svg>
          Please try again.
        </small>{' '}
      </div>
    );
  };

  /**
   * Displays Error if User is not a member of organization.
   *
   * @returns {node}
   */
  getNotAMemberMessage = () => {
    return (
      <>
        <span className="text-white mb-3 block text-2xl mt-5">
          Oops! the username isn't a member of Leapfrog Technology.
        </span>
        <span className="text-gray-400">
          However, you can &nbsp;
          <a className="underline" href={LF_CAREER_URL} target="_blank" rel="noopener noreferrer">
            join our awesome team
          </a>
          &nbsp; 🐸
        </span>
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

    return { ...data, total_count: validPullRequests.length, items: validPullRequests }; // eslint-disable-line camelcase
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
    const { loading, data, error, userDetail, isOrgMember } = this.state;

    if (loading) {
      return <LoadingIcon />;
    }

    if (!isOrgMember) {
      return <ErrorText errorMessage={this.getNotAMemberMessage()} />;
    }

    if (error || data.errors || data.message) {
      return <ErrorText errorMessage={this.getErrorMessage()} />;
    }

    const isComplete = this.conditionChecker(data, userDetail);

    return (
      <Fragment>
        <div className="border-b py-4 border-gray-900">
          <div className="text-center text-white">
            <div className="flex flex-wrap justify-center content-center flex-col">
              <MotivationalMessage pullRequestCount={data.items.length} otherReposCount={this.state.otherReposCount} />
            </div>
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
        </div>
        <ShareButtons username={username} pullRequestCount={data.items.length} />
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
