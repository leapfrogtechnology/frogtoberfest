import React from 'react';
import PropTypes from 'prop-types';

const ResultMessage = ({ message }) => <h3 className="my-1 font-light text-green-400">{message}</h3>;

ResultMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default ResultMessage;
