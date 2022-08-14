import { CardPay } from "../CardPay"

export const SlidePage=()=>{
    return(
        <div className='slide-page'>
                <div style={{position:'relative', minHeight:'50px'}}>
                    <h3 className="subtitle" style={{position:'relative',zIndex:3}}>Aceptamos !!!</h3>
                    <div className='linea'></div>
                </div>
                <div className="grid tr4" style={{margin:"30px auto",alignItems:'center',justifyItems:'center', width:'90%'}}>
                    <CardPay pay={{
                                    img:'https://1000marcas.net/wp-content/uploads/2019/12/logo-Mastercard.png',
                                    name:'MaterCard',
                                    num:''
                                }} />
                    
                    <CardPay pay={{
                                    img:'https://logodownload.org/wp-content/uploads/2016/10/visa-logo-5.png',
                                    name:'Visa',
                                    num:''
                                }} />
                    <CardPay pay={{
                                    img:'https://cdn-icons-png.flaticon.com/512/196/196539.png',
                                    name:'America Express',
                                    num:''
                                }} />
                    <CardPay pay={{
                                    img:"https://cdn-icons-png.flaticon.com/512/2331/2331941.png",
                                    name:'Efectivo',
                                    num:''
                                }} />
                </div>
        </div>
    )
}