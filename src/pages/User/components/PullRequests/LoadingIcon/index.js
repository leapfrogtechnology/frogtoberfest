import React from 'react';
import loadingIcon from './loading-icon.gif';

const LoadingIcon = () => (
  <div className="flex justify-center">
    <img src={loadingIcon} alt="Loading icon" />
  </div>
);

export default LoadingIcon;
