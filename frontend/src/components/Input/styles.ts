import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  label {
    font-size: 1.2rem;
  }
  input {
    padding: 1rem 1rem;
    border-radius: 0.5rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.black};
  }
`;
