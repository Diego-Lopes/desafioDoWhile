import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  margin: 2rem 0;
`;

export const Content = styled.div`
  width: 90%;
  margin: 2rem auto;

  display: flex;
  gap: 2rem;

  .boxImg {
    max-width: 50%;
  }

  @media screen and (max-width: 580px) {
    .boxImg {
      display: none;
    }
  }
`;
