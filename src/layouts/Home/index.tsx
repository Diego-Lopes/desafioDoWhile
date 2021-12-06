import { BoxText } from "@/common/components/BoxText";
import React from "react";
import Image from "next/image";
import logoImg from "./img/mocahello.webp";
import { Container, Content } from "./styles";
import { Button } from "@/common/modules/Button";
import { MdPlayCircleOutline } from "react-icons/md";
import Link from "next/link";

export function HomeLayout() {
  return (
    <Container className="containerHome" id="/#">
      <Content className="contentHome">
        <span className="boxLeft">
          <BoxText />
          <div className="boxButton">
            <Link href="#about" data-aos="fade-up" data-aos-delay="200">
              <a>
                <Button
                  className="--buttonModificationInHomeFirst"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <>Como funciona?</>
                </Button>
              </a>
            </Link>
            <Button
              className="--buttonModificationInHome"
              style={{ border: "2px solid black" }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <>
                <MdPlayCircleOutline size="16" style={{ color: "black" }} />
                <p style={{ color: "black" }}>Assista o vídeo</p>
              </>
            </Button>
          </div>
        </span>
        <Image
          src={logoImg}
          className="img"
          data-aos="fade-up"
          data-aos-delay="250"
        />
      </Content>
    </Container>
  );
}
