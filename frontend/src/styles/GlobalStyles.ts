import { createGlobalStyle } from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  *, input, button {
    font-family: 'Poppins', sans-serif;
  }

  html {
    font-size: 62.5%;
}
body{
  background-color: ${(props) => props.theme.colors.background}
}

.btn{
      height: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2rem 0;

      font-size: 1.4rem;

      padding: 1rem 4.5rem;
      outline: none;
      border-radius: 1rem;
      font-weight: 500;

      background-color: ${(props) => props.theme.colors.main};
      color: ${(props) => props.theme.colors.white};

      box-shadow: 0px 0.7rem 1.5rem rgba(0, 0, 0, 0.2);
      border: 0.1rem solid ${(props) => props.theme.colors.main};

      cursor: pointer;

      transition: all 0.3s;

      &:hover {
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.black};
        border: 0.1rem solid ${(props) => props.theme.colors.main};
      }

      &:disabled {
        &:hover {
          border: ${(props) => props.theme.colors.main};
          background-color: ${(props) => props.theme.colors.main};
        }
      }

      &.purple {
        background-color: ${(props) => props.theme.colors.main};
        color: ${(props) => props.theme.colors.white};

        box-shadow: 0px 0.7rem 1.5rem rgba(0, 0, 0, 0.2);

        &:hover {
          background-color: ${(props) => props.theme.colors.white};
          color: ${(props) => props.theme.colors.black};
          border: 0.1rem solid ${(props) => props.theme.colors.main};
        }
      }
}

.form {
    display: flex;
    flex-direction: column;
  }

`;
