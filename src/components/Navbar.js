import { Link } from 'react-scroll'
import '../css/navbar.css'
function Navbar({scrolling}) {
    return (
        <nav className={`navbar navbar-expand-lg ${scrolling? 'navbar-show':''}`}>
        <div className="container-fluid">
            <div className={`navbar-items ${scrolling?'navbar-items-show':""}`}>
                <Link to="munkaim"
                spy={true}
                activeClass="active">
                <span className='navitem'>Munkáim</span>
                </Link>
                <Link to="skills"
                spy={true}
                activeClass="active"> 
                <span className='navitem'>Erősségeim</span>
                </Link>
                <Link to="smg" 
                spy={true}
                offset={-50}
                activeClass="active" >
                <span className='navitem'>Kontakt</span></Link>
            </div>
        </div>
    </nav>
    )
}
export default Navbar
