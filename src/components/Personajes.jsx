import { useEffect } from "react"
import { useState } from "react"
import { getApis } from "../helpers/getApi"



export const Personajes = () =>{
    const [personajes, setPersonajes] = useState([])
    useEffect(()=>{
        getApis().then((personajes)=>setPersonajes(personajes.results))
    },[])
    console.log(personajes)
    return(
        <div className="row">
            {
                personajes.map((per)=>(
                <div className="col-4 p-3">
                    <div className="card">
                        <img src={per.image} className="card-img-top" width={50}/>
                        <div className="card-body">
                            <h5 className="card-title">{per.name}</h5>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    )
}