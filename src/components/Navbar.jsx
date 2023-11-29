import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom';
import { useModal} from './Formulario_Modal/useModal';
import Modals from './Formulario_Modal/Modals';


const Navbar = () => {
  
  
  return (
    
        <ul className='nav'>
            <li className='itemNav'><Link to='/'>Home</Link></li>
            <li className='itemNav'><Link to='/category'>categoria</Link></li>
            
            <li className='itemNav'><Link to={'/usuarios'}>usuarios</Link></li>
            <li className='itemNav'><Link to='/cart'>CartWidget</Link></li>
        </ul>
    
  )
}

export default Navbar