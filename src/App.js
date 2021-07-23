import './App.css';
import styled from 'styled-components'
import Toggle from './Components/HeaderToggle/Toggle';

const Container = styled.div`
  max-width: 90%;
  margin: auto;
`;

function App() {
  return (
    <Container>
      <Toggle/>
    </Container>
  );
}

export default App;
