
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';

function App() {
  

  return (

      <BrowserRouter>
          <div className='body'>
              <Navbar/>
              <AppRouter/>
              <Footer/>

          </div>
      </BrowserRouter>
        
  )
}

export default App
