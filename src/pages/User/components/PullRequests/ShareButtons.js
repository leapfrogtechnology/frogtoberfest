import React from 'react';
import PropTypes from 'prop-types';
import { HOSTNAME, TOTAL_PR_COUNT } from 'config';
import facebookLogo from 'assets/images/facebook_logo.svg';
import twitterLogo from 'assets/images/twitter_logo.svg';

const ShareButtons = ({ username, pullRequestCount }) => (
  <div className="w-5/6 lg:w-1/2 mx-auto text-center py-4 block">
    <span class="text-white text-center">Share result</span>
    <div className="flex justify-center pt-4">
      <div id="twitter-share">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://twitter.com/intent/tweet?text=My progress on frogtoberfest ${pullRequestCount} / ${TOTAL_PR_COUNT}&url=${HOSTNAME}/user/${username}&hashtags=frogtoberfest, frogtoberfest`}
          data-size="large"
        >
          <img className="w-8 h-8 mr-4" src={twitterLogo} alt="twitter icon" />
        </a>
      </div>
      <div id="fb-share" data-href={`${HOSTNAME}/username/${username}`}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.facebook.com/sharer/sharer.php?u=${HOSTNAME}/user/${username}`}
        >
          <img className="w-8 h-8" src={facebookLogo} alt="facebook icon" />
        </a>
      </div>
    </div>
  </div>
);

ShareButtons.propTypes = {
  username: PropTypes.string.isRequired,
  pullRequestCount: PropTypes.number.isRequired
};

export default ShareButtons;
