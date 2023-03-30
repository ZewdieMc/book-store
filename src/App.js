import './App.css';
import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
