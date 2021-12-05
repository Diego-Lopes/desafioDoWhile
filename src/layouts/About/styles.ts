import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 8.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .boxImg {
    width: 30%;
  }

  img {
    max-width: 100% !important;
  }

  @media screen and (max-width: 580px) {
    height: 100%;

    .boxImg {
      width: 80%;
    }
  }
`;

export const Container2 = styled.div`
  width: 80%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media screen and (max-width: 580px) {
    flex-wrap: wrap-reverse;
  }

  .boxMinist {
    p:first-child {
      color: ${({ theme }) => theme.colorText.orange};
    }

    h2 {
      font-size: 2.25rem;

      margin: 0.75rem 0 1.5rem 0;
    }

    p:last-of-type {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colorText.gray70};
    }

    img {
      /* transform: rotate(-34.32deg); */
      /* transform: perspective(15deg); */
    }
  }

  .--custom {
    width: 50%;
    height: 17.9375rem;
    padding: 1rem;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    h5 {
      font-size: 1.25rem;
      font-weight: 500;
      margin: 0.5rem 0 1.1875rem 0;
    }
    li {
      font-size: 0.9375rem;
      list-style-type: circle;
    }

    @media screen and (max-width: 580px) {
      width: 100%;
    }
  }

  .boxPc {
    svg {
      color: ${({ theme }) => theme.colorIcons.blue};
    }
    ul {
      height: 3.5rem;
      margin-bottom: 2.5rem;
    }
  }
  .boxFocus {
    svg {
      color: ${({ theme }) => theme.colorIcons.green};
    }
  }

  .boxHome {
    svg {
      color: ${({ theme }) => theme.colorIcons.pink};
    }
  }
`;
