import 'bootstrap/dist/css/bootstrap.min.css';
import headerimg from '../imgs/headerimg.png'
import '../css/header.css'
import ReactTypingEffect from 'react-typing-effect';
function Header()
{

    return(
        <div className='container-fluid headercontainer'>
            <div className='container'>
            <header className='row pt-5'>
                <div className='col-lg-6 col-sm-12 pt-5 mt-5'>
                    <div>
                    <h1 className='containerh1'>Szia, <span>Péntek Máté </span> vagyok,</h1>
                    <h2 className='pt-5'>
                    <ReactTypingEffect
                    text={["Webfejlesztő.", "Frontend Fejlesztő."]}
                    speed={100}
                    eraseSpeed={100}
                    eraseDelay={100}
                    typingDelay={500}
                    cursorRenderer={cursor => <p>{cursor}</p>}
                    />
                    </h2>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12 bg-white d-flex justify-content-center imgcontainer'>
                    <img className='headerimg p-3' src={headerimg} alt="headerimg"></img>
                </div>
            </header>
            </div>
        </div>
    )
}

export default Header