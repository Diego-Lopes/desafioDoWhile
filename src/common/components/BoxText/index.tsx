import React from "react";
import { Container } from "./styles";

export function BoxText() {
  return (
    <Container className="Containerbox">
      <div className="boxText">
        <h1>NetFamilia</h1>
        <div className="contentBox">
          <p>
            Plano de intenet para família de baixíssima renda, basea no bolsa
            família a NetFamilia vem com propósito de levar a educação para as
            crianças.
          </p>
        </div>
      </div>
    </Container>
  );
}
