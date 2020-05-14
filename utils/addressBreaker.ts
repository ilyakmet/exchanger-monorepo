import _ from 'lodash';

export const breakAddress = ({ address }: { address: string }): string => {
  console.log('break: ', address);

  if (address.length <= 0 || typeof address === null) return '...';

  const breakPoint1 = _.divide(address.length, 3);
  const breakPoint2 = _.multiply(breakPoint1, 2);
  const breakPoint3 = _.multiply(breakPoint1, 3);

  return `${address.slice(0, breakPoint1)}\n${address.slice(
    breakPoint1,
    breakPoint2,
  )}\n${address.slice(breakPoint2, breakPoint3)}`;
};
