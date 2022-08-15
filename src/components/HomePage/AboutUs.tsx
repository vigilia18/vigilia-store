import { initValuesStyles as st } from "../../styles/style/root.style";
import {AboutStyle, H3} from "../styles/About.style";
export const AboutUs = () => {

  return (
    <AboutStyle className="grid tr3">
      <div style={{padding:10,textAlign:'center',width:'80%'}}>
        <h3>¿Quienes Somos?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor purus in augue consectetur, eu congue justo lacinia. Sed commodo ornare risus, vel maximus ex malesuada quis. Curabitur accumsan lobortis purus. </p>
      </div>
      <div style={{padding:10,textAlign:'center',width:'80%'}}>
        <h3>Nuestra Vision</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor purus in augue consectetur, eu congue justo lacinia. Sed commodo ornare risus, vel maximus ex malesuada quis. Curabitur accumsan lobortis purus. </p>
      </div>
      <div style={{padding:10,textAlign:'center',width:'80%'}}>
        <h3>Nuestra Mision</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor purus in augue consectetur, eu congue justo lacinia. Sed commodo ornare risus, vel maximus ex malesuada quis. Curabitur accumsan lobortis purus. </p>
      </div>
    </AboutStyle>
  )
}
