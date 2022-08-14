import {Suspense, lazy} from 'react';
import { createRoot } from 'react-dom/client';
import { Loading } from '../shared/Loading';
import ModalImg from './ModalImg';

export  const controlModal=(title:string,children:JSX.Element,img:boolean=false)=>{
    const Modal=lazy(() => import('./Modal'));
    const modalDiv=document.createElement('div');
    
    modalDiv.id='modal'+title;
    document.body.appendChild(modalDiv);

    const root=createRoot(modalDiv)
    root.render(
    <Suspense fallback={<Loading load={true} mode='full'/>}>
        {
            img?
            <ModalImg root={root}>
                {children}
            </ModalImg>
    :
            <Modal root={root} title={title}>
                {children}
            </Modal>
    }
    </Suspense>
    );

}