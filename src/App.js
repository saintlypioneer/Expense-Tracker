import logo from './logo.svg';
import './App.css';
import AllRoutes from './components/allRoutes';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <AllRoutes />
    </Container>
  );
}

const Container = styled.div``;

export default App;
