import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.background.darkblue};
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  .boxImg {
    max-width: 50%;
    margin-top: 2rem;
  }

  .boxText {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
    p:first-of-type {
      color: ${({ theme }) => theme.colorText.orange};
      font-weight: 400;
    }
    h2 {
      font-size: 2.25rem;
      color: ${({ theme }) => theme.colorText.white};
      line-height: 60px;

      @media screen and (max-width: 580px) {
        line-height: 30px;
      }
    }
    p {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 20px;

      color: ${({ theme }) => theme.colorText.white};
    }
  }

  @media screen and (max-width: 580px) {
    flex-direction: column;

    .boxImg {
      max-width: 100%;

      margin-bottom: 2rem;
    }

    .boxText {
      width: 100%;
    }
  }
`;
