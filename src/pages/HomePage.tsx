import { useState } from "react";
import { NavBar } from "../utils/shared/NavNar"
import data from "../data/products.json";
import img2 from "../images/img2.jpg";
import './css/HomePage.css';
import { Button } from "../utils/shared/Button";
import { Search } from "../utils/shared/Search";
import { CardProduct } from "../components/Card";
import { IProduct } from "../interfaces/product";
export const HomePage = () => {

    const [product, setProduct] = useState<IProduct[]>(data.filter(e=>e.id<13));

    const click=()=>{

    }
    const getParams=(_data:string)=>{
        if(_data===''){
            setProduct(data.filter(e=>e.id<13));
            return;
        }
        setProduct(data.filter(e=>e.name===_data));
    }

    return (
        <>
            <NavBar />
            <div className='main-fondo'>
                <div className='grid tr2'>
                    <img src={img2} className="img" />
                    <div className="text-content flex-v">
                        <h1>Vigilia Store web</h1>
                        <p>La plataforma en donde puedes tener tu tienda online en poco pasos</p>
                        <Button text='Ver mas' click={click}/>
                    </div>
                </div>
            </div>
            <Search getParams={getParams}/>
            <div>
                <div style={{position:'relative', minHeight:'50px'}}>
                    <h3 className="subtitle" style={{position:'relative',zIndex:3}}>Nuestros Productos</h3>
                    <div className='linea'></div>
                </div>
                <div className="grid tr4 td3 shadow card-content" style={{alignItems:'center',justifyItems:'center',padding:10}}>
                    {
                        product.map((e,i)=>(
                            <CardProduct product={e} key={i+Date.now()}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}