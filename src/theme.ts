import { Theme } from '@mui/material/styles';

import defaultTheme from './themes/index';
import kittygotchiTheme from './themes/kittygotchi';
import casinoTheme from './themes/casino';

const themes: { [key: string]: Theme } = {
  'default-theme': defaultTheme,
  kittygotchi: kittygotchiTheme,
  casino: casinoTheme,
};

export function getTheme(name: string) {
  return themes[name];
}
