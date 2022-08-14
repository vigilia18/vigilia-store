import { useRef } from "react"
import { Root } from "react-dom/client"
import { IoMdCloseCircle } from "react-icons/io"
import './Modal.css';
export default function ModalImg({children,root}:{root:Root,children?:JSX.Element}):JSX.Element{

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
            <div className='front' style={{background:'var(--text)',width:'100vw','height':'100vh',position:'fixed',top:'0px',left:'0px'}}>
                <div className="header-close flex-h" style={{background:'transparent',border:'none',justifyContent:'end'}}>
                    <div className="btn-icon" onClick={close}>
                        <IoMdCloseCircle fill='white' fontSize='30px'/>
                    </div>
                </div>
                <div className='img-content-modal'>
                    {children}
                </div>
            </div>
        </div>
    )
}