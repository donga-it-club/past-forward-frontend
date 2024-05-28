import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { colors } from './@colors';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const appStyles = {
  breakpoints: { md: '768px' },
  maxWidth: '768px',
  paddingX: '12px',
  headerHeight: { base: '48px', md: '56px' },
  asideHeight: '56px',
} as const;

const styles = {
  global: {
    body: {
      width: '100%',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
    },
    '#root': {
      width: '100%',
      minHeight: '100vh',
      background: 'gray.50',
    },
    main: {
      width: '100%',
      minHeight: {
        base: `calc(100vh - ${appStyles.headerHeight.base})`,
        md: `calc(100vh - ${appStyles.headerHeight.md})`,
      },
      maxWidth: appStyles.maxWidth,
      margin: '0 auto',
      background: 'white',
      padding: `0 ${appStyles.paddingX}`,
    },
    'main.with-aside': {
      paddingBottom: appStyles.asideHeight,
      minHeight: {
        base: `calc(100vh - ${appStyles.headerHeight.base} - ${appStyles.asideHeight})`,
        md: `calc(100vh - ${appStyles.headerHeight.md} - ${appStyles.asideHeight})`,
      },
    },
  },
};

const theme = extendTheme({
  config,
  colors,
  styles,
  appStyles,
});

export default theme;

export type TColors = typeof colors;
export type TAppStyles = typeof appStyles;
