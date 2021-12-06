import { Button } from "@/common/modules/Button";
import { api } from "@/service/api";
import axios from "axios";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Container } from "./styled";

interface IdataProps {
  nome: string;
  email: string;
  description: string;
}

export function FormModule() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");

  async function sendToExell() {
    const dataForm: IdataProps = {
      nome: name,
      email: email,
      description: textArea,
    };

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
        <p>Entre em contato</p>
        <h2>Educação é para todos!</h2>
      </div>
      <label>
        Nome completo
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Nome completo"
        />
      </label>
      <label>
        Seu e-mail
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Digite o email valido"
        />
      </label>
      <textarea
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
        required
        placeholder="Escreva aqui, não se preocupe não compartilhamos os dados."
      />
      <Button type="submit">
        <>Enviar</>
      </Button>
    </Container>
  );
}
