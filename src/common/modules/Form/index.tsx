import { Button } from "@/common/modules/Button";
import { useState } from "react";
import { Container } from "./styled";

export function FormModule() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  console.log(`input name ${name}`);
  console.log(`input email ${email}`);
  console.log(`input textArea ${textArea}`);

  return (
    <Container onSubmit={""}>
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
          placeholder="digite o email valido"
        />
      </label>
      <textarea
        cols={30}
        rows={10}
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
