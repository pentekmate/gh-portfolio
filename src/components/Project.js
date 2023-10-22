import { useState } from 'react'
import '../css/Project.css'
function Project({id,nev,leiras,kep,technologia,link}) {
const [showButton ,setShowButton]=useState(false)
const [hoverButton,setHoverButton]=useState(false)
const handleMouseEnter=()=>{
    setShowButton(true)
}
const handleMouseLeave=()=>{
    setShowButton(false)
}
const handleMouseEnterOnButton=()=>{
    setHoverButton(true)
}
const handleMouseLeaveOnButton=()=>{
    setHoverButton(false)
}
return(
    <div  data-aos="fade-up"   className="row project mt-5">
        <div className="col-lg-12 col-sm-12">
            <h3>{nev}</h3>
        </div>
        <div className="col-lg-4 col-sm-12 ">
            <p className='short'>Rövid leírás</p>
            <p className='pt-1 description'>{leiras}</p>
            <div className='mt-5'>
            <h5>Használt technológiák</h5>            
            <ul>
                {technologia.map((item,i)=>
                <li key={i}><span>{item}</span></li>
                )}
            </ul>
            </div>
        </div>
        <div className='col-lg-8 col-sm-12  d-flex justify-content-start'>
            <div className="image-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
           
             <img className={`projectimg${id} projectimg image${showButton?'blurred':''}`} src={require(`../imgs/${kep}`)} alt={nev}></img>
             {showButton && <button onMouseEnter={handleMouseEnterOnButton} onMouseLeave={handleMouseLeaveOnButton} className={`button ${hoverButton?"hover":""}`}><a href={link} target="blank">Forrás kód</a></button>}
             
            </div>
                
            </div> 
          
        </div>
 
)
}
export default Project
