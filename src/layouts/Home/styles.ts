import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 0 0;

  background-image: url("./img/background.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;

  margin: 0 auto;

  .img {
    max-width: 80%;
  }

  .boxLeft {
    display: flex;
    flex-direction: column;

    width: 70%;

    .boxButton {
      width: 100%;
      display: flex;

      justify-content: center;
      align-items: center;

      .--buttonModificationInHomeFirst {
        color: ${({ theme }) => theme.colorText.white};
      }

      .--buttonModificationInHome {
        background-image: none;
        background: transparent;
      }

      @media screen and (max-width: 500px) {
        width: 100%;

        flex-direction: column;
        gap: 1.75rem;
      }
    }

    @media screen and (max-width: 500px) {
      width: 100%;

      gap: 2rem;
    }

    @media screen and (min-width: 1080px) {
      gap: 7rem;
    }
  }

  @media screen and (max-width: 580px) {
    width: 90%;

    flex-direction: column;

    img {
      width: 95% !important;
    }
  }

  @media screen and (min-width: 1080px) {
    width: 80%;

    padding: 2rem 0 0;
  }
`;
