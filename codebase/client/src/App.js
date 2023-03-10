import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AccountBox from './components/accountBox';

import styled from "styled-components";

function App() {


  const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;


  return (
    <div className="App">
     
      <Nav />
      <AppContainer>
        <AccountBox />
      </AppContainer>
     <Footer />
    </div>
  );
}

export default App;
