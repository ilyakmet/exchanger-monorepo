export const shorten = (address: string): string =>
  `${address.slice(0, 10)}...${address.slice(-10, address.length)}`;
