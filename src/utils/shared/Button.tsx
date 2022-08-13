import './css/Button.css';
export const Button=({text,back='primary',click,hover='secondary',children}:{children?:JSX.Element,text:string,back?:string,hover?:string,click:Function})=>{
    return (
        <button className='btn-custom' style={{background:`var(--${back})`}} onClick={(e)=>click(e)}>
            <div className='circle flex-v' style={{background:`var(--${hover})`}}>
            </div>
                <div className='flex-h'>{children}<p>{' '+text}</p></div>
        </button>
    )
}