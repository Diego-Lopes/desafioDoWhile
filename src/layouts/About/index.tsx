import { Container, Container2, Wrapper } from "./styles";
import Image from "next/image";
import logoImg from "./img/ministerio.webp";
import arrowSvg from "./img/arrow.svg";
import React from "react";
import { MdComputer, MdFilterCenterFocus, MdHouse } from "react-icons/md";

export function About() {
  return (
    <Wrapper>
      <Container>
        <div className="boxImg" data-aos="fade-up">
          <Image src={logoImg} alt="Logo ministério da educação" />
        </div>
      </Container>
      <Container2>
        <div className="boxMinist" data-aos="fade-up">
          <p>Apoio</p>
          <h2>Ministério da educação</h2>
          <p>
            Com apoio do Ministério da Educação juntos acreditamos que a pobreza
            acaba com educação chega para todos.
          </p>
          <Image src={arrowSvg} alt="seta aleatória." />
        </div>
        <div className="containerPlane">
          <div
            className="boxPc --custom"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <MdComputer size="48" />
            <h5>kit básico de estudo</h5>
            <ul>
              <li>Conexção de 10Mb</li>
              <li>Kit computador básico.</li>
            </ul>
          </div>
          <div
            className="boxFocus --custom"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <MdFilterCenterFocus size="48" />
            <h5>Foco total</h5>
            <ul>
              <li>
                Para total aproveitamento alguns sites são bloqueados para não
                atrapalhar os estudos.
              </li>
            </ul>
          </div>
          <div
            className="boxHome --custom"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <MdHouse size="48" />
            <h5>Diversão em família</h5>
            <ul>
              <li>
                Ninguém é uma máquina, liberamos o acesso global nos fins de
                semana para aproveitar com a família.
              </li>
            </ul>
          </div>
        </div>
      </Container2>
    </Wrapper>
  );
}
