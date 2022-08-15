import styled from "styled-components";
import { initValuesStyles as st } from "../../styles/style/root.style";

export const PromocionStyle=styled.div`
position:absolute;
right:0;
bottom:0;
width:50%;
padding:10px;
background:${st.primary};
/* border-top:10px solid ${st.primary2};
border-left:10px solid ${st.primary2}; */
border:10px solid ${st.primary2};
cursor:pointer;
p{
    color:${st.white};
    font-size:20px;
    font-family:${st.title};
}
strong{
    color:${st.primary};
    font-size:24px;
    font-family:${st.title};
    -webkit-text-stroke:1px ${st.white};
    -moz-text-stroke:1px ${st.white};
    -ms-text-stroke:1px ${st.white};
    -o-text-stroke:1px ${st.white};
}

`
export const SlideImgStyle=styled.div`
    border:0.3pxx solid ${st.border};
    box-shadow:3px 3px 6px ${st.sombra};
    width:90%;
    border-radius:4px;
    overflow-x:hidden;
    scroll-behavior: smooth;

    &::-webkit-scrollbar{
    display:none;
    background:${st.secondary};
    padding:5px;
    border-bottom-left-radius:8px;
    border-bottom-right-radius:8px;
    opacity:0.7;
    }
    &::-webkit-scrollbar-thumb{
    background-color:${st.primary};
    border-radius:100px;
    opacity:0.7;
    }
    .img-content{
    width:100%;
    }
    img{
    padding:10px;
    object-fit:cover;
    }
    .content-slide-imgs{
    margin:auto;
    display:flex;
    }
`
