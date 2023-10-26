import question from '../imgs/Questions-rafiki.png'
import '../css/sendmessage.css'
import {BiCopy} from "react-icons/bi" 
import { useState } from 'react'
const linkedInProfileURL = 'https://www.linkedin.com/in/p%C3%A9ntek-m%C3%A1t%C3%A9-254894268';
function SendMessage() {
    const [hoverButtonId,setHoverButtonId]=useState(null)
    const [showEmail,setShowEmail]=useState(false)
    const [copied,setCopied]=useState(false)


    const handleCopyButton=(text)=>{
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
          }, 3000);
    }
        
    const handleMouseEnterOnButton=(id)=>{
        setHoverButtonId(id)
    }
    const handleMouseLeaveOnButton=()=>{
        setHoverButtonId(null)
    }
    const openLinkedInProfile = () => {
        window.open(linkedInProfileURL, '_blank');
    };

    return(
        <div className="container-fluid vh-100 smg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 smgimgcontainer">
                            <img className='smgimg' src={question} alt="kerdes"></img>
                        </div>
                        <div id="smg"  className="col-lg-6 col-md-12 col-sm-12 ">
                            <h2 className='smgh2 mt-5 pt-5 d-flex justify-content-center'>Felkeltettem az érdeklődésed?</h2>
                            <p className='d-flex justify-content-center smgq mt-4'>Küldj üzenetet</p>
                            <div className='d-flex justify-content-center mt-3 buttons'>
                                <button onMouseEnter={()=>handleMouseEnterOnButton(1)} onMouseLeave={handleMouseLeaveOnButton} onClick={openLinkedInProfile} className={`smgbutton linkdin ${hoverButtonId===1?'hoveredlinkdin':""}`}>LinkedIn</button>
                                <button onMouseEnter={()=>handleMouseEnterOnButton(2)} onMouseLeave={handleMouseLeaveOnButton} onClick={()=>setShowEmail(!showEmail)} className={`smgbutton gmail ${hoverButtonId===2?'hoveredgmail':""}`}>Gmail</button>
                                <div className={`${showEmail?"show":"notshow"} position-relative`}>
                                    <p className="mt-3 smgp ">Email: <span className='smgspan'>Erno801@gmail.com</span><button className='position-absolute top-0 end-0 emailbutton' onClick={() =>handleCopyButton("erno801@gmail.com")}><BiCopy></BiCopy></button> </p>
                                    {copied &&<span className='d-flex justify-content-center smgalert'>Sikeresen másolva!</span>}
                                </div>
                            </div>
                           
                        </div>
                    </div>

                </div>
        </div>
    )
}
export default SendMessage