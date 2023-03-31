import './App.css';
import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
