import React, { useState } from 'react';
import {
  FaPencilAlt,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaBan,
} from 'react-icons/fa';

import { useCard } from '../../hooks';
import { CardType } from '../../types';
import {
  Container,
  Header,
  Title,
  Description,
  Input,
  Button,
  Delete,
  Create,
  Update,
  ContainerButtons,
  ContainerArrows,
  Stop,
  TextArea,
} from './styles';

type Props = {
  card?: CardType;
  create?: {
    isCreating: boolean;
    setIsCreating: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export const Card: React.FC<Props> = (props) => {
  const { createCard, cards, deleteCard, updateCard, getCards } = useCard();
  const [text, setText] = useState(props.card?.titulo || '');
  const [content, setContent] = useState(props.card?.conteudo || '');
  const [isUpdating, setIsUpdating] = useState(false);

  const createStatus = (): JSX.Element => {
    return (
      <>
        <Header>
          <Input
            placeholder="Título"
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
          />
        </Header>
        <hr />
        <TextArea
          placeholder="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <ContainerButtons>
          <Delete
            onClick={() => {
              props.create?.setIsCreating(false);
              setText('');
              setContent('');
            }}
          >
            Cancelar
          </Delete>
          <Create
            onClick={async () => {
              await createCard(text, content);
              props.create?.setIsCreating(false);
              setText('');
              setContent('');
            }}
          >
            Criar
          </Create>
        </ContainerButtons>
      </>
    );
  };

  const normalStatus = (): JSX.Element => {
    return (
      <>
        <Header>
          <Title>{props.card?.titulo}</Title>
          <Button onClick={() => setIsUpdating(true)}>
            <FaPencilAlt />
          </Button>
        </Header>
        <hr />
        <Description>{props.card?.conteudo}</Description>
      </>
    );
  };

  const updateStatus = (id?: string): JSX.Element | undefined => {
    for (const card of cards) {
      if (card.id === id) {
        return (
          <>
            <Header>
              <Input
                placeholder="Título"
                value={text}
                onChange={(e) => setText(e.target.value)}
                autoFocus
              />
              <Stop onClick={() => setIsUpdating(false)}>
                <FaBan />
              </Stop>
            </Header>
            <hr />
            <TextArea
              placeholder="Conteúdo"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <ContainerArrows>
              {card.lista !== 'to do' ? (
                <Button
                  onClick={async () => {
                    if (card.lista === 'doing') {
                      await updateCard({
                        id: card.id,
                        titulo: card.titulo,
                        conteudo: card.conteudo,
                        lista: 'to do',
                      });
                      await getCards();
                    } else if (card.lista === 'done') {
                      await updateCard({
                        id: card.id,
                        titulo: card.titulo,
                        conteudo: card.conteudo,
                        lista: 'doing',
                      });
                      await getCards();
                    }
                  }}
                >
                  <FaArrowAltCircleLeft />
                </Button>
              ) : (
                <p />
              )}
              {card.lista !== 'done' ? (
                <Button
                  onClick={async () => {
                    if (card.lista === 'to do') {
                      await updateCard({
                        id: card.id,
                        titulo: card.titulo,
                        conteudo: card.conteudo,
                        lista: 'doing',
                      });
                      await getCards();
                    } else if (card.lista === 'doing') {
                      await updateCard({
                        id: card.id,
                        titulo: card.titulo,
                        conteudo: card.conteudo,
                        lista: 'done',
                      });
                      await getCards();
                    }
                  }}
                >
                  <FaArrowAltCircleRight />
                </Button>
              ) : (
                <p />
              )}
            </ContainerArrows>
            <ContainerButtons>
              <Delete
                onClick={async () => {
                  await deleteCard(card.id);
                  setIsUpdating(false);
                  setText('');
                  setContent('');
                }}
              >
                Apagar
              </Delete>
              <Update
                onClick={async () => {
                  await updateCard({
                    id: card.id,
                    titulo: text,
                    conteudo: content,
                    lista: card.lista,
                  });
                  await getCards();
                  setIsUpdating(false);
                }}
              >
                Atualizar
              </Update>
            </ContainerButtons>
          </>
        );
      }
    }
  };

  return (
    <Container>
      {!isUpdating && !props.create?.isCreating && normalStatus()}
      {isUpdating && updateStatus(props.card?.id)}
      {props.create?.isCreating && createStatus()}
    </Container>
  );
};
