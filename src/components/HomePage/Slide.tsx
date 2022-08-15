import { useRef, useState } from 'react';
import { AiFillBackward, AiFillPlusCircle, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import promo_img from '../../images/fondo-promo.png';
import { Subtitle } from '../../styles/style/root.style';
import { Button } from '../../utils/shared/Button';
import { Loading } from '../../utils/shared/Loading';
import '../css/Slide.css';
import { SlideImgStyle, PromocionStyle } from '../styles/Slide.style';

export const SlidePage=()=>{
    const a=['','https://http2.mlstatic.com/D_NQ_NP_666230-CBT49350607295_032022-O.jpg',''];
    const [load,setLoad]=useState(true)

    const ref=useRef<HTMLDivElement|null>(null);

    const move=(dir:string)=>{
        if(ref.current===null) return;
        const width=ref.current.scrollWidth
        switch(dir){
            case'atras':
            ref.current.scrollLeft-=width/a.length;
            break

            case 'adelante':
            ref.current.scrollLeft+=width/a.length;
            return
        }
        console.log(width)
    }

    return(
        <div>
                <div style={{position:'relative', minHeight:'50px'}}>
                    <Subtitle style={{paddingBottom:20,position:'relative',zIndex:3}}>¡Promos!</Subtitle>
                    <div className='linea'></div>
                </div>
                <div className="btn-scrols flex-h" style={{width:"30%",margin:"auto"}}>
                        <Button click={()=>move('atras')} text=''><AiOutlineLeft/></Button>
                        <Button click={()=>move('adelante')} text=''><AiOutlineRight/></Button>
                </div>
                <SlideImgStyle ref={ref} style={{margin:"30px auto",alignItems:'center',justifyItems:'center'}}>
                    <div className="content-slide-imgs" style={{width:`${100*a.length}%`}}>
                    {a.map((e,i)=>(
                        <div className="img-content br4" style={{height:'500px'}} key={i+Date.now()}>
                            <PromocionStyle className="flex-h">
                                <p>Promocion</p><strong>$50000</strong>
                                <Button text="Añadir" click={()=>{}} back='success' hover={'secondary'}>
                                    {<AiFillPlusCircle/>}
                                </Button>
                            </PromocionStyle>
                            <Loading load={load} />
                            <img style={{width:'100%'}} onLoad={()=>setLoad(false)} src={e===''?promo_img:e}/>
                        </div>
                    ))} 
                    </div>
                </SlideImgStyle>
        </div>
    )
}
