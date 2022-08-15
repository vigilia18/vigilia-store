import { useState } from 'react';
import { AiFillDownCircle, AiOutlineSearch } from "react-icons/ai";
import { BlockContent, IconBtn, SearchBlock, SearchContent, SelectGroup, SelectUsed } from '../../styles/style/Search.style';
import { initValuesStyles as st } from '../../styles/style/root.style';
import './css/Search.css';
export type arrOptions = { key: string, title: string }[]
export type arr={ key: string, title: string };

const category = [{ key: 'Categoria-1', title: 'Hombre' }, { key: 'Categoria-2', title: 'Mujer' }, { key: 'Categoria-3', title: 'Pantalones' }];
const marca=[{key:'marca-1',title:'Carmel'},{key:'marca-2',title:'Vigilia'}];
const tallas=[{key:'TODO',title:'Todo'},{key:'talla1',title:'xl'},{key:'talla5',title:'xxl'},{key:'talla2',title:'l'},{key:'talla3',title:'m'},{key:'talla6',title:'sm'},{key:'talla4',title:'s'}]


export const Search = ({getParams,getTalla}:{getParams:Function,getTalla:Function}) => {

    const getData=(e:arr)=>{
        console.log(e)
    }
    const getText=(data:string)=>{
        getParams(data);
    }

    const _getTalla=(data:arr)=>{
        getTalla(data);
    }

    return (
        <SearchContent className='shadow'>
            <div className="grid tr4" >
                <BlockFilter title='Categorias' value={getData} arr={category} />
                <BlockFilter title='Marca' value={getData} arr={marca} />
                <BlockFilter title='Talla' value={_getTalla} arr={tallas} />
                <BlockSearch getData={getText}/>
            </div>
        </SearchContent>
    );
}

export const BlockFilter = ({ title, arr, value }: { children?: JSX.Element, title: string, arr: arrOptions, value:Function }) => {

    const [height, setHeight] = useState(40);
    const [rotate, setRotate] = useState(0);
    const [selectdOpt, setSelectdOpt] = useState({ title: "", key: "" });

    const showOption = () => {
        if (height === 40) {
            setHeight(40 * (arr.length + 1));
            setRotate(180);
            return;
        }
        setHeight(40);
        setRotate(0);
    }

    const selected = (e: { key: string, title: string }) => {
        setHeight(40);
        setSelectdOpt(e);
        setRotate(0);
        value(e);
    }

    return (
        <BlockContent>
            <h3>{title}</h3>
            <div className={rotate!=0?'shadow flex-h':'flex-h'} style={{background:st.white,padding:'5px', borderRadius:3,zIndex: 200,position: 'relative'}}>
                <SelectGroup id="select-group" style={{ height: `${height}px`, width:'80%' }}>
                    <SelectUsed>{selectdOpt.title}</SelectUsed>
                    {
                        arr.map((e) => (
                            <div
                                className="select"
                                key={e.key}
                                onClick={() => { selected(e) }}
                            >{e.title}</div>
                        ))
                    }
                </SelectGroup>
                <IconBtn className="flex-v" onClick={() => showOption()}><AiFillDownCircle transform={`rotate(${rotate})`} size="100" fill="white" /></IconBtn>
            </div>
        </BlockContent>
    )
}

export const BlockSearch=({getData}:{getData:Function})=>{

    const [buscar, setBuscar] = useState('');

    const enter=(e:any)=>{
        if(e.key==='Enter'||e.keyCode===13){
            getData(e.target.value);
        }
    }

    return (
        <SearchBlock>
            <h3>Buscar</h3>
            <div className="grid tr10" style={{gridGap:0,maxHeight:'90px'}}>
                <input type="text" value={buscar} onKeyDown={enter} onChange={(e)=>setBuscar(e.target.value)}/>
                <div className="icon-btn flex-v" style={{gridColumnStart:9,gridColumnEnd:11,width:'100%',height:'40px',margin:0,borderRadius:0,padding:'5px'}} onClick={(e) => getData(buscar)}><AiOutlineSearch size="100" fill="white" /></div>
            </div>

        </SearchBlock>
    )
}