import {useState,useEffect} from "react";
import {ButtonModeStyle,initValuesStyles as st} from '../../styles/style/root.style';
import {BsSun, BsMoon} from "react-icons/bs";

export const ButtonMode=()=>{

  const [color,setColor]=useState<keyof typeof st>('text');

  const changeMode=()=>{
    if(color==='text'){
      // st.white='black';
      // st.black='white';
      setColor('white');
      return;
    }
    // st.black='black';
    // st.white='white'
      setColor('text');
      return;
  }
  useEffect(()=>{
    console.log(color)
  },[color])

  return (
    <ButtonModeStyle style={{borderColor:st[color]}} onClick={changeMode}>
    {
      color==='text'?
      <BsMoon fill={st.text}/>
      :
      <BsSun fill={st.white}/>
    }
    </ButtonModeStyle>
  )
}
