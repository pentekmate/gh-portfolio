import { Link } from "react-scroll"
import '../css/mobilenav.css'
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";

function MobileNav({scrolling}) {
   const[clicked,setClicked]=useState(false)

    return(
     
    <nav className={`navbar navbar-expand-lg ${scrolling? 'navbar-show':''}`}>
            <div className="container-fluid d-flex justify-content-end">

                <BiMenuAltLeft onClick={()=>setClicked(!clicked)} id="dropdown-basic" color="#fdfdfd" size={30}></BiMenuAltLeft>
                {clicked && 
                <div onClick={()=>setClicked(!clicked)} className="mobilemenu d-flex flex-column position-relative">
                    <div class="position-absolute top-0 end-0 x"><AiOutlineCloseCircle></AiOutlineCloseCircle></div>
                <Link onClick={()=>setClicked(!clicked)} to="munkaim"
                spy={true}
                activeClass="activesm">
                <span className='navitemsm'>Munkáim</span>
                </Link>
                <Link onClick={()=>setClicked(!clicked)} to="skills"
                spy={true}
                activeClass="activesm"> 
                <span className='navitemsm'>Erősségeim</span>
                </Link>
                <Link onClick={()=>setClicked(!clicked)} to="smg" 
                spy={true}
                offset={-50}
                activeClass="activesm" >
                <span className='navitemsm'>Kontakt</span></Link>

                </div>
                
                }
              
            </div>
          
    </nav>
        
    )
}
export default MobileNav
