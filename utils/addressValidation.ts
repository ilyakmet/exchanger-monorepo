import { addressRegEx } from './addressRegEx';

export const validate = ({ currency, address }: { currency: string; address: string }): boolean =>
  new RegExp(addressRegEx[currency].regEx).test(address);
