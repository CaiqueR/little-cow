import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("home.svg"), url("woman.svg"), url("scene.svg");
  background-size: auto, auto, 80rem;
  background-repeat: no-repeat;
  background-position: 120rem bottom, 5rem bottom, -25rem 0;

  margin-top: -10vh;
  h1 {
    font-size: 5rem;
  }

  span {
    font-size: 1.8rem;
  }

  div {
    margin-top: 5rem;
    display: flex;

    > * {
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }

    button {
      font-size: 1.4rem;

      padding: 1rem 4.5rem;
      outline: none;
      border-radius: 1rem;
      font-weight: 500;

      background-color: ${(props) => props.theme.colors.white};
      border: 0.1rem solid ${(props) => props.theme.colors.main};

      cursor: pointer;

      transition: all 0.3s;

      &:hover {
        background-color: ${(props) => props.theme.colors.main};
        color: ${(props) => props.theme.colors.white};
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
  }
`;
