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
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 30px;

    input {
      height: 3.625rem;
    }
  }
  textarea,
  input {
    background-color: ${({ theme }) => theme.colorInput.whiteLight};
    padding: 0.75rem;

    border: none;
  }

  textarea {
    resize: none;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    height: 10rem;
  }
`;
