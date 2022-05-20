export type CardType = {
  id: string;
  titulo: string;
  conteudo: string;
  lista?: 'to do' | 'doing' | 'done';
};
