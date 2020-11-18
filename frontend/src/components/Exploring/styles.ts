import styled from "styled-components";

export const Container = styled.div`
  /* background-color: #808080; */
  height: calc(100vh - 11vh);
  /* overflow: hidden; */

  padding: 0 15%;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ExploreVaquinha = styled.div`
  cursor: pointer;

  margin: 15px;
  width: 25rem;
  height: 35rem;

  background-color: #fff;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  border-radius: 3rem;

  overflow: hidden;

  transition: all 0.3s;
  transition-timing-function: ease-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: -10px 30px 2rem rgba(0, 0, 0, 0.2);
  }

  > img {
    min-width: 100%;
    height: 50%;

    display: block;
    margin-left: -5px;
    /* padding: 10px; */
  }

  > div {
    margin: 5%;
    height: 43%;
    /* background-color: #aaa; */
  }

  > .footer {
    display: flex;
    justify-content: space-between !important;
    bottom: 10px;
    background-color: #000;
  }
`;
