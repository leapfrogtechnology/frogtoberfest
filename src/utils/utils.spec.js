import { formatDate, extractPullRequestInfo } from './utils';

describe('formatDate', () => {
  const expectedDateString = 'October 26, 2019';

  it('should return formatted date for a given date in "dd-mmm-yyyy hh:mm" format.', () => {
    const date = '26-OCT-2019 13:48';

    expect(formatDate(date)).toEqual(expectedDateString);
  });

  it('should return formatted date for a given date in "dd-mmm-yy" format.', () => {
    const date = '26-OCT-19';

    expect(formatDate(date)).toEqual(expectedDateString);
  });

  it('should return formatted date for a given date in "dd-mmm-yyyy" format.', () => {
    const date = '26-OCT-2019';

    expect(formatDate(date)).toEqual(expectedDateString);
  });

  it('should return formatted date for a given date in common date format.', () => {
    const date = 'October 26, 2019 13:48:15';

    expect(formatDate(date)).toEqual(expectedDateString);
  });

  it('should return formatted date for a given date in another common date format.', () => {
    const date = '2019-10-26T03:24:00';

    expect(formatDate(date)).toEqual(expectedDateString);
  });

  it('should not format the invalid date.', () => {
    const date = 'October Invalid';

    expect(formatDate(date)).not.toEqual(expectedDateString);
  });

  it('should return "Invalid Date" for invalid date.', () => {
    const date = 'October Invalid';

    expect(formatDate(date)).toEqual('Invalid Date');
  });
});

describe('extractPullRequestInfo', () => {
  const expectedPullRequestInfo = { pullNumber: '45', owner: 'leapfrogtechnology', repo: 'frogtoberfest' };
  const url = 'https://github.com/leapfrogtechnology/frogtoberfest/pull/45';

  it('should return PullRequestInfo for a given url in "https://github.com/leapfrogtechnology/frogtoberfest/pull/45" format.', () => {
    expect(extractPullRequestInfo(url)).toEqual(expectedPullRequestInfo);
  });

  it('Should return PullNumber with a numeric value.', () => {
    expect(!isNaN(extractPullRequestInfo(url).pullNumber)).toEqual(true);
  });

  it('should not extract the invalid url.', () => {
    const url = 'www.leapfrogtechnology.com';

    expect(extractPullRequestInfo(url)).not.toEqual(expectedPullRequestInfo);
  });
});
