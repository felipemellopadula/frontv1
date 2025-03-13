import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes'; // Ajuste o caminho conforme sua estrutura
import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;