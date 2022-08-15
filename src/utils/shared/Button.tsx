import { ButtonCustom } from '../../styles/style/ButtomCustom.style';
import './css/Button.css';
import { initValuesStyles as st } from '../../styles/style/root.style';

export const Button=({text,back='primary',click,hover='secondary',children}:{children?:JSX.Element,text:string,back?:keyof typeof st,hover?:keyof typeof st,click:Function})=>{
    return (
        <ButtonCustom style={{background:`${st[back]}`}} onClick={(e)=>click(e)}>
            <div className='circle flex-v' style={{background:`${st[hover]}`}}>
            </div>
                <div className='flex-h'>{children}<p>{' '+text}</p></div>
        </ButtonCustom>
    )
}