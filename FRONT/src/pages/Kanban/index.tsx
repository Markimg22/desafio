import React from 'react';

import { Main } from './styles';
import { Sections } from '../../components';

export const Kanban: React.FC = () => {
  return (
    <Main>
      <Sections title="To do" />
      <Sections title="Doing" />
      <Sections title="Done" />
    </Main>
  );
};
