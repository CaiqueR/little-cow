import "react-responsive-carousel/lib/styles/carousel.min.css";

import { createGlobalStyle } from "styled-components";

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
      margin: 1rem 0;

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

  .ReactModal__Overlay {
    transform: scale(0);

  opacity: 0;
  transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  /* transition: transform 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6); */
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
    transform: scale(1);
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
    transform: scale(0);

  }

  .error {
      font-size: 1.6rem;
      color: ${(props) => props.theme.colors.red};
    }

  .mymodal {
    width:90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: ${(props) => props.theme.colors.white};
  overflow: auto;
  border-radius: 1rem;
  outline: none;
  padding: 2rem;
}

.myoverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
}

  .hoverRotate{
    display: inline-block;
    transition: all 0.2s;
    color: ${({ theme }) => theme.colors.main};

    &:hover {
      transform: scale(1.2) rotate(-4deg);
    }
  }
`;
