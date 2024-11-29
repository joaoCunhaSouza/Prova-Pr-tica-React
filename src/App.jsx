import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from './pages/Header';
import { Footer } from './pages/Footer';
import { Transacao } from "./pages/Transacao";
import Container from './container';
import './style.css';

function App() {
  return (
    <>
      {}
      <Header />
      
      <Container>
        {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Transacoes" element={<Transacao />} />
        </Routes>
        
      </Container>

      <Footer />
    </>
  );
}

export default App;
