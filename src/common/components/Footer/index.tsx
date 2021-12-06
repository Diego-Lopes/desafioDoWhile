import React from "react";
import { Container, Content } from "./styles";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

export function Footer() {
  return (
    <Container>
      <Content>
        <Link href="/">
          <a>NetFamilia.</a>
        </Link>
        <p>&#169; Feito com 💜, Diego Lopes.</p>
        <div className="boxIcons">
          <a href="" className="--icon">
            <AiFillInstagram size="24" />
          </a>
          <a href="" className="--icon">
            <AiFillLinkedin size="24" />
          </a>
        </div>
      </Content>
    </Container>
  );
}
