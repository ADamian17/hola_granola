import {atom} from 'recoil'

export const counterState = atom({
  key: 'myCounter',
  default: 0
});
