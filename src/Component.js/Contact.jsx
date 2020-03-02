import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhoneAlt, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import aos from 'aos'
import './Css/Contactme.css'
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

export default class Contact extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="header" data-ref ="contact" >contact </h1>
                <div className="content2 col-12">
                    <div className="contentinside">
                        <div className="details">
                            <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="500"><FontAwesomeIcon icon={faEnvelope} />  khandavillisurya@gmail.com</p>
                            <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="750"><FontAwesomeIcon icon={faPhoneAlt} />  9676442522</p>
                            <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000"> <FontAwesomeIcon icon={faMapMarked} />  Bangalore</p>
                        </div>
                        <div className="socialicon  text-center col-12" id="socialicon" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1250">
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
        )
    }
}
