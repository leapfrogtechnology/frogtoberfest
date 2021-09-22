import React from 'react';
import { getYear } from 'utils/date';

const CompletionMessage = () => {
  return (
    <div className="text-left text-sm pb-3 flex mx-auto w-3/4 sm:w-1/2 text-green-500">
      <p className="text-base">Great work! you have successfully completed Frogtoberfest {getYear()}!</p>
    </div>
  );
};

export default CompletionMessage;
