import { useState } from "react";
import { NavBar } from "../utils/shared/NavNar"
import data from "../data/products.json";
import img2 from "../images/img2.jpg";
import './css/HomePage.css';
import { Button } from "../utils/shared/Button";
import { arr, Search } from "../utils/shared/Search";
import { CardProduct } from "../components/Card";
import { IProduct } from "../interfaces/product";
import { Loading } from "../utils/shared/Loading";
import { SlidePage } from "../components/HomePage/Slide";
export const HomePage = () => {

    const [product, setProduct] = useState<IProduct[]>(data.filter(e=>e.id<13));
    const [_loading,setLoading] = useState(true);
    const click=()=>{

    }
    const loading=()=>{
        setLoading(false);
    }
    const getParams=(_data:string)=>{
        if(_data===''){
            setProduct(data.filter(e=>e.id<13));
            return;
        }

        setProduct(data.filter(e=>e.name.toLowerCase().match(new RegExp(`${_data.toLowerCase()}.*`))));
    }

    const getTalla=(talla:arr)=>{
        const a:IProduct[]=[]
        if(talla.key==='TODO'){
            setProduct(data.filter(e=>e.id<13));
            return;
        }
        data.forEach(e=>{
            if(e.talla.indexOf(talla.title)!==-1){
                a.push(e);
            }
        })
        console.log(Math.round(product.length/3))
        setProduct(a);
    }

    return (
        <>
            <NavBar />
            <div className='main-fondo'>
                <div className='grid tr2'>
                    <div style={{position:'relative'}}>
                        <Loading load={_loading}/>
                        <img src={'data:image/png;base64,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'} className="img" onLoad={loading}/>
                    </div>
                    <div className="text-content flex-v">
                        <h1>Vigilia Store web</h1>
                        <p>La plataforma en donde puedes tener tu tienda online en poco pasos</p>
                        <Button text='Ver mas' click={click}/>
                    </div>
                </div>
            </div>
            <Search getParams={getParams} getTalla={getTalla}/>
            <div>
                <div style={{position:'relative', minHeight:'50px'}}>
                    <h3 className="subtitle" style={{position:'relative',zIndex:3}}>Nuestros Productos</h3>
                    <div className='linea'></div>
                </div>
                <div className={`grid tr4 shadow card-content`} style={{alignItems:'center',justifyItems:'center',padding:10}}>
                    {
                        product.map((e,i)=>(
                            <CardProduct product={e} key={i+Date.now()}/>
                        ))
                    }
                </div>
            </div>
            <SlidePage/>
        </>
    )
}