import React, { Component } from 'react'
import about from './images/web_developer.png'
import './Css/About.css'

export default class About extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
                    <img data-aos="fade-in" data-aos-duration="1000" className="pl-4 img-fluid" style={{ "height": "auto" }} src={about} />
                </div>
                <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
                    <div className="textdiv col-lg-12 col-xl-9 col-md-12 col-sm -12 bg-white p-3" data-aos="fade-up" data-aos-duration="1000">
                        <h1>About me</h1>
                        <p className="m-5">
                            <span>Hi, I am Surya.</span>
                            <br />
                            I am trained as a Full Stack developer at Masai school in MERN stack.
                            I am very passionate and dedicated to my work. i love building products and keep update myself along with the changing technologies. I acquired hands-of experience with long hours of coding at Masai school
                        </p>
                    </div>
                    <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 p-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
                        <div className="col-lg-6 col-xl-6 col-sm-12 col-md-12 text-lg-right text-xl-right">
                            <button className="btn btn-primary">Dowload Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
