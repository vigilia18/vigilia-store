import {Suspense, lazy} from 'react';
import { createRoot } from 'react-dom/client';
import { Loading } from '../shared/Loading';

export  const controlModal=(title:string,children:JSX.Element)=>{
    const Modal=lazy(() => import('./Modal'));
    const modalDiv=document.createElement('div');
    
    modalDiv.id='modal';
    document.body.appendChild(modalDiv);

    const root=createRoot(modalDiv)
    root.render(
    <Suspense fallback={<Loading load={true} mode='full'/>}>
    <Modal root={root} title={title}>
        {children}
    </Modal>
    </Suspense>
    );

}