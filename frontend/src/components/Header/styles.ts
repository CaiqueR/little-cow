import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  flex-wrap: wrap;
  margin-bottom: 5px;

  .hover-effect {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      left: 0;
      right: 100%;
      bottom: 0;
      background: ${(props) => props.theme.colors.main};
      height: 4px;
      -webkit-transition-property: right;
      transition-property: right;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }

    &:hover {
      &::before {
        right: 0;
      }
    }
  }
  &::after {
    content: "";
    border-bottom: 0.1rem solid ${(props) => props.theme.colors.grey};
    width: 100%;
    display: block;
  }

  img {
    height: 8rem;
  }

  ul {
    display: flex;
    list-style: none;
    /* align-items: center; */

    @media (max-width: 1070px) {
      display: none;
    }

    li {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      font-weight: 500;

      &:not(:last-child) {
        margin-right: 5rem;
      }

      a {
        color: ${({ theme }) => theme.colors.black};
        text-decoration: none;

        &:visited {
          color: ${({ theme }) => theme.colors.black};
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

          box-shadow: 0px 0.2rem 0.5rem rgba(0, 0, 0, 0.2);

          &:hover {
            background-color: ${(props) => props.theme.colors.white};
            color: ${(props) => props.theme.colors.black};
            border: 0.1rem solid ${(props) => props.theme.colors.main};
          }
        }

        &.red {
          background-color: ${(props) => props.theme.colors.red};
          color: ${(props) => props.theme.colors.white};
          border: 0.1rem solid ${(props) => props.theme.colors.red};

          box-shadow: 0px 0.2rem 0.5rem rgba(0, 0, 0, 0.2);

          &:hover {
            box-shadow: none;

            background-color: ${(props) => props.theme.colors.white};
            color: ${(props) => props.theme.colors.black};
            border: 0.1rem solid ${(props) => props.theme.colors.red};
          }
        }
      }
    }
  }
`;
