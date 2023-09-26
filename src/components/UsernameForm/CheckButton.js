import React from 'react';

const CheckButton = () => (
  <button
    type="submit"
    style={{ outline: 'none' /* Tailwind's outline-none class doesn't remove default outlines */ }}
    className="bn br--right bg-blue-light rounded-r px-4 pointer text-white hover:bg-blue hover:border-blue border-2 border-blue-light border-l-0 btn btn-primary"
  >
    Check
  </button>
);

export default CheckButton;
