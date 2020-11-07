// import original module declarations
import "styled-components";
// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      main: string;
      secondary: string;
      white: string;
      black: string;
      grey: string;
      red: string;
      background: string;
    };
  }
}
