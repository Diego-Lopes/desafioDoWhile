import { Button } from "@/common/modules/Button";
import { api } from "@/service/api";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Container } from "./styled";

interface IdataProps {
  nome: string;
  email: string;
  descricao: string;
}

export function FormModule() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [textArea, setTextArea] = useState<string>("");

  async function sendToExell() {
    const dataForm: IdataProps = {
      nome: name,
      email,
      descricao: textArea,
    };

    console.log(dataForm);

    await api
      .post("", dataForm)
      .then(() => {
        toast.success("Formulário enviado com sucesso. 🚀");
        setName("");
        setEmail("");
        setTextArea("");
      })
      .catch((err) => {
        toast.error(`${err.message}`);
      });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await sendToExell();
  }

  return (
    <Container onSubmit={handleSubmit}>
      <div className="boxText">
        <p data-aos="fade-up" data-aos-delay="250">
          Entre em contato
        </p>
        <h2 data-aos="fade-up" data-aos-delay="270">
          Educação é para todos!
        </h2>
      </div>
      <label data-aos="fade-up" data-aos-delay="200">
        Nome completo
        <input
          data-aos="fade-up"
          data-aos-delay="300"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Nome completo"
        />
      </label>
      <label data-aos="fade-up" data-aos-delay="200">
        Seu e-mail
        <input
          data-aos="fade-up"
          data-aos-delay="300"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Digite o email valido"
        />
      </label>
      <textarea
        data-aos="fade-up"
        data-aos-delay="500"
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
        required
        placeholder="Escreva aqui, não se preocupe não compartilhamos os dados."
      />
      <Button type="submit" data-aos="fade-up" data-aos-delay="350">
        <>Enviar</>
      </Button>
    </Container>
  );
}
