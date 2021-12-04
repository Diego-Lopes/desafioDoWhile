import { BoxText } from "@/common/components/BoxText";
import React from "react";
import Image from "next/image";
import logoImg from "./img/mocahello.webp";
import { Container, Content } from "./styles";
import { Button } from "@/common/modules/Button";
import { MdPlayCircleOutline } from "react-icons/md";

export function HomeLayout() {
  return (
    <Container className="containerHome">
      <Content className="contentHome">
        <span className="boxLeft">
          <BoxText />
          <div className="boxButton">
            <Button className="--buttonModificationInHomeFirst">
              <>Como funciona?</>
            </Button>
            <Button className="--buttonModificationInHome">
              <>
                <MdPlayCircleOutline size="16" />
                Assista o vídeo
              </>
            </Button>
          </div>
        </span>
        <Image src={logoImg} className="img" />
      </Content>
    </Container>
  );
}
