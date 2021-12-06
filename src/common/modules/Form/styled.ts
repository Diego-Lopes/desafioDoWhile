import styled from "styled-components";

export const Container = styled.form`
  .boxText {
    margin-bottom: 2.5rem;
    p {
      color: ${({ theme }) => theme.colorText.orange};
      font-weight: 400;
    }

    h2 {
      font-size: 2.25rem;
      line-height: 53px;
    }
  }

  label {
    display: flex;
    flex-direction: column;
  }
`;
