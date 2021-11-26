import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import MyWork from './components/MyWork';
// import Portfolio from './components/Portfolio';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { useState, useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SideNav from './components/SideNav';


function App() {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    // Animation 
    useEffect(() => {
      Aos.init({})
    }, [])

    // force to scroll to top
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])

  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 70,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 7, 
                // color: "#f9ab00",
                color: "#000",
              }
            },
            line_linked:{
              color: "#000",
              opacity: 0.5
            }
          }
        }}
      />
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <SideNav/>
      <Header />
      <MyWork />
      <Services/>
      <Experience/>
      {/* <Portfolio/> */}
      {/* <Testimonials/> */}
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
