import { useState } from "react";
import { NavBar } from "../utils/shared/NavNar"
import logo from '../images/logo.svg';
import data from "../data/products.json";
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
    document.title='Vigilia Store'
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
                        <img src={logo} onLoad={loading} style={{transform:'rotate(30deg)'}}/>
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