import React from "react";
import { Container, Content } from "./styles";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

export function Footer() {
  return (
    <Container>
      <Content>
        <Link href="/#">
          <a>NetFamilia.</a>
        </Link>
        <p>&#169; Feito com 💜, Diego Lopes.</p>
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
