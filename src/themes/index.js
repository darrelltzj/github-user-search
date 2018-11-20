import defaultTheme from './default';

function theme() {
  if (process.env.REACT_APP_THEME === 'default') {
    return defaultTheme;
  }
  return defaultTheme;
}

export default theme();
