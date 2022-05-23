import './App.css';
import CartProvider from './context/Cart';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Cart from './components/Cart';
import ItensCart from './Pages/ItensCart';

function App() {
  return (
    <div className="App">
        <CartProvider>
          <Router>
            <Cart />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/carrinho" exact element={<ItensCart />} />
            </Routes>
          </Router>
        </CartProvider>
    </div>
  );
}

export default App;
