import styled from 'styled-components';

export type valuesCSS={
  primary:string;
  primary2:string;
  secondary:string;
  secondary2:string;
  terceary:string;
  rose:string;
  success:string;
  text:string;
  textWhite:string;
  fondo:string;
  fondoLoading:string;
  white:string;
  whiteTransparent:string;
  sombra:string;
  border:string;
  title:string;
  paragraph:string;
}

const initValuesStyles:valuesCSS={
  primary:'rgba(255, 138, 21, 0.998)',
  primary2:'rgba(255, 108, 21, 0.998)',
  secondary:'rgba(21,138,225,0.998)',
  secondary2:'rgba(21,108,225,0.998)',
  terceary:'rgba(255, 21, 56, 0.998)',
  rose:'rgba(255, 21, 156, 0.998)',
  success:'rgba(21,255,138,0.998)',
  text:'rgba(10,10,40,0.8)',
  textWhite:'rgba(255,255,255,0.8)',
  fondo:'rgb(240,240,240)',
  fondoLoading:'rgba(255,255,255,0.8)',
  white:'white',
  whiteTransparent:'rgba(255,255,255,0.5)',
  sombra:'rgba(0,0,0,0.3)',
  border:'rgba(0,0,0,0.1)',
  title:'DynaPuff',
  paragraph:'Poppins',
};
initValuesStyles.primary='rgba(50,138,255,0.9)';
initValuesStyles.primary2='rgba(50,108,255,0.9)';
initValuesStyles.secondary='rgba(255,50,100,0.9)';
initValuesStyles.secondary2='rgba(255,60,90,0.9)';


let st=initValuesStyles;
export const Subtitle=styled.h1`
  text-align:center;
  margin:60px 0px 40px 0px;
  color:${st.secondary};
  font-family:${st.text};
  font-size:40px;
`;
export const MainFondo=styled.div`
  width:95%;
  margin:auto;
`;
export const TextContent=styled.div`
padding:30px;
justify-content:space-around;
align-items: baseline;
  h1{
    font-size:50px;
    color:${st.primary};
    margin-bottom:20px;
  }
  p{
    font-weight:bold;
    font-size:20px;
  }
`;
export const Shadow=styled.div`
box-shadow: 3px 3px 6px ${st.sombra};
`;
export const CardContent=styled.div`
width:90%;
min-height:200px;
margin:20px auto;
border:0.2px solid ${st.sombra};
`;
export const NavBarStyle=styled.header`
position:sticky !important;
top:0;
z-index: 210;
padding:20px;
min-height:100px;
margin-bottom: 20px;
box-shadow:3px 3px 6px ${st.sombra};
  ul{
    list-style:none;
    li{
      padding:5px 10px;
      border-radius:40px;
      margin:0px 10px;
      cursor:pointer;

      &:hover{
        background-color:var(--primary);
        padding:5px 10px;
      }
      &:hover a{
        color:var(--white);
      }
    }
  }
  a{
    transition:500ms;
    text-decoration:none;
    font-weight:bold;
  }
  h3{
    font-size:23px;
    font-family:var(--title);
  }
`
export const ButtonModeStyle=styled.div`
  min-width:30px;
  min-height:30px;
  border-radius:100px;
  border:4px solid ${st.text};
  justify-content:center;
  align-items:center;
  display:flex;
  cursor:pointer;
  svg{
    font-size:1em;
  }
`
export {initValuesStyles};
