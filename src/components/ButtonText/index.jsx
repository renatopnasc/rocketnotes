import { Container } from "./styles";

export function ButtonText({ title, isactive = false, ...rest }) {
  return (
    <Container $isactive={isactive.toString()} type="button" {...rest}>
      {title}
    </Container>
  );
}
