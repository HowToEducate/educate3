import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import Rules from './pages/Rules'
import About from './pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
<Navbar />
<Routes>
  <Route path="/" exact Component={Home}/>
  <Route path="/rules" exact Component={Rules}/>
  <Route path="/about" exact Component={About}/>
</Routes>
<Footer />
</Router>
    </div>
  );
}

export default App;
