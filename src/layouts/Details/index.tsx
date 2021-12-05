import { Container, Content } from "./styles";
import Image from "next/image";
import logoImg from "./img/mulherDiploma.webp";
import React from "react";
import { Button } from "@/common/modules/Button";

export function Details() {
  return (
    <Container>
      <Content>
        <div className="boxImg">
          <Image src={logoImg} alt="Mulher com certificação" />
        </div>
        <div className="boxText">
          <p>Como funciona</p>
          <h2>NetFamilia?</h2>
          <p>
            É um programa que ajuda família de baixa renda, levando o
            conhecimento e educação para as crianças.
          </p>
          <h2>Quanto tempo dura a programação?</h2>
          <p>
            São dois critério primeiro, quando o adolecente terminar o ensino
            médio e estiver trabalhando.
          </p>
          <p>
            Ou quando a renda familiar não está mais na faixa dos nossos
            parâmetros.
          </p>

          <Button>
            <>Quero participar</>
          </Button>
        </div>
      </Content>
    </Container>
  );
}
