import {AiFillCopyrightCircle} from "react-icons/ai";
import {initValuesStyles as st} from "../../styles/style/root.style";
import {Subtitle, ButtonModeStyle} from '../../styles/style/root.style';
import {FormEmail} from "./Formemail";
export const Footer=()=>{

  return (
    <footer style={{background:st.text, minHeight:200}} className='grid tr2 center-grid'>
    {/*? Sona Propia*/}
    {/*? Informacion del cliente*/}
    <div>
      <Subtitle style={{fontSize:16}}>Vigilia Store</Subtitle>
      <p>Nam sagittis turpis id ante tincidunt semper. Quisque ut pellentesque risus. Donec nibh elit, maximus mollis bibendum vel, pellentesque id nunc. Mauris venenatis luctus diam, at sodales ligula molestie sed. Proin metus sapien, porttitor sed fringilla eget, ultricies vitae turpis. Nam non accumsan orci. Pellentesque massa nunc, interdum ut dui eu, interdum congue nulla.</p>
      <p>&Copy;</p>
    </div>
    {/*? Formulario o informacion adiciona*/}
    <div>
    <Subtitle style={{fontSize:19, color:st.primary}}>Comunicate con nosotros</Subtitle>
      <FormEmail/>
    </div>
    <div className="flex-v" style={{margin:'20px auto',gridColumnStart:1,gridColumnEnd:3,minWidth:30,maxHeight:40}}>
    <Subtitle style={{fontSize:15,margin:3,color:st.white}}>Builder by Vigilia 2022</Subtitle>
    <ButtonModeStyle style={{width:"20px",display:'flex',borderColor:st.white}}><AiFillCopyrightCircle fill={st.white}/></ButtonModeStyle>
    <div className='linea'></div>
    </div>
    </footer>
  )
}
