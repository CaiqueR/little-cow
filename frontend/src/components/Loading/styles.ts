import styled from "styled-components";

interface Props {
  length: string;
  border: string;
  color?: string;
}
export const Container = styled.div<Props>`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${(props) => props.length};
  height: ${(props) => props.length};
  margin-top: 0 !important;
  border: ${(props) => props.border} solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${(props) => props.theme.colors[props.color]} transparent
    transparent transparent;
  &.ring1 {
    animation-delay: -0.45s;
  }
  &.ring2 {
    animation-delay: -0.3s;
  }
  &.ring3 {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
