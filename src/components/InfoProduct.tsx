import { GrView } from "react-icons/gr";
import { IProduct } from "../interfaces/product"
import { controlModal } from "../utils/modal/ControlModal";
import { Button } from "../utils/shared/Button"
import "./css/InfoCard.css"

export const InfoProduct=({product}:{product:IProduct})=>{

    const click=()=>{

    }
    const showImg=()=>{
        controlModal('',<img src={product.img} />,true);
    }

    return(
        <div className="content-info">
        <div className='img-content'>
            <div className='show-content flex-h'>
                <GrView onClick={()=>showImg()}/>
            </div>
            <img src={product.img} alt="" />
        </div>
            <div className='card-body' style={{padding:'0px 80px',paddingTop:'40px'}}>
                <h3>{product.name}</h3>
                <p>{product.descripcion}</p>
                <strong className="price">${product.price}</strong>
            </div>
            <div className="flex-h" style={{padding:'20px 140px'}}>
                <Button text="Añadir" back="success" click={click} ></Button>
                <Button text="Comprar" back="success" click={click} ></Button>
            </div>
        </div>
    )
}