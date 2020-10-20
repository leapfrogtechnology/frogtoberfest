import React from 'react';
import getTimeMessage from './getTimeMessage';
import clock from 'assets/images/clock.svg';

const TimeMessage = () => (
  <span className="text-left text-sm pb-3 flex mx-auto w-3/4 sm:w-1/2 text-gray-400">
    <img className="w-4 mr-2" alt="time icon" src={clock} />
    {getTimeMessage()}
  </span>
);

export default TimeMessage;
