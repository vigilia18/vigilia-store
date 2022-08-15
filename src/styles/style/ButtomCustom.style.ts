import styled from "styled-components";
import { initValuesStyles } from "./root.style";

export const ButtonCustom=styled.button`
    min-width:120px;
    min-height:50px;
    cursor:pointer;
    display:block;
    border:none;
    background: ${initValuesStyles.primary};
    position:relative;
    overflow:hidden;
    box-shadow:3px 3px 6px ${initValuesStyles.sombra};
    &:hover .circle{
        transform: scale(1);
    }
    .circle{
    transform: scale(0);
    border-radius:100px;
    min-width:200px;
    min-height:200px;
    position: absolute;
    top:0;
    left:-50px;
    bottom:0;
    right:0;
    margin:auto;
    justify-content:center;
    }
    &:active{
    transform:scale(0.9);
    box-shadow:1px 1px 4px ${initValuesStyles.sombra};
    }
    div{
    position: absolute;
    justify-content:center;
    width:100%;
    top:0;
    left:0;
    bottom:0;
    right: 0;
    margin:auto;
        p{
        text-align:center;
        font-size:18px;
        font-weight:bolder;
        color:${initValuesStyles.white};
        }
    }
    svg{
    font-size:18px;
    fill:${initValuesStyles.white};
    margin-right:3px;
    }
`