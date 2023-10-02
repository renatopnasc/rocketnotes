import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register" href="#">
          Criar conta
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
