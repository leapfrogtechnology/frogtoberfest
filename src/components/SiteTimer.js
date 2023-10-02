import React, { useState, useEffect } from 'react';

const SiteTimer = props => {
  const [day1Element, setDay1Element] = useState(0);
  const [day2Element, setDay2Element] = useState(0);
  const [hour1Element, setHour1Element] = useState(0);
  const [hour2Element, setHour2Element] = useState(0);
  const [minute1Element, setMinute1Element] = useState(0);
  const [minute2Element, setMinute2Element] = useState(0);
  const SECOND_DAY = 86400;
  const SECOND_HOUR = 3600;
  const lastDate = new Date('2023-10-31');
  const todayDate = new Date();
  const dif = Math.abs(lastDate - todayDate) / 1000;

  const countDownClock = (number = 100, format = 'seconds') => {
    let countdown;

    convertFormat(format);

    function convertFormat(format) {
      switch (format) {
        case 'seconds':
          return timer(number);
        case 'minutes':
          return timer(number * 60);
        case 'hours':
          return timer(number * 60 * 60);
        case 'days':
          return timer(number * 60 * 60 * 24);
        default:
      }
    }

    function timer(seconds) {
      const now = Date.now();
      const then = now + seconds * 1000;

      // For first render
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      displayTimeLeft(secondsLeft);

      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft <= 0) {
          clearInterval(countdown);

          return;
        }

        displayTimeLeft(secondsLeft);
      }, 1000);
    }

    function displayTimeLeft(seconds) {
      const totalDaysRemaining = Math.floor(seconds / SECOND_DAY);
      const totalHourRemaing = Math.floor((seconds % SECOND_DAY) / SECOND_HOUR);
      const totalMinuteRemaing = Math.floor(((seconds % SECOND_DAY) % SECOND_HOUR) / 60);

      setDay1Element(Math.floor(totalDaysRemaining / 10));
      setDay2Element(totalDaysRemaining % 10);
      setHour1Element(Math.floor(totalHourRemaing / 10));
      setHour2Element(totalHourRemaing % 10);
      setMinute1Element(Math.floor(totalMinuteRemaing / 10));
      setMinute2Element(totalMinuteRemaing % 10);
    }
  };

  useEffect(() => {
    countDownClock(dif, 'seconds');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="d-flex flex-col justify-center md:items-center mb-10x timer">
      <div className="mb-2x text-center text-sm">{props.type}</div>
      <div className="d-flex gap-6x text-center">
        <div className="">
          <div className="days d-flex gap-1x">
            <span className="number" id="day-1">
              {day1Element}
            </span>
            <span className="number" id="day-2">
              {day2Element}
            </span>
          </div>
          <div className="time-label">days</div>
        </div>

        <div className="hours-container">
          <div className="hours d-flex gap-1x">
            <span className="number" id="hour-1">
              {hour1Element}
            </span>
            <span className="number" id="hour-2">
              {hour2Element}
            </span>
          </div>
          <div className="time-label">hours</div>
        </div>

        <div className="minutes-container">
          <div className="minutes d-flex gap-1x">
            <span className="number" id="minute-1">
              {minute1Element}
            </span>
            <span className="number" id="minute-2">
              {minute2Element}
            </span>
          </div>
          <div className="time-label">minutes</div>
        </div>
      </div>
    </div>
  );
};

export default SiteTimer;
