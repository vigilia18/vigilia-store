import {useState} from "react";
import {AiOutlineSend} from "react-icons/ai";
import {Button} from "./Button";
export type IUserEmail={idUsuario:number;name:string;email:string;desc:string};

export const FormEmail=()=>{

  const [user,setUser]=useState<IUserMail>({idUsuario:0,name:'',email:'',desc:''});
  const sendMail=(e:Event)=>{
    e.preventDefault();
    console.log(user)
  }

  return (
    <div>
      <form>
          <input type='hidden' name='idUsuario' value={user.idUsuario}/>
          <div className="flex-v">
              <label>Nombre Completo</label>
              <input name="name" value={user.name} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} />
          </div>
          <div className="flex-v">
              <label>Tú Correo</label>
              <input type='email' name="email" value={user.email} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} />
          </div>
          <div className="flex-v">
              <label>Tú Correo</label>
              <textarea name="desc" value={user.desc} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} />
          </div>
          <div>
            <Button text="Enviar" click={()=>{}}>
                <AiOutlineSend/>
            </Button>
          </div>
      </form>
    </div>
  )
}
