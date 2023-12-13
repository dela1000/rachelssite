import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'src/components/Home';
import Portfolio from 'src/components/Portfolio/Portfolio';
import Header from 'src/components/Header';

export default function App() {
  const year = new Date().getFullYear();
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <div className="flex justify-end pb-2">{year} - Rachel Whitener. All rights reserved</div>
    </Router>
  );
}
