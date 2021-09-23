import React from 'react';
import PropTypes from 'prop-types';

const ErrorText = ({ errorMessage }) => <p className="text-center text-white">{errorMessage}</p>;

ErrorText.propTypes = {
  errorMessage: PropTypes.node
};

ErrorText.defaultProps = {
  errorMessage: 'Cannot find the information of the user. Please try again.'
};

export default ErrorText;
