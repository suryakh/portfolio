import React, { Component } from 'react'
import './Css/Proficiencies.css'

export default class Proficiencies extends Component {
    render() {
        return (
            <div>
                <h1 className="header" data-aos="fade-up" data-aos-duration="1000">Proficiencies</h1>
                <div className="container proficiencies">
                    <div className="row maindiv p-4 bg-white " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="col-xl-12 d-flex justify-content-center">
                            <div className="circle">
                                <h1>1000+</h1>
                            </div>
                        </div>
                            <div className="col-12">
                                <span> Hours </span>
                                <p> of coding</p>
                                </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="col-xl-12 d-flex justify-content-center">
                            <div className="circle">
                                <h1>120+</h1>
                            </div>
                        </div>
                            <div className="col-12">
                                <span> HackerRank </span>
                                <p>Peoblems</p>
                                </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="col-xl-12 d-flex justify-content-center">
                            <div className="circle">
                                <h1>100+</h1>
                            </div>
                        </div>
                            <div className="col-12">
                                <span> Git </span>
                                <p>commits</p>
                                </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="col-xl-12 d-flex justify-content-center">
                            <div className="circle">
                                <h1>1000+</h1>
                            </div>
                        </div>
                            <div className="col-12">
                                <span> Hours </span>
                                <p> of Soft Skills</p>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
