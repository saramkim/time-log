import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: string;
    bgColor: string;
    transition: string;
  }
}
