import './App.css'
import 'primereact/resources/themes/md-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { ReactRouter } from './router/ReactRouter';
import { Navbar } from './components/Navbar';

function App() {

  return (
    <>
      <ReactRouter />
      <Navbar />
    </>
  )
}

export default App
