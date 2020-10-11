import React from 'react';
import PropTypes from 'prop-types';

const UsernameInput = ({ value, onChange }) => (
  <input
    type="text"
    name="username"
    aria-label="GitHub username"
    placeholder="GitHub username"
    value={value}
    onChange={onChange}
    spellCheck="false"
    autoCapitalize="none"
    autoCorrect="off"
    autoComplete="off"
    style={{ outline: 'none' }}
    className="bn br--left leading-tight rounded-l p-2 flex-auto border-2 border-blue-lighter focus:border-blue-light border-r-0 text-gray-900"
  />
);

UsernameInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default UsernameInput;
