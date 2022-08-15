import { Link } from "react-router-dom";
import icon from "../../images/Plugin icon - 1 1.png";
import { NavBarStyle } from "../../styles/style/root.style";
import {ButtonMode} from "./ButtonMode";
import './css/NavBar.css';

export const NavBar=()=>{


    return (
        <NavBarStyle className='navbar flex-h' style={{position:'relative',backdropFilter:'blur(10px)',background:'var(--white-transparent)'}}>
            <div className='flex-h'>
            <img className='icon' style={{marginRight:10,transform:'rotate(90deg)'}} src={icon} alt={'Vigilia'}/>
            <h3>Vigilia Store</h3>
            </div>

            <nav>
                <ul className='flex-h'>
                    <li><Link to=''>Inicio</Link></li>
                    <li><Link to=''>Productos</Link></li>
                    <li><Link to=''>Categorias</Link></li>
                    <li><Link to=''>Iniciar</Link></li>
                    <ButtonMode/>
                </ul>
            </nav>
            {/* <div className='linea'></div> */}
        </NavBarStyle>
    )
}
