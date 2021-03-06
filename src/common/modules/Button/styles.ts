import styled from "styled-components";

export const Container = styled.button`
  width: 13.125rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  padding: 1.5rem 2.1875rem;
  border: 2px solid #ffffff;
  border-radius: 50px;
  background-image: ${({ theme }) => theme.button.pinkGradient};
  transition: filter 0.5s;

  color: ${({ theme }) => theme.colorText.white};
  font-weight: 600;
  /* filter: brightness(0.8); */

  &:hover {
    filter: brightness(1.2);
  }
`;
