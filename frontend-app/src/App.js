import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Beranda from './components/Beranda';
import Navbar from './components/Navbar';
import ManajemenBuku from './components/ManajemenBuku';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Beranda />} />
          <Route path="/manajemen-buku" element={<ManajemenBuku />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
