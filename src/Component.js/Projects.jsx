import React, { Component } from 'react'
import Google from './images/GoogleTimer.png'
import Bill from './images/Billgenerator.png'
import Todo from './images/Todo.png'
import Marksrecorder from './images/Marksrecorder.png'
import TaskManager from './images/Taskmanager.png'
import OMDB from './images/OMDB.png'
import htmlsvg from './Icons/html-5.svg'
import boostrapsvg from './Icons/bootstrapimg.svg'
import reactsvg from './Icons/react.svg'
import jssvg from './Icons/javascript.svg'
import csssvg from './Icons/css-3.svg'
import flasksvg from './Icons/flask.svg'
import mysqlsvg from './Icons/mysql.svg'
import materialsvg from './Icons/material-ui.svg'
import jquerysvg from './Icons/jquery.svg'


import './Css/projects.css'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <h1 className="header" data-aos="fade-up" data-aos-duration="1000">Projects</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="col-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
                                <div className="card justify-content-center" style={{ "height": "300px" }}>
                                    <img className="img-fluid card_img" style={{ "height": "auto" }} src={Google} />
                                    <div className="card_text col-12">
                                        <div className="col-12" >
                                            <a href="https://googletimer.netlify.com" target="blank"><h3>GoogleTimer & GoogleStopWatch</h3></a>
                                            <br />
                                            <p> My first React application</p>
                                            <div className="col-12 d-flex justify-content-center">
                                                <div className="row">
                                                    <div className="col-3"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={htmlsvg} /></div>
                                                    <div className="col-3"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={csssvg} /></div>
                                                    <div className="col-3"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={boostrapsvg} /></div>
                                                    <div className="col-3"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={reactsvg} /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                            <div className="col-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                <div className="card justify-content-center" style={{ "height": "300px" }}>
                                    <img className="img-fluid card_img" style={{ "height": "auto" }} src={Todo} />
                                    <div className="card_text col-12">
                                        <div className="col-12">
                                            <a href="https://checklist-todo.netlify.com" target="blank"><h4>TODO Application</h4></a>
                                            <p> My React+Redux application</p>
                                            <div className="col-12 d-flex justify-content-center">
                                                <div className="row">
                                                    <div className="col-3"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={htmlsvg} /></div>
                                                    <div className="col-3"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={csssvg} /></div>
                                                    <div className="col-3"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={materialsvg} /></div>
                                                    <div className="col-3"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={reactsvg} /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                            <div className="col-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                <div className="card justify-content-center" style={{ "height": "300px" }}>
                                    <img className="img-fluid card_img" style={{ "height": "auto" }} src={OMDB} />
                                    <div className="card_text col-12">
                                        <div className="col-12">
                                            <a href="https://omdbproject.netlify.com" target="blank"><h3>Open Movie Data Base</h3></a>
                                            <p> My first API Request application</p>
                                            <div className="col-12 d-flex justify-content-center">
                                                <div className="row">
                                                    {/* <div className="col-1"></div> */}
                                                    <div className="col-2"><img style={{ height: "30px", width: "30px" }}  src={htmlsvg} /></div>
                                                    <div className="col-2"><img style={{ height: "30px", width: "30px" }}  src={csssvg} /></div>
                                                    <div className="col-2"><img style={{ height: "30px", width: "30px" }}  src={jssvg} /></div>
                                                    <div className="col-2"><img style={{ height: "30px", width: "30px" }}  src={jquerysvg} /></div>
                                                    <div className="col-2"><img style={{ height: "30px", width: "30px" }}  src={boostrapsvg} /></div>
                                                    {/* <div className="col-1"></div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                            <div className="col-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="750">
                                <div className="card justify-content-center" style={{ "height": "300px" }}>
                                    <img className="img-fluid card_img" style={{ "height": "auto" }} src={Bill} />
                                    <div className="card_text col-12">
                                        <div className="col-12">
                                            <a href="https://billgenerator.netlify.com" target="blank"><h3>Bill Generator</h3></a>
                                            <p> My JavaScript application</p>
                                            <div className="col-12 d-flex justify-content-center">
                                                <div className="row">
                                                    <div className="col-4"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={htmlsvg} /></div>
                                                    <div className="col-4"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={csssvg} /></div>
                                                    <div className="col-4"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={jssvg} /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                            <div className="col-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="750">
                                <div className="card justify-content-center" style={{ "height": "300px" }}>
                                    <img className="img-fluid card_img" style={{ "height": "auto" }} src={Marksrecorder} />
                                    <div className="card_text col-12">
                                        <div className="col-12">
                                            <a href="https://marksrecorder.netlify.com" target="blank"><h3>Marks Recorder</h3></a>
                                            <p> My Jquery application</p>
                                            <div className="col-12 d-flex justify-content-center">
                                                <div className="row">
                                                    <div className="col-4"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={htmlsvg} /></div>
                                                    <div className="col-4"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={csssvg} /></div>
                                                    <div className="col-4"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={jssvg} /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="col-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
                                <div className="card justify-content-center" style={{ "height": "300px" }}>
                                    <img className="img-fluid card_img" style={{ "height": "auto" }} src={TaskManager} />
                                    <div className="card_text col-12">
                                        <div className="col-12" >
                                            <a href="#" target="blank"><h3>Task Manager</h3></a>
                                            <br />
                                            <p> My End to End backend+ front end application</p>
                                            <div className="col-12 d-flex justify-content-center">
                                                <div className="row">
                                                    <div className="col-2"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={htmlsvg} /></div>
                                                    <div className="col-2"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={boostrapsvg} /></div>
                                                    <div className="col-2"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={reactsvg} /></div>
                                                    <div className="col-2"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={csssvg} /></div>
                                                    <div className="col-2"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={flasksvg} /></div>
                                                    <div className="col-2"><img style={{ height: "50px", width: "50px" }} className="img-fluid" src={mysqlsvg} /></div>


                                                </div>
                                            </div>
                                        </div>
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
