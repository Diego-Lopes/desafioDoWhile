import React from "react";
import { Container, Content } from "./styles";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export function Footer() {
  function handleTop() {
    window.scroll({ top: 0, behavior: "smooth" });
  }
  return (
    <Container>
      <Content>
        <button type="button" onClick={handleTop}>
          NetFamilia.
        </button>

        <p>
          &#169; Feito com 💜{" "}
          <a href="https://www.diegodev.com.br" target="_blank">
            Diego Lopes
          </a>
          .
        </p>
        <div className="boxIcons">
          <a href="https://www.instagram.com/diego.loop/" className="--icon">
            <AiFillInstagram size="24" />
          </a>
          <a
            href="https://www.linkedin.com/in/diego-lopes-37877a105/"
            className="--icon"
          >
            <AiFillLinkedin size="24" />
          </a>
        </div>
      </Content>
    </Container>
  );
}
