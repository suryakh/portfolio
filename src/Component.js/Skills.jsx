import React, { Component } from 'react'
import "./Css/skills.css"

export default class Skills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onscreen: false
        }
    }
    componentDidMount() {
        const script = document.createElement("script")
        script.async = true;
        script.src = "./scripted.js"
        this.div.appendChild(script)
    }
    render() {
        return (
            <div ref={el => (this.div = el)}>
                <h1 className="header" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Skills</h1>
                <div className="skillsdiv container">

                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 bg-white mt-5">
                            <div className="skillsbar p-5" id="skillsbar" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
                                <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                    <div className="row">
                                        <div className="col-12"><h3>Html5</h3></div>
                                        {/* <div className="col-4 text-right" data-aos="extend"></div> */}
                                    </div>
                                    <span className="bar"><span className="html" data-aos="fade-right" data-aos-duration="500" data-aos-delay="1250"></span></span>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                                    <div className="row">
                                        <div className="col-12"><h3>CSS3</h3></div>
                                        {/* <div className="col-4 text-right"></div> */}
                                    </div>
                                    <span className="bar"><span className="css" data-aos="fade-right" data-aos-duration="500" data-aos-delay="1250"></span></span>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                                    <div className="row">
                                        <div className="col-12"><h3>JavaScript & Jquery</h3></div>
                                        {/* <div className="col-4 text-right"><h3>80%</h3></div> */}
                                    </div>
                                    <span className="bar"><span className="javascript" data-aos="fade-right" data-aos-duration="500" data-aos-delay="1250"></span></span>
                                </li>
                            </div>
                        </div>


                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 mt-5">
                            <div className="skillstwo p-5 bg-white" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
                                <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                    <div className="row">
                                        <div className="col-12"><h3>React & Redux</h3></div>
                                        {/* <div className="col-4 stext-right"><h3>80%</h3></div> */}
                                    </div>
                                    <span className="bar"><span className="react" data-aos="fade-right" data-aos-duration="500" data-aos-delay="1250"></span></span>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                                    <div className="row">
                                        <div className="col-12"><h3>Boostrap</h3></div>
                                        {/* <div className="col-4 text-right"><h3>75%</h3></div> */}
                                    </div>
                                    <span className="bar"><span className="boostrap" data-aos="fade-right" data-aos-duration="500" data-aos-delay="1250"></span></span>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                                    <div className="row">
                                        <div className="col-12"><h3>Material-ui</h3></div>
                                        {/* <div className="col-4 text-right"><h3>40%</h3></div> */}
                                    </div>
                                    <span className="bar"><span className="material-ui" data-aos="fade-right" data-aos-duration="500" data-aos-delay="1250"></span></span>
                                </li>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="skillspie container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1050">
                    <div className="mt-5 cl-12">
                        <div className="d-flex justify-content-center">
                            <div className="row chartpie">
                                <div className="col-xl-4 col-lg-12 col-sm-12 col-md-12 mb-5 d-flex justify-content-center">
                                    <div className="box ">
                                        <div className="percentage">
                                            <svg id ="circlesvg">
                                                <circle cx="90" cy="90" r="90"></circle>
                                                <circle cx="90" cy="90" r="90"></circle>
                                            </svg>
                                            <div className="number">
                                                <h3>Python</h3>

                                            </div>
                                        </div>
                                        {/* <h1 className="text">Python</h1> */}
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12 col-sm-12 col-md-12 mb-5 d-flex justify-content-center">
                                    <div className="box ">
                                        <div className="percentage">
                                            <svg id ="circlesvg">
                                                <circle cx="90" cy="90" r="90"></circle>
                                                <circle cx="90" cy="90" r="90"></circle>
                                            </svg>
                                            <div className="number">
                                                <h3>Flask</h3>

                                            </div>
                                        </div>
                                        {/* <h1 className="text">Flask</h1> */}
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12 col-sm-12 col-md-12 mb-5 d-flex justify-content-center">
                                    <div className="box ">
                                        <div className="percentage">
                                            <svg id ="circlesvg">
                                                <circle cx="90" cy="90" r="90"></circle>
                                                <circle cx="90" cy="90" r="90"></circle>
                                            </svg>
                                            <div className="number">
                                                <h3>MySql</h3>

                                            </div>
                                        </div>
                                        {/* <h1 className="text">MySql</h1> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
