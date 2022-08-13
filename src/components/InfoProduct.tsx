import { IProduct } from "../interfaces/product"
import { Button } from "../utils/shared/Button"

export const InfoProduct=({product}:{product:IProduct})=>{

    const click=()=>{

    }

    return(
        <div className="content-info">
        <div className='img-content'>
            <img src={product.img} alt="" />
        </div>
            <div className='card-body'>
                <h3>{product.name}</h3>
                <p>{product.descripcion}</p>
            </div>
            <div className="flex-h" style={{padding:'20px 140px'}}>
                <Button text="Añadir" back="success" click={click} ></Button>
                <Button text="Comprar" back="success" click={click} ></Button>
            </div>
        </div>
    )
}