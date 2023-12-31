import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Portfolio from 'src/components/Portfolio/Portfolio';
import Resume from 'src/components/Resume/Resume';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}
