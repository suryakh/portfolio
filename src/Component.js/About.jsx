import React, { Component } from 'react'
import about from './images/web_developer.png'
import './Css/About.css'

export default class About extends Component {
    render() {
        return (
                <div className="row">
                    <div className="col-lg-6 col-xl-6 col-md-12 col-sm -12">
                        <img data-aos="fade-in" data-aos-duration ="1000" className="pl-4 img-fluid" style={{"height":"auto"}} src={about} />
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-12 col-sm -12">
                        <div className="col-lg-12 col-xl-9 col-md-12 col-sm -12 text-left bg-white p-3" data-aos="fade-up" data-aos-duration ="1000">
                        <h1>About me</h1>
                        <p>
                        Hi
                            I am Surya. I am trained as Full Stack developer at masai school in MERN stack.
                            <br />
                            I am very passionated and dedicated at my work.i love building products amd keep update myself along with the changing technologies.I acquired handson experince with long hours of coding at masai school.
                        </p>
                        </div>
                    <div className="col-lg-12 col-xl-6 col-md-12 col-sm-12 text-center"  data-aos="fade-up" data-aos-duration ="1000" data-aos-delay="250">
                        <button className ="btn btn-primary m-5">Dowload Resume</button>
                        </div> 
                    </div>
                </div>
        )
    }
}
