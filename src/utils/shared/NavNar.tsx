import { Link } from "react-router-dom";
import icon from "../../images/vigilia (2).jpg";
import './css/NavBar.css';
export const NavBar=()=>{
    return (
        <header className='navbar flex-h' style={{position:'relative'}}>
            <div className='flex-h'>
            <img className='icon' style={{marginRight:10}} src={icon} alt={'Vigilia'}/>
            <h3>Vigilia Store</h3>
            </div>

            <nav>
                <ul className='flex-h'>
                    <li><Link to=''>Inicio</Link></li>
                    <li><Link to=''>Productos</Link></li>
                    <li><Link to=''>Categorias</Link></li>
                    <li><Link to=''>Iniciar</Link></li>
                </ul>
            </nav>
            {/* <div className='linea'></div> */}
        </header>
    )
}