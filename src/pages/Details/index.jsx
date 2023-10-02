import { Container, Links, Content } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleDeleteNote(id) {
    const confirmDeletedNote = confirm(
      "Você tem certeza que deseja excluir a nota?"
    );

    if (confirmDeletedNote) {
      await api.delete(`/notes/${id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);
  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText
              isactive
              title="Excluir nota"
              onClick={() => handleDeleteNote(params.id)}
            />

            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <Section title="Links úteis">
              <Links>
                {data.links.map((link) => (
                  <li key={String(link.id)}>
                    <a target="_blank" href={link.url}>
                      {link.url}
                    </a>
                  </li>
                ))}
              </Links>
            </Section>

            <Section title="Marcadores">
              {data.tags.map((tag) => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))}
            </Section>

            <Button onClick={handleBack} title="Voltar" />
          </Content>
        </main>
      )}
    </Container>
  );
}
