import React from 'react';
import PropTypes from 'prop-types';
import getMessage from './getMessage';

const MotivationalMessage = ({ pullRequestCount, otherReposCount }) => {
  let message;

  try {
    message = getMessage(pullRequestCount, otherReposCount);
  } catch (err) {
    message = 'An error occured.';
  }

  return (
    <div className="w-5/6 lg:w-1/2 text-left">
      <p className="text-sm text-white font-bold uppercase pb-6">{message}</p>
    </div>
  );
};

MotivationalMessage.propTypes = {
  pullRequestCount: PropTypes.number,
  otherReposCount: PropTypes.number
};

export default MotivationalMessage;
