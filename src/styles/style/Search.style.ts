import styled from "styled-components";
import { initValuesStyles as st} from "./root.style";

export const SearchContent=styled.div`
width:80%;
padding:10px;
min-height:120px;
margin:40px auto;
border-radius:4px;
`;
export const BlockContent=styled.div`
height:100px;
width:100%;
max-width:200px;
border:0.3px solid ${st.border};
border-radius:4px;
padding:10px;
`
export const SelectGroup=styled.div`
display:grid;
grid-template-rows:1fr 1fr 1fr;
grid-template-columns:1fr !important;
height:40px;
overflow:hidden;
`;
export const Select=styled.div`
width:100%;
height:40px;  
border:0.3px solid ${st.border};
background-color:${st.white};
padding:10px;
cursor:pointer;
position:relative;
z-index:4;
`;
export const IconBtn=styled.div`
    margin-left:10px;
    width:35px;
    height:35px;
    cursor:pointer;
    justify-content:center;
    align-items:center;
    background:${st.secondary};
    border-radius:100px;
`;
export const SelectUsed=styled.div`
    width:100%;
    height:40px;  
    border:0.3px solid ${st.border};
    background-color:${st.white};
    padding:10px;
    cursor:pointer;
    position:relative;
    z-index:4;
    color:${st.secondary};
`;
export const SearchBlock=styled.div`
border:0.3px solid ${st.border};
padding:10px;
    input{
        display:block;
        grid-column-start:1;
        grid-column-end:9;
    }
`