import { useState } from "react"
import { AiFillLeftCircle, AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai"
import { initValuesStyles as st } from "../../styles/style/root.style";
export const Redes=()=>{

    const [hidden, sethidden] = useState(70);
    const [rotate, setRotate] = useState(0);


    const showContac=()=>{
        if(hidden===70){
            sethidden(0);
            setRotate(180);
            return;
        }
        sethidden(70)
        setRotate(0);
    }

    return (
        <div className='redes grid tr4 center-grid' style={{transform:`translateX(${hidden}%)`}}>
            <div onClick={showContac} className='flex-v' style={{transform:`rotate(${rotate}deg)`}}>
                    <AiFillLeftCircle fill={st.primary}/>
            </div>
            <div className='flex-v'>
                <a href="www.facebook.com" target={"_blank"}>
                    <AiOutlineWhatsApp fill={st.success}/>
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com" target={"_blank"}>
                    <AiFillFacebook fill={'rgba(50,130,255)'} />
                </a>
            </div>
            <div>
                <a href="www.facebook.com" target={"_blank"}>
                    <AiFillInstagram fill={st.rose} />
                </a>
            </div>
        </div>
    )
}
