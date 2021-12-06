import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 100%;
  padding: 2rem;

  background: ${({ theme }) => theme.background.darkblue};
  background-image: url("./img/backgroundFooter.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  a {
    font-size: 1.625rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colorText.white};
    font-style: italic;
  }
  p {
    font-weight: 400;
    color: ${({ theme }) => theme.colorText.white};
  }

  .boxIcons {
    display: flex;
    gap: 2rem;

    .--icon {
      display: flex;
      align-items: center;
      background-color: #ffffff;
      padding: 3px;
      border-radius: 5px;
      svg {
        color: ${({ theme }) => theme.colorIcons.pink};
      }

      &:hover {
        filter: brightness(0.5);
      }
    }
  }
  @media screen and (max-width: 580px) {
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;
    a {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;
