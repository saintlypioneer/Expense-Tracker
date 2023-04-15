import logo from './logo.svg';
import './App.css';
import AllRoutes from './components/allRoutes';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Container>
      <NavBar>
        <Link style={{
          padding: "5px 10px",
          fontWeight: "600",
          backgroundColor: "black",
          color: "white"
        }} to="/login">Login</Link>
        <Link style={{
          padding: "5px 10px",
          fontWeight: "600",
          backgroundColor: "black",
          color: "white"
        }} to="/signup">Signup</Link>
        <Link style={{
          padding: "5px 10px",
          fontWeight: "600",
          backgroundColor: "black",
          color: "white"
        }} to="/dashboard">Dashboard</Link>
        {/* <Link style={{
          padding: "5px 10px",
          fontWeight: "600",
          backgroundColor: "black",
          color: "white"
        }} to="/logout">Logout</Link> */}
      </NavBar>
      <AllRoutes />
    </Container>
  );
}

const Container = styled.div``;

const NavBar = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;

export default App;
