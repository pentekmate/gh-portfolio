import react from '../imgs/react-js-icon.png'
import javascrip from '../imgs/javascript-programming-language-icon.png'
import mysql from '../imgs/mysql-icon.png'
import firebase from '../imgs/google-firebase-icon.png'
import figma from '../imgs/figma-icon.png'
import nodejs from '../imgs/node-js-icon.png'
import '../css/skills.css'
function Skills() {
   
    return(
        <div id="skills" className="container-fluid skills pb-5 pt-5" data-aos="fade-right">
            <div  className='d-flex justify-content-center'>
                <h1 className='skillsh1 mt-5 mb-5'>Erősségeim</h1>
            </div>
            <div className='container'>
                <div className='row'>
                    <div  data-aos="zoom-in" className='col-lg-4 col-sm-12 d-flex flex-column justify-content-center align-items-center skillsimgcontainer'>
                        <img className='skillsimg' src={react} alt="react"></img>
                        <p className='pt-3 skillsdesc'>React</p>
                    </div>
                    <div  data-aos="zoom-in"  className='col-lg-4 col-sm-12 d-flex  flex-column justify-content-center align-items-center skillsimgcontainer'>
                        <img  className='skillsimg' src={javascrip} alt="react"></img>
                        <p  className='pt-3 skillsdesc'>Javascript</p>
                    </div>
                    <div data-aos="zoom-in"  className='col-lg-4 col-sm-12 d-flex flex-column  justify-content-center align-items-center skillsimgcontainer'>
                        <img  className='skillsimg' src={mysql} alt="react"></img>
                        <p  className='pt-3 skillsdesc'>Mysql</p>
                    </div>
                </div>
            </div>
            <div  className='d-flex justify-content-center'>
                <h1 className='skillsh1_2 mt-5 mb-5'>További érdeklődéseim</h1>
            </div>
            <div className='container'>
                <div className='row'>
                    <div data-aos="zoom-in"  className='col-lg-4 col-sm-12 d-flex flex-column justify-content-center align-items-center skillsimgcontainer'>
                        <img  className='skillsimg ' src={firebase} alt="react"></img>
                        <p className='pt-3 skillsdesc'>Firebase</p>
                    </div>
                    <div data-aos="zoom-in"  className='col-lg-4 col-sm-12  d-flex  flex-column justify-content-center align-items-center skillsimgcontainer'>
                        <img  className='skillsimg' src={nodejs} alt="react"></img>
                        <p  className='pt-3 skillsdesc'>Nodejs</p>
                    </div>
                    <div data-aos="zoom-in" className='col-lg-4 col-sm-12 d-flex flex-column  justify-content-center align-items-center skillsimgcontainer'>
                        <img  className='skillsimg' src={figma} alt="react"></img>
                        <p  className='pt-3 skillsdesc'>Figma</p>
                    </div>
                </div>
            </div>
         
        </div>
    )
}
export default Skills

