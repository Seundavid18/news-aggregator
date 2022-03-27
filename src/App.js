import './App.css';
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import Newsbody from './Pages/Newsbody';
import Tech from './Pages/Tech';
import Politics from './Pages/Politics'
import Entertainment from './Pages/Entertainment'
import Fashion from './Pages/Fashion'
import  Sports from './Pages/Sports'


function App() {
  return (
    <Routes>
      <Route>
        <Route path='/' element={<Home />} />
        <Route path=':newsbodyid' element={<Newsbody />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/sport" element={<Sports />} />
      </Route>
    </Routes>
  );
}

export default App;
