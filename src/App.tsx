import 'primereact/resources/themes/md-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//import { ReactRouter } from './router/ReactRouter';
import { Navbar } from './components/Navbar';
import { About, Backend, Frontend, Home } from './pages';

function App() {

 
  return (
    <>
      {/* <ReactRouter /> */}
      <Home />
      <About />
      <Frontend />
      <Backend />
      <Navbar />
    </>
  )
}

export default App
