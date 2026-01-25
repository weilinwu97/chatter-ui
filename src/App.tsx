import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client/react';
import client from "./constants/apollo-client"
import router from './components/Routes';
import Guard from './components/auth/Guards';
import Header from './components/header/Header';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const App = () => {

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
          <Container>
            <Guard>
              <RouterProvider router={router} />
            </Guard>
          </Container>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
