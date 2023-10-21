import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Home';
import './styles/App.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" exact element={<Home />}/>
        </Routes>
    </>
  );
}

export default App;
