import React from 'react'
import '../mystyles.css'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Proficiencies from './Proficiencies'
import menuimg from './Icons/menu.svg'

class Navbardiv extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      issmall: true,
      nav_list: [{
        id: "first",
        data_ref: "home"
      },
      {
        id: "second",
        data_ref: "about"
      },
      {
        id: "third",
        data_ref: "skills"
      },
      {
        id: "fourth",
        data_ref: "projects"
      },
      {
        id: "five",
        data_ref: "Proficiences"
      }
      // {
      //   id: "six",
      //   data_ref: "contact"
      // }
    ]
    }
  }
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  add = () => {
    this.setState({
      issmall: !this.state.issmall
    })
    let divvalue = document.getElementById("collapsed")
    console.log(divvalue)
    this.state.issmall ? divvalue.classList.add("show") : divvalue.classList.remove("show")
  }
  render() {
    return (
      <>
        <div className="bg-white">
          <div className="divup bg-white">
            <div className="text-left">
              <button className="divbtn btn btn-light" onClick={this.add}><img src={menuimg} /></button>

            </div>
          </div>
          <nav id="navbar" className="">
            <div className={`navbarcollapse`} id="collapsed">
              <div></div>
              {this.state.nav_list.map((ele) =>
                <div className="col-lg-2 col-xl-2 col-md-12 col-sm-12"> <li style={{"width":"300px"}} className="nav-item" id={ele.id} data-ref={ele.data_ref}><a className="nav-link" href={`#${ele.data_ref}`} onClick={this.add}>{ele.data_ref}</a></li></div>
              )}
            </div>
          </nav>
        </div>
        <div className="container-fluid" ref={el => (this.div = el)}>


          <div className="screen" id="home">
            <Home />
          </div>
          <div className="screen" id="about">
            <About />
          </div>

          <div className="screen" id="skills">
            <Skills />
          </div>
          <div className="screen" id="projects">
            <Projects />
          </div>
          <div className="screen" id="Proficiences">
            <Proficiencies />
          </div>
          {/* <div className="screen" id="contact">
            <Contact />
          </div> */}
        </div>
      </>
    )
  }
}
export default Navbardiv