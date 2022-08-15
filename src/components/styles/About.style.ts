import styled from "styled-components";
import { initValuesStyles as st } from "../../styles/style/root.style";

export const  AboutStyle=styled.div`
  border-top:3px solid ${st.border};
  border-bottom:3px solid ${st.border};
  min-height: 200;
  margin-bottom:30px;
  padding:20px 40px;
  justify-items:center;
  div{
    cursor:pointer;
    &:hover h3{
      color:${st.white};
    }
    &:hover{
      transform:scale(1.1);
      background:${st.primary}
    }
  }
  h3{
  margin-bottom:20px;
  font-size:1.5em;
  font-family:${st.title};
  }
  `
  export const H3=styled.h3`
  `
