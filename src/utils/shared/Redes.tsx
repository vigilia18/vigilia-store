import { useState } from "react"
import { AiFillLeftCircle, AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai"

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
                    <AiFillLeftCircle fill="var(--primary)"/>
            </div>
            <div className='flex-v'>
                <a href="www.facebook.com" target={"_blank"}>
                    <AiOutlineWhatsApp fill="var(--success)"/>
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com" target={"_blank"}>
                    <AiFillFacebook fill="var(--secondary)" />
                </a>
            </div>
            <div>
                <a href="www.facebook.com" target={"_blank"}>
                    <AiFillInstagram fill="var(--rose)" />
                </a>
            </div>
        </div>
    )
}