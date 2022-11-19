import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Cryptocurrency from './Cryptocurrency';
import Header from './Header';
import Article from './Article';
import Article2 from './Article2';
import Article3 from './Article3';
import Article4 from './Article4';
import Article5 from './Article5';
import Article6 from './Article6';
import Footer from './Footer';
import Footer2 from './Footer2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='Cryptocurrency' element={<Cryptocurrency />} />
        </Routes>
        <Header />
        <Article />
        <div className=' double-article'>
          
          <Article2 />
          <Article3 />
        </div>
        
        <Article4 />
        <Article5 />
        <Article6 />
        <Footer />
        <Footer2 />
      </BrowserRouter>




    </div>
  );
}

export default App;
