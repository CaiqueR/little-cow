import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 3rem;
  max-width: 104.8rem;
  margin: 0 auto;

  div {
    &.loading {
      margin-top: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  img {
    box-shadow: 0px 0.7rem 1.5rem rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 30rem;
    object-fit: cover;
    border-radius: 3rem;
  }

  .border-radius {
    div {
      border-radius: 3rem;
    }
  }

  .main {
    display: flex;
  }
`;

interface Props {
  width?: string;
}

export const Details = styled.div<Props>`
  margin-top: 3rem;
  &:last-child {
    margin-left: 1rem;
  }
  padding: 4rem;
  box-shadow: 0px 0.7rem 1.5rem rgba(0, 0, 0, 0.2);
  border-radius: 3rem;
  width: ${(props) => props.width || "100%"};

  div {
    &.contribuir {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }
      p {
        font-weight: 500;
        font-size: 1.8rem;
      }
      span {
        font-weight: 700;
        font-size: 3rem;
        color: ${(props) => props.theme.colors.main};
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
      }
    }
    &.header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
  }
  h1 {
    font-size: 3rem;
    font-weight: 500;
  }

  p {
    text-align: justify;
    font-size: 1.4rem;
  }

  div {
    display: flex;

    .contribute {
      width: 100%;
      /* padding: 0 5rem; */
      /* display: flex; */
      flex-direction: column;

      justify-content: space-between;
      font-size: 1.4rem;

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
      }
    }
  }
`;
