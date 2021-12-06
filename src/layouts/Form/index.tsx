import React from "react";
import Image from "next/image";
import logoImg from "./img/mocaApontando.webp";
import { Container, Content } from "./styles";
import { FormModule } from "@/common/modules/Form";

export function Form() {
  return (
    <Container id="form">
      <Content>
        <div className="boxImg">
          <Image
            src={logoImg}
            alt="moça sorrindo apontando para o formúlario."
          />
        </div>
        <FormModule />
      </Content>
    </Container>
  );
}
