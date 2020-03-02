import React, { Component } from 'react'
import './Css/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhoneAlt, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import aos from 'aos'
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter,
    faLinkedinIn,
    faGithub
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter,
);
export default class Home extends Component {
    componentDidMount() {
        const script = document.createElement("script")
        script.async = true;
        script.src = "./scripted.js"
        this.div.appendChild(script)
        aos.init({
            once: true
        })
    }
    render() {
        return (
            <div className="homediv container" data-ref="home" ref={el => (this.div = el)}>
                <div className="row" style={{ "margin-top": "200px" }}>
                    <div data-aos="fade-up" data-aos-duration="1000" className="image col-xl-6 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-ceneter" data-ref="home">
                        <div className="contentimg col-12">
                            <img src="./profile.jpg" alt="profilepic" />
                        </div>
                    </div>
                    <div className="content col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="contentinside">
                            <p className="greeting" data-aos="fade-up" data-aos-duration="1000"><span>Hello I'm</span></p>
                            <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">Surya Khandavilli</h1>
                            <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">Full Stack Developer</h3>
                            <div className="details">
                                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"><FontAwesomeIcon icon={faEnvelope} />  khandavillisurya@gmail.com</p>
                                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="750"><FontAwesomeIcon icon={faPhoneAlt} />  9676442522</p>
                                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000"> <FontAwesomeIcon icon={faMapMarked} />  Bangalore</p>
                            </div>
                            <div className="socialicon  text-center col-lg-6 col-xl-6 col-sm-12 col-md-12" id="socialicon" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1250">
                                <div className="row">
                                    <div className="col-3 mt-2">
                                        <a href="https://github.com/suryakh" target="blank">
                                            <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                                    </div>
                                    <div className="col-3 mt-2">
                                        <a href="https://www.linkedin.com/in/surya-khandavilli-b5b019102/" target="blank">
                                            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                                        </a>
                                    </div>
                                    <div className="col-3 mt-2">
                                        <a href="https://www.facebook.com/surya.khandavilli" target="blank">
                                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                                        </a>
                                    </div>
                                    <div className="col-3 mt-2">
                                        <a href="https://twitter.com/suryakhandavil1" target="blank">
                                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                                        </a>
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
