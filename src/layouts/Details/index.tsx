import { Container, Content } from "./styles";
import Image from "next/image";
import logoImg from "./img/mulherDiploma.webp";
import React from "react";
import { Button } from "@/common/modules/Button";
import Link from "next/link";

export function Details() {
  return (
    <Container id="about">
      <Content>
        <div className="boxImg" data-aos="fade-up">
          <Image src={logoImg} alt="Mulher com certificação" />
        </div>
        <div className="boxText" data-aos="fade-up">
          <p data-aos="fade-up" data-aos-delay="200">
            Como funciona
          </p>
          <h2 data-aos="fade-up" data-aos-delay="300">
            NetFamilia?
          </h2>
          <p data-aos="fade-up" data-aos-delay="300">
            É um programa que ajuda família de baixa renda, levando o
            conhecimento e educação para as crianças.
          </p>
          <h2 data-aos="fade-up" data-aos-delay="500">
            Quanto tempo dura a programação?
          </h2>
          <p data-aos="fade-up" data-aos-delay="500">
            São dois critério primeiro, quando o adolecente terminar o ensino
            médio e estiver trabalhando.
          </p>
          <p data-aos="fade-up" data-aos-delay="500">
            Ou quando a renda familiar não está mais na faixa dos nossos
            parâmetros.
          </p>

          <Link href="#form" data-aos="fade-up" data-aos-delay="450">
            <a>
              <Button data-aos="fade-up" data-aos-delay="450">
                <>Quero participar</>
              </Button>
            </a>
          </Link>
        </div>
      </Content>
    </Container>
  );
}
