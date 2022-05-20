import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      red: string;
      green: string;
    };

    fonts: {
      large: string;
      medium: string;
      default: string;
      small: string;
    };
  }
}
