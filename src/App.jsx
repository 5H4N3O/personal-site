import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import TipCalculatorPage from './pages/projects/TipCalculatorPage';
import { Routes, Route } from 'react-router-dom';
import './styles.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/tip-calculator" element={<TipCalculatorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
