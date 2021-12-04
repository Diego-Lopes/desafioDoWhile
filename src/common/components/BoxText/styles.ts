import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 0 0;

  .boxText {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1 {
      font-size: 3.625rem;
      font-weight: 700;
      line-height: 80px;
      letter-spacing: 0.02rem;
      color: ${({ theme }) => theme.colorText.darkblue};
    }

    .contentBox {
      font-size: 1.25rem;
      line-height: 36px;
      width: 90%;
      color: ${({ theme }) => theme.colorText.gray70};

      @media screen and (max-width: 500px) {
        line-height: 27px;
      }
    }

    @media screen and (min-width: 1080px) {
      display: block;

      h1 {
        margin-bottom: 2rem;
      }
    }
  }

  @media screen and (max-width: 500px) {
    max-width: 100%;
  }
`;
