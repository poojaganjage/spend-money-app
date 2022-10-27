import {useState, useEffect} from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import products from './products.json';
import './App.css';

function App() {
  const [money, setMoney] = useState(10000);
  const [total, setTotal] = useState(0);
  const [basket, setBasket] = useState([]);

  useEffect(() => { // amount => count
    setTotal(basket.reduce((acc, item) => {
      return acc + item.amount * products.find((product) => product.id === item.id).price
    }, 0));
  }, [basket]);
  return (
    <div>
      <Header total={total} money={money} />
      <div className='container'>
        <Card basket={basket} setBasket={setBasket} total={total} money={money} products={products} />
      </div>
      {basket.length > 0 && <Footer total={total} basket={basket} setBasket={setBasket} />}
    </div>
  );
}
export default App;
