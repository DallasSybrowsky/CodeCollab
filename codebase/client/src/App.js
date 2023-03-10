import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AppContainer from './components/accountBox/index'
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <AppContainer>hello</AppContainer>
      <Nav />
     <Footer />
    </div>
  );
}

export default App;
