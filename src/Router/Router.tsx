import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'src/components/Home';
import Portfolio from 'src/components/Portfolio/Portfolio';
import Header from 'src/components/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}
