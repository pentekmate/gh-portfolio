import '../App.css';
import Header from './Header';
import ProjectsContainer from './ProjectsContainer';
import AOS from 'aos';
import Skills from './Skills';
import SendMessage from './SendMessage';
AOS.init();
const data=[{
  id:1,
  link:"https://github.com/pentekmate/WebCrawler_Frontend",
  nev:"Webcrawler bot",
  kep:"Frame10.png",
  leiras:"A project lényege az volt , hogy bizonyos használt cikkek megtalálása gyorsabb legyen, és ne kelljen oldalróloldalra járkálni.",
  technologia:["ReactJs","NodeJs","Firebase"]
},
{
  id:2,
  link:"https://github.com/pentekmate/Bevasarlolista_Kozos_frontend",
  nev:"Bevásárló listám",
  kep:"Frame4.png",
  leiras:"Ebben a projectben egy mobil alkalmazást készítettünk.Az alkalmazással a besárlást szerettük volna felgyorsítani. A projectet egy másik társammal készítettük. ",
  technologia:["React native","NodeJs","Mysql"] 
},
{
  id:3,
  link:"",
  kep:"Frame11.png",
  nev:"Astronomy Page",
  leiras:"Egyszerű landing page csillagászattal kapcsolatban. Használva a NASA API-t. Ezaz alkalmazás még fejlesztési fázisban van. A róla látható képek figma tervek.",
  technologia:["ReactJs"] 
},]
function App() {
  return (
    <div className="App">
        <Header></Header>
        <ProjectsContainer data={data}></ProjectsContainer>
        <Skills></Skills>
        <SendMessage></SendMessage>
    </div>
  );
}

export default App;
