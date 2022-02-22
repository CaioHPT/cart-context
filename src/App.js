import './App.css';
import CartProvider from './context/Cart';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Carrinho from './components/Carrinho';
import ItensCarrinho from './Pages/ItensCarrinho';

function App() {
  return (
    <div className="App">
        <CartProvider>
          <Router>
            <Carrinho />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/carrinho" exact element={<ItensCarrinho />} />
            </Routes>
          </Router>
        </CartProvider>
    </div>
  );
}

export default App;
