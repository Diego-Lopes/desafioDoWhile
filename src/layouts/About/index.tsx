import { Container, Container2 } from "./styles";
import Image from "next/image";
import logoImg from "./img/ministerio.webp";
import arrowSvg from "./img/arrow.svg";
import React from "react";
import { MdComputer, MdFilterCenterFocus, MdHouse } from "react-icons/md";

export function About() {
  return (
    <>
      <Container>
        <div className="boxImg">
          <Image src={logoImg} alt="Logo ministério da educação" />
        </div>
      </Container>
      <Container2>
        <div className="boxMinist">
          <p>Apoio</p>
          <h2>Ministério da educação</h2>
          <p>
            Com apoio do Ministério da Educação juntos acreditamos que a pobreza
            acaba com educação chega para todos.
          </p>
          <Image src={arrowSvg} alt="seta aleatória." />
        </div>
        <div className="boxPc --custom">
          <MdComputer size="48" />
          <h5>kit básico de estudo</h5>
          <ul>
            <li>Conexção de 10Mb</li>
            <li>Kit computador básico.</li>
          </ul>
        </div>
        <div className="boxFocus --custom">
          <MdFilterCenterFocus size="48" />
          <h5>kit básico de estudo</h5>
          <ul>
            <li>
              Para total aproveitamento alguns sites são bloqueados para não
              atrapalhar os estudos.
            </li>
          </ul>
        </div>
        <div className="boxHome --custom">
          <MdHouse size="48" />
          <h5>kit básico de estudo</h5>
          <ul>
            <li>
              Ninguém é uma máquina, liberamos o acesso global nos fins de
              semana para aproveitar com a família.
            </li>
          </ul>
        </div>
      </Container2>
    </>
  );
}
