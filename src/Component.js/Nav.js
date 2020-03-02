import React from 'react'
import '../mystyles.css'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Proficiencies from './Proficiencies'
import menuimg from './Icons/menu.svg'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
      },
      {
        id: "six",
        data_ref: "contact"
      }]
    }
  }
  render() {
    return (
      <div className="container-fluid" ref={el => (this.div = el)}>

        <nav class="navbar groups navbar-expand-lg" id="navbar">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <img src= {menuimg} />
            {/* <span className="navbar-toggler-icon"></span>

             */}
          </button>
          <div className="collapse navbar-collapse offset-lg-2 offset-xl-4 offset-md-0 offset-sm-0" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto">
              {this.state.nav_list.map((ele) =>
                <li className="nav-item" id={ele.id} data-ref={ele.data_ref}><a className="nav-link" href={`#${ele.data_ref}`}>{ele.data_ref}</a></li>
              )}

            </ul>
          </div>
        </nav>

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
        <div className="screen" id="contact">
          <Contact />
        </div>
      </div>
    )
  }
}
export default Nav