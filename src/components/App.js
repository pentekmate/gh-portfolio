
import Header from './Header';
import ProjectsContainer from './ProjectsContainer';
import AOS from 'aos';
import Skills from './Skills';
import SendMessage from './SendMessage';
import AppContainer from './AppContainer'
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import MobileNav from './MobileNav';
AOS.init();
const data=[{
  id:1,
  link:"https://github.com/pentekmate/WebCrawler_Frontend",
  nev:"Webcrawler bot",
  kep:"Frame10.png",
  leiras:"A project lényege az volt , hogy bizonyos használt cikkek megtalálása gyorsabb legyen, és ne kelljen oldalról oldalra járkálni.",
  technologia:["ReactJs","NodeJs","Firebase"]
},
{
  id:2,
  link:"https://github.com/pentekmate/Bevasarlolista_Kozos_frontend",
  nev:"Bevásárló listám",
  kep:"Frame4.png",
  leiras:"Ebben a projectben egy mobil alkalmazást készítettünk.Az alkalmazással a bevásárlást szerettük volna felgyorsítani. A projectet egy másik társammal készítettük. ",
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
  const [screenSize,setScreenSize]=useState(getCurrentScreenSize())
  const [scrolling, setScrolling] = useState(false);
  function getCurrentScreenSize()
  {
    return window.innerWidth;
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.scrollY]);
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentScreenSize())
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
        window.removeEventListener('resize', updateDimension);
        console.log(screenSize)
      
    })
  }, [screenSize])
  return (
    <AppContainer>
        {screenSize>768? 
        <Navbar scrolling={scrolling}></Navbar>:
        <MobileNav scrolling={scrolling}></MobileNav>}
        <Header></Header>
        <ProjectsContainer data={data}></ProjectsContainer>
        <Skills></Skills>
        <SendMessage></SendMessage>
    </AppContainer>
  );
}

export default App;
