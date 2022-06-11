import Login from './components/Login';
import Home from './components/Home';
import Registration from './components/Registration';
import { Routes, Route } from 'react-router-dom';
import Success from './components/Success';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
