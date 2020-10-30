import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  flex-wrap: wrap;

  &::after {
    content: "";
    border-bottom: 0.1rem solid ${(props) => props.theme.colors.grey};
    width: 100%;
    display: block;
  }

  div {
    font-size: 1.6rem;
  }

  ul {
    display: flex;
    list-style: none;
    /* align-items: center; */

    li {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      font-weight: 500;

      &:not(:last-child) {
        margin-right: 5rem;
      }

      a {
        text-decoration: none;
      }

      button {
        font-size: 1.4rem;

        padding: 1rem 4.5rem;
        outline: none;
        border-radius: 0.4rem;
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
            border: 0.1rem solid ${(props) => props.theme.colors.white};
          }
        }
      }
    }
  }
`;
