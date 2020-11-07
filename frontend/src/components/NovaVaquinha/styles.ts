import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("heroalternative3.svg"), url("heroalternative.svg"),
    url("scene.svg");
  background-size: 60rem, auto, 80rem;
  background-repeat: no-repeat;
  background-position: 120rem bottom, 5rem bottom, -25rem 0;

  margin-top: -10vh;
`;

export const ContainerLogin = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  box-shadow: 0px 0.7rem 1.5rem rgba(0, 0, 0, 0.2);
  width: 50rem;
  padding: 1rem 2rem;

  div {
    display: flex;
    justify-content: center;
  }
  img {
    height: 10rem;
    width: 12rem;
  }

  h1 {
    font-size: 2.4rem;
  }

  form {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      input {
        padding: 1rem 1rem;
        border-radius: 0.5rem;
        border: 0.1rem solid ${({ theme }) => theme.colors.black};
      }
    }

    button {
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
        border: 0.1rem solid ${(props) => props.theme.colors.white};
      }

      &.purple {
        background-color: ${(props) => props.theme.colors.main};
        color: ${(props) => props.theme.colors.white};

        box-shadow: 0px 0.7rem 1.5rem rgba(0, 0, 0, 0.2);

        &:hover {
          background-color: ${(props) => props.theme.colors.white};
          color: ${(props) => props.theme.colors.black};
          border: 0.1rem solid ${(props) => props.theme.colors.white};
        }
      }
    }
  }

  span {
    margin-top: 5rem;
    font-size: 1.2rem;

    a {
      display: inline-block;
      transition: all 0.2s;
      margin-left: 0.5rem;
      color: ${({ theme }) => theme.colors.main};

      &:hover {
        transform: scale(1.2) rotate(-4deg);
      }
    }
  }
`;
