import { GITHUB_TOKEN } from "../config";

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

export async function isPullRequestMerged(PRInfo) {
  const { pullNumber, owner, repo } = PRInfo;
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}/merge`;
  const merged = await fetchInfoFromGitHub(apiUrl);

  return merged.ok;
}
