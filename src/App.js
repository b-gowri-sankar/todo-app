import './App.css';
import styled from 'styled-components'
import Toggle from './Components/HeaderToggle/Toggle';

const Container = styled.div`
  max-width: 80%;
  margin: auto;
   
  @media only screen and (min-width: 750px){
    max-width: 70%
  }

  @media only screen and (min-width: 850px){
    max-width: 60%;
  }

  @media only screen and (min-width: 1000px){
    max-width: 50%;
  }

`;

function App() {
  return (
    <Container>
      <Toggle/>
    </Container>
  );
}

export default App;
