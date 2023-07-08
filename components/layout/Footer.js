import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-1 bg-gray-850 border-gray-800">
                        <div className="row">
                            <div className="col-lg-4 mb-30"><Link className="wow animate__animated animate__fadeInUp" href="/"><img width="150px" src="assets/imgs/page/logo/Soff Study white logo.png" alt="Soff white logo" /></Link>
                                <p className="mb-20 mt-20 text-sm color-gray-500 wow animate__animated animate__fadeInUp">When an
                                We develop efficient web applications, bots and online stores for our clients all over the world. Let’s talk!
</p>
                                <h6 className="color-white mb-5 wow animate__animated animate__fadeInUp">Address</h6>
                                <p className="text-sm color-gray-500 wow animate__animated animate__fadeInUp">Uzbekistan <br/>8/1 Bunyodkor Avenue, Tashkent 100115</p>
                            </div>
                            <div className="col-lg-4 mb-30">
                                <h6 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">Categories</h6>
                                <div className="row">
                                    <div className="col-6">
                                        <ul className="menu-footer">
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/">Home</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/page-about">About</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/portfolio">Portfolio</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/page-contact">Contact</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/Pos-Fits">PosFits</Link></li>
                                            <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/Faqs">Faqs</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-30">
                                <h4 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">Newsletter</h4>
                                <p className="text-base color-gray-500 wow animate__animated animate__fadeInUp">Sign up to be first
                                    to receive the latest stories inspiring us, case studies, and industry news.</p>
                                <div className="form-newsletters mt-15 wow animate__animated animate__fadeInUp">
                                  
                                        <div className="form-group">
                                            <input className="input-name border-gray-500" type="text" placeholder="Your name" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input-email border-gray-500" type="email" placeholder="Emaill address" />
                                        </div>
                                        <div className="form-group mt-20">
                                            <button className="btn btn-linear hover-up">
                                                Subscribe
                                                <i className="fi-rr-arrow-small-right" />
                                            </button>
                                        </div>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;