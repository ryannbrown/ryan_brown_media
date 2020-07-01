import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import { Container, Nav, Button, Col, Row, Card } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Navigation from "./components/Navigation/index"
import Portfolio from "./components/Portfolio/index"
import Pricing from "./components/Pricing/index"
import About from "./components/About/index"
// import ParticlesJS from 'particles.json';

const particlesJS = window.particlesJS;


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'assets/particles.json', function () {
//   console.log('callback - particles-js config loaded');
// });

const particlesOptions = {
  particles: {
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          "src": "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  }
}


function App() {
  return (
    <div className="App">
      <Particles
        className="particles"
        params={{ particlesOptions }}
      />
         <Navigation/>

         <Router>
           <Switch>
             {/* <Route path = "/" component={App}/> */}
             <Route path="/pricing" component={Pricing}/>
             <Route path="/about" component={About}/>
             <Route path="/" component={Portfolio}/>
           </Switch>
         </Router>
         <Row>
           <Col>
           <div className="footer-div">Ryan Brown Media | Raleigh, NC | Copyright 2020</div>
           </Col>
         </Row>
         
    </div>
  
  );
}

export default App;
