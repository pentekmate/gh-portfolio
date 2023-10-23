import '../css/projects.css'
import ellipse from '../imgs/Ellipse 1.svg'
import Project from './Project'
function ProjectsContainer({data}){
return(
    <div data-aos="zoom-in" className="container-fluid position-relative  projects ">
        <div className="custom-shape-divider-top-1697902009">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
        <div id="munkaim" className='container pt-5 pb-5'>
            <h1 className='pt-5 mt-5 projectsh1'>
                <span className='m-2'>
                <img alt="kor" src={ellipse}></img>
                </span>Munkáim</h1>
            <hr></hr>
            <div>
            <div className='mt-5'>
                {data.map((item)=>
                   <Project key={item.id} link={item.link} id={item.id} nev={item.nev} kep={item.kep} leiras={item.leiras} technologia={item.technologia}></Project>
                )}
                </div>
            </div>
        </div>
    </div>
)
}
export default ProjectsContainer

