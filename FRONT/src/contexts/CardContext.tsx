import { createContext, ReactNode, useEffect, useState } from 'react';

import { axiosHttpClient } from '../services';
import { CardType } from '../types';

type CardContextType = {
  cards: CardType[];
  getCards: () => Promise<void>;
  createCard: (title: string, description: string) => Promise<void>;
  updateCard: (params: CardType) => Promise<void>;
  deleteCard: (id: string) => Promise<void>;
};

type CardContextProviderProps = {
  children: ReactNode;
};

export const CardContext = createContext({} as CardContextType);

export const CardContextProvider = (
  props: CardContextProviderProps
): JSX.Element => {
  const [cards, setCards] = useState([] as CardType[]);
  const [token, setToken] = useState('');

  const getCards = async (): Promise<void> => {
    try {
      const result = await axiosHttpClient({
        url: '/cards',
        method: 'GET',
        token,
      });
      setCards(result.body);
    } catch (e) {
      console.error(e);
      alert(`Houve um erro ao pegar os Cards: ${e}`);
    }
  };

  const getToken = async () => {
    try {
      const result = await axiosHttpClient({
        url: '/login',
        method: 'POST',
        data: { login: 'letscode', senha: 'lets@123' },
      });
      setToken(result.body);
    } catch (e) {
      console.error(e);
      alert(`Houve um erro ao logar: ${e}`);
    }
  };

  useEffect(() => {
    getToken();
    if (token) {
      getCards();
    }
  }, [token]);

  const createCard = async (
    title: string,
    description: string
  ): Promise<void> => {
    try {
      if (!title || !description) {
        throw new Error('O "Título" e o "Contéudo" são obrigatórios.');
      }
      const result = await axiosHttpClient({
        url: '/cards',
        method: 'POST',
        data: {
          titulo: title,
          conteudo: description || '',
          lista: 'to do',
        },
        token,
      });
      setCards([...cards, result.body]);
    } catch (e) {
      console.error(e);
      alert(`Houve um erro ao criar o Card: ${e}`);
    }
  };

  const updateCard = async ({
    id,
    titulo,
    conteudo,
    lista,
  }: CardType): Promise<void> => {
    try {
      if (!titulo || !conteudo) {
        throw new Error('O "Título" e o "Contéudo" são obrigatórios.');
      }
      await axiosHttpClient({
        url: `/cards/${id}`,
        method: 'PUT',
        data: { id, titulo, conteudo, lista },
        token,
      });
    } catch (e) {
      console.error(e);
      alert(`Houve um erro ao atualizar o Card: ${e}`);
    }
  };

  const deleteCard = async (id: string): Promise<void> => {
    try {
      const result = await axiosHttpClient({
        url: `/cards/${id}`,
        method: 'DELETE',
        token,
      });
      setCards(result.body);
    } catch (e) {
      console.error(e);
      alert(`Houve um erro ao apagar o Card: ${e}`);
    }
  };

  return (
    <CardContext.Provider
      value={{ cards, getCards, createCard, updateCard, deleteCard }}
    >
      {props.children}
    </CardContext.Provider>
  );
};
