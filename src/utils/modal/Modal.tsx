import { useRef } from "react"
import { Root } from "react-dom/client"
import { FaWindowClose } from "react-icons/fa"
import './Modal.css';

export default function Modal({children,title,root}:{title:string,root:Root,children?:JSX.Element}):JSX.Element{

    const ref=useRef<any>(null);

    const close=()=>{
        if(ref.current===null){
            console.log("errore ne le useRef");
            return;
        }
        ref.current.classList.add('close');
        ref.current.addEventListener('animationend',()=>{
            root.unmount();
        },{once:true});
    }

    return (
        <div className='back shadow' ref={ref}>
            <div className='front'>
                <div className="header-close flex-h">
                    <h4>{title}</h4>
                    <div className="btn-icon" onClick={close}>
                        <FaWindowClose fill='white' fontSize='30px'/>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}