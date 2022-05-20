import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

import { CardContextProvider } from './contexts';
import { Kanban } from './pages';

export const App: React.FC = () => {
  return (
    <CardContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Kanban />
      </ThemeProvider>
    </CardContextProvider>
  );
};
