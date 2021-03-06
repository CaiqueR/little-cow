import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 11vh);

  padding: 0 10%;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Content = styled.div``;

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
  }

  > div .body {
    width: 100%;
    height: 75%;

    overflow: hidden;
  }

  > div .footer {
    display: flex;
    justify-content: space-between;
    bottom: 10px !important;
  }

  > div .bar {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > a {
    background-color: #f00;
    color: #f00;
    text-decoration: none !important;
    align-items: center;
  }
`;
