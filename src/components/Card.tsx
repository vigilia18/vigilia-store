import { useState } from 'react';
import {AiOutlineShop, AiOutlinePlus} from 'react-icons/ai';
import { IProduct } from "../interfaces/product";
import { controlModal } from '../utils/modal/ControlModal';
import { Button } from "../utils/shared/Button";
import { Loading } from '../utils/shared/Loading';
import './css/Card.css';
import { InfoProduct } from './InfoProduct';
import { CardBodyStyle, CardheaderStyle, CardStyle, PriceStyle } from './styles/Card.style';

export const CardProduct=({product,coin='$'}:{coin?:string,product:IProduct})=>{

    const [load, setload] = useState(true);

    const anadir=()=>{
    }
    const comprar=()=>{

    }
    const handleClick=()=>{
        controlModal(product.name,<InfoProduct product={product}/>);
    }

    return (
        <CardStyle>
            <CardheaderStyle style={{position:'relative'}} onClick={()=>handleClick()}>
                <img src={product.img} onLoad={()=>setload(false)} />
                <Loading load={load}/>
            </CardheaderStyle>
            <CardBodyStyle>
                <h4>{product.name}</h4>
                <p>{product.descripcion}</p>
                <PriceStyle className='price'>{coin}{product.price}</PriceStyle>
            </CardBodyStyle>
            <div className='flex-h' style={{padding:'10px'}}>
                <Button text="Añadir" back='secondary' hover='success' click={anadir}>
                    <AiOutlinePlus fontSize='20px'/>
                </Button>
                <Button text="Comprar" back='success' click={comprar} >
                    <AiOutlineShop/>
                </Button>
            </div>
        </CardStyle>
    )
}