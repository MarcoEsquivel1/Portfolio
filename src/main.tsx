import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import App from './App.tsx'
import './scss/styles.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
)
