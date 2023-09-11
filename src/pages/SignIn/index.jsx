import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="email" icon={FiMail} />

        <Input placeholder="Password" type="password" icon={FiLock} />

        <Button title="Entrar" type="submit" />

        <a href="#">Criar conta</a>
      </Form>

      <Background />
    </Container>
  );
}
