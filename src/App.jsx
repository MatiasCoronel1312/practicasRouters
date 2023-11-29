
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import Formulario from './components/Formulario_Modal/formulario';
import Modals from './components/Formulario_Modal/Modals';

function App() {
  

  return (

      <BrowserRouter>
          <div className='body'>
              <Navbar/>
              <Modals/>
              <AppRouter/>
              <Footer/>
          </div>
      </BrowserRouter>
        
  )
}

export default App
