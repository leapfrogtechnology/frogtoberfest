import { GITHUB_TOKEN } from '../config';

/**
 * Returns formatted date eg July 28, 1993.
 *
 * @param {string} dateTime
 * @returns {string}
 */
export function formatDate(dateTime) {
  const date = new Date(dateTime);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return date.toLocaleDateString('en-US', options);
}

/**
 * Fetch and return responses from Github apis.
 *
 * @param {*} url
 * @returns {Promise}
 */
export function fetchInfoFromGitHub(url) {
  const response = fetch(url, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  })
    .then(response => response)
    .catch(error => error);

  return response;
}

/**
 * Fetch and return response whether PR with given PRInfo is merged or not.
 *
 * @param {Object} pullRequest
 * @returns {Boolean} MergedStatus.
 */
export async function isPullRequestMerged(pullRequest) {
  const { pullNumber, owner, repo } = extractPullRequestInfo(pullRequest);
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}/merge`;
  const mergedStatus = (await fetchInfoFromGitHub(apiUrl)).ok;

  return mergedStatus;
}

/**
 * Extracts all needed information to call PR merged api.
 *
 * @param {Object} pullRequest
 * @returns {Object}
 */
export function extractPullRequestInfo(pullRequest) {
  const splittedPRUrlArray = pullRequest.html_url.split('/');
  const pullNumber = pullRequest.number;
  const owner = splittedPRUrlArray[3];
  const repo = splittedPRUrlArray[4];

  return { pullNumber, owner, repo };
}
