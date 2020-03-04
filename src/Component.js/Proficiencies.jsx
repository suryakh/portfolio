import React, { Component } from 'react'
import './Css/Proficiencies.css'
import GitHubCalendar from 'react-github-calendar';
import axios from 'axios'
import Gitcalender from './images/Gitcalender.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default class Proficiencies extends Component {
    constructor(props){
        super(props)
        this.state={
            isavailable:true
        }
    }
    componentDidMount(){
        axios.get('https://github-calendar.now.sh/v1/suryakh')
        .then((res)=>{
            console.log(res,"dddddddd")
        })
        .catch((res)=>{
            this.setState({
                isavailable:false
            })
        })
    }
    render() {
        const defaultTheme = {
            background: 'transparent',
            text: '#000',
            grade4: '#0D47A1',
            grade3: '#1976D2',
            grade2: '#42A5F5',
            grade1: '#81D4FA',
            grade0: '#ebedf0',
          };
          console.log(<GitHubCalendar/>,"ddddd")
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
                                <h1>300+</h1>
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
                                <h1>100+</h1>
                            </div>
                        </div>
                            <div className="col-12">
                                <span> Hours </span>
                                <p> of Soft Skills</p>
                                </div>
                        </div>

                    </div>
                </div>
                    <div className="container mt-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <div className="col-12 githubchart bg-white mt-5">
                        {this.state.isavailable ?
                    <GitHubCalendar username="suryakh" fontSize={22} blockSize={20} blockMargin={6}  theme={defaultTheme}/> :<div className="col-12"><img className="img-fluid" src={Gitcalender} /></div>}
                    </div>
                    </div>
                    <div className="container-fluid mt-5 "data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1250">
                             <div className="col-12 text-center">
                                <h5>Build with <FontAwesomeIcon icon={faHeart}  color="red" /> React</h5>
                            </div>
                            </div>
            </div>
        )
    }
}
