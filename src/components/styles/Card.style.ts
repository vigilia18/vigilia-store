import styled from "styled-components";
import { initValuesStyles as st } from "../../styles/style/root.style";

export const CardStyle=styled.div`
width:85%;
min-height:300px;
border:0.2px solid ${st.border};
overflow:hidden;
border-radius:3px;
&:hover{
    transform:scale(1.05);
    box-shadow:7px 7px 7px ${st.sombra};
}
`
export const CardheaderStyle=styled.div`
height:210px;
overflow:hidden;
img{
    width:100%;
    object-fit: cover;
    &:hover{
        filter:blur(3px);
        transform:scale(1.3);
        cursor:pointer;
    }
}
`
export const CardBodyStyle=styled.div`
    padding:10px;
    h4{
        text-align:center;
        font-size:20px;
        color:${st.primary};
    }
    p{
        text-align:left;
    }
`
export const PriceStyle=styled.strong`
width:40%;
margin:auto;
display:block;
text-align:center;
border:0.3px solid v${st.success}`