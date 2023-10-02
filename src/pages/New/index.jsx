import { useState } from "react";

import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTags, setNewTags] = useState("");

  const navigate = useNavigate();

  function handleLink(event) {
    setNewLink(event.target.value);
  }

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleTag(event) {
    setNewTags(event.target.value);
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTags]);
    setNewTags("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  function handleBack() {
    navigate(-1);
  }

  async function handleNewNote() {
    if (newTags) {
      return alert("Você esqueceu de adicionar a tag");
    }

    if (newLink) return alert("Você esqueceu de adicionar o link");

    await api.post("/notes", { title, description, tags, links });

    alert("Nota criada com sucesso");

    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title="voltar" onClick={handleBack} />
          </header>
          <Input
            placeholder="Título"
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextArea
            placeholder="Observações"
            onChange={(event) => setDescription(event.target.value)}
          />
          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              isnew
              placeholder="Novo link"
              value={newLink}
              onChange={handleLink}
              onClick={handleAddLink}
            />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <NoteItem
                isnew
                placeholder="Nova tag"
                value={newTags}
                onChange={handleTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title="Save" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
