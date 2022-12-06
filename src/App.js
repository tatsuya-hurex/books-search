import BooksSearch from './components/BooksSearch';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Container maxW='container.sm'>
          <BooksSearch />
        </Container>
      </div>
    </ChakraProvider>
  );
}

export default App;