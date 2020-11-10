import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  max-width: 104.8rem;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    font-weight: 500;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  p {
    font-size: 1.6rem;
  }
`;

export const Vaquinha = styled.li`
  flex-basis: 30rem;
  flex-shrink: 0;

  margin: 3rem 1.5rem;

  height: 45rem;
  /* width: 30rem; */
  box-shadow: 0px 0.7rem 1.5rem rgba(0, 0, 0, 0.2);
  border-radius: 3rem;

  img {
    border-radius: 3rem 3rem 0 0;
    max-width: 100%;
    max-height: 100%;
    object-fit: fill;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0.5rem 2rem;
    height: 50%;

    h1 {
      font-size: 1.6rem;
      font-weight: 500;
    }

    p {
      font-size: 1.4rem;
    }

    main {
      display: flex;
      justify-content: space-between;
    }
  }

  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
