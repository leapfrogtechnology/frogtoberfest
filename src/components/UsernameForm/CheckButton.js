import React from 'react';

const CheckButton = () => (
  <button
    type="submit"
    style={{ outline: 'none' /* Tailwind's outline-none class doesn't remove default outlines */ }}
    className="btn btn-primary border-radius-tbl-none"
  >
    Check
  </button>
);

export default CheckButton;
