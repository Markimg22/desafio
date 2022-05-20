import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useCard } from '../../hooks';

import { Card } from '../Card';
import { Section, Title, Container, Button } from './styles';

type Props = {
  title: string;
};

export const Sections: React.FC<Props> = (props) => {
  const { cards } = useCard();
  const [isCreating, setIsCreating] = useState(false);

  return (
    <Section>
      <Title>{props.title}</Title>
      <Container>
        <>
          {cards.map((card) => {
            if (card.lista?.toUpperCase() === props.title.toUpperCase()) {
              return (
                <Card
                  key={card.id}
                  card={{
                    id: card.id,
                    titulo: card.titulo,
                    conteudo: card.conteudo,
                  }}
                />
              );
            }
          })}
          {isCreating && (
            <Card
              create={{
                isCreating,
                setIsCreating,
              }}
            />
          )}
          <Button
            onClick={() => {
              setIsCreating(true);
            }}
          >
            <FaPlusCircle />
          </Button>
        </>
      </Container>
    </Section>
  );
};
