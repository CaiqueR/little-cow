import styled from "styled-components";

interface Props {
  widthProps: number;
}
export const Container = styled.div<Props>`
  display: flex;
  width: 100%;
  height: 0.7rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.grey};

  .progress-bar {
    border-radius: 0.5rem;
    height: 0.7rem;
    width: ${(props) => props.widthProps}% !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: ${(props) => props.theme.colors.main};
    transition: width 0.6s ease;
  }
`;
