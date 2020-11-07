import styled from "styled-components";

export const Dialog = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;

  .content {
    padding: 1rem;
    /* height: 50%; */
    width: 90%;
    background-color: white;
    box-shadow: 0 2rem 4rem rgba($color-black, 0.2);
    border-radius: 1rem;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    transform: scale(0);

    &.dialog-open {
      transform: scale(1);
    }

    .header {
      display: flex;
      justify-content: space-between;

      h1 {
        font-weight: 500;
        font-size: 2.4rem;
      }

      span {
        position: relative;
        padding: 1.5rem;
        cursor: pointer;
        &::after,
        ::before {
          position: absolute;
          content: "";
          top: 1rem;
          right: 0;
          width: 3rem;
          height: 2px;
          background-color: black;
          display: inline-block;
          backface-visibility: hidden;
          transition: all 0.3s;
          transform: rotate(-45deg);
        }

        &::after {
          transform: rotate(45deg);
        }
      }
    }
  }

  &.dialog-open {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
`;
