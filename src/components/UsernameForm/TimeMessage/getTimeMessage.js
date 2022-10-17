import { EXTENDED_DAYS } from 'config';

const getTimeMessage = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const daysLeft = 31 - today.getDate() + EXTENDED_DAYS;

  if (currentMonth < 9) {
    const currentYear = today.getFullYear();

    return `Stay tuned for frogtoberfest ${currentYear} !!`;
  }

  if (currentMonth > 9) {
    return `Thank you for your participation. Stay tuned for Next Year !!`;
  }

  if (daysLeft === 0) {
    return "It's the very last day! Get your last PRs in!";
  }

  if (daysLeft === 1) {
    return 'One more day, keep it going!';
  }

  if (daysLeft < 10) {
    return `Only ${daysLeft} days left. You can do it!`;
  }

  return `${daysLeft} days remaining!`;
};

export default getTimeMessage;
