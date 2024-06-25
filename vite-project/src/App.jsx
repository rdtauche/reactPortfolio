import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
     

  );
}

export default App;
