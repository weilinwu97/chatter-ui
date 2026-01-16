import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client/react';
import client from "./constants/apollo-client"
import router from './components/Routes';

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
        <Container>
          <RouterProvider router={router} />
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
