import React from "react";
import { Container } from "./styles";

export function BoxText() {
  return (
    <Container data-aos="fade-up">
      <div className="boxText">
        <h1 data-aos="fade-up">NetFamilia</h1>
        <div className="contentBox">
          <p>
            Plano de intenet para família de baixa renda, basea no bolsa família
            a NetFamilia vem com propósito de levar a educação para as crianças.
          </p>
        </div>
      </div>
    </Container>
  );
}
