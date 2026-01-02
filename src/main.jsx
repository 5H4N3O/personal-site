import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

const savedPath = sessionStorage.getItem('spa-path');
if (savedPath) {
  sessionStorage.removeItem('spa-path');
  window.history.replaceState(null, '', savedPath);
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
