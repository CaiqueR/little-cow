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

  transition: all 0.2s;
  .navigation__button {
    background-color: red;
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 1rem;
    right: 2rem;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
    text-align: center;

    cursor: pointer;

    &:hover {
      .navigation__icon::before {
        top: -1rem;
      }

      .navigation__icon::after {
        top: 1rem;
      }
    }
  }

  .navigation__icon {
    position: relative;
    margin-top: 3.3rem;
    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: black;
      display: inline-block;
      backface-visibility: hidden;
      transition: all 0.3s;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
    }

    &::before {
      top: -0.8rem;
    }

    &::after {
      top: 0.8rem;
    }
  }

  input {
    display: none;
  }

  .navigation__checkbox:checked ~ ul {
    visibility: visible;
    width: 100vw;
  }

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

    transition: all 0.2s;
    @media (max-width: 1070px) {
      visibility: hidden;
      height: 100vh;
      background-color: ${(props) => props.theme.colors.background};
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
    }

    li {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      font-weight: 500;

      &:not(:last-child) {
        margin-right: 5rem;
      }
      position: relative;
      a {
        color: ${({ theme }) => theme.colors.black};
        text-decoration: none;

        &:visited {
          color: ${({ theme }) => theme.colors.black};
        }

        &.active {
          &::after {
            content: "";
            position: absolute;
            z-index: -1;
            left: 0;
            right: 0;
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
        }
      }

      button {
        @media (max-width: 1070px) {
          padding: 0;
          border-radius: 0;
          border: 0;
          background-color: ${(props) => props.theme.colors.white} !important;
          box-shadow: none !important;
          color: ${(props) => props.theme.colors.black} !important;

          /* &.purple {
            background-color: ${(props) => props.theme.colors.black};
            color: ${(props) => props.theme.colors.main};
          } */
        }
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
