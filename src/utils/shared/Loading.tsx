import './css/Loading.css';
export const Loading=({load,mode}:{load:boolean,mode?:string})=>{

    return(
        <div className={"loading flex-v "+mode} style={{display:load?'flex':'none'}}>
            <div className="loading-circle">

            </div>
        </div>
    )
}