import { TOTAL_PR_COUNT, TOTAL_OTHER_PR_COUNT } from 'config';

export const messages = [
  "It's not too late to start!",
  'Off to a great start, keep going!',
  'Keep going!',
  'Keep it up!',
  "Half way there, don't stop now!",
  'You are right on track!',
  "Can't stop now!",
  'Going great, just a few more to go!',
  'Almost there, go go go!',
  'Way to go!',
  "Now you're just showing off!"
];

const MONTH_OCTOBER = 9;

/**
 * Get motivational message based on pull requests count.
 *
 * @param {number} pullRequestCount
 * @param {number} otherReposCount
 * @returns {string}
 */
function getMessage(pullRequestCount, otherReposCount) {
  if (!Number.isInteger(pullRequestCount) || !Number.isInteger(otherReposCount) || pullRequestCount < 0) {
    throw new Error('Parameters pullRequestCount and otherReposCount should be integers.');
  }

  const currentMonth = new Date().getMonth();

  if (currentMonth < MONTH_OCTOBER) {
    return "Last year's result.";
  }

  if (currentMonth > MONTH_OCTOBER) {
    return "This year's result.";
  }

  const isShowingOff = pullRequestCount >= TOTAL_PR_COUNT && otherReposCount >= TOTAL_OTHER_PR_COUNT;

  if (isShowingOff) {
    return messages[messages.length - 1];
  }

  return messages[pullRequestCount];
}

export default getMessage;
