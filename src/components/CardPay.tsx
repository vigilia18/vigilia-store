import { useState } from 'react';
import { Loading } from '../utils/shared/Loading';
import './css/Card.css';

export interface Pay{name:string,img:string,num:'',color?:''}

export const CardPay=({pay}:{pay:Pay})=>{

    const [load, setload] = useState(true);


    return (
        <div className="card cardpay">
            <div className="card-header" style={{position:'relative'}}>
                <img src={pay.img} onLoad={()=>setload(false)} />
                <Loading load={load}/>
            </div>
            <div className="card-body">
                <h4>{pay.name}</h4>
            </div>
        </div>
    )
}