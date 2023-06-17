import Link from "next/link";
import Head from 'next/head';
import Accordion from "../components/elements/Accordion";
import PortfolioFilter from "../components/elements/PortfolioFilter";
import Layout from "../components/layout/Layout";
import Brand from "../components/slider/Brand";
import Testimonial from "../components/slider/Testimonial";
import Typewriter from 'typewriter-effect';

export default function Fops() {
    return (
        <>
            <Head>
                <title>
                    soff - Fops
                </title>
            </Head>
            <Layout>
                <div className="cover-home1">
                    <div className="container">
                        
                    <div className="text-center mt-30">
                                    <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">FAQs</h2>
                                </div>
                                <div className="box-faqs mb-70">
                                    <Accordion />
                                </div>
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="text-center mt-30 mb-50">
                                    <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">
                                        The best work solution,<br />for the best price.</h2>
                                </div>
                                <div className="row mt-50 mb-30">
                                    <div className="col-lg-4 wow animate__animated animate__fadeIn" data-wow-delay=".0s">
                                        <div className="card-pricing border-gray-800 bg-gray-850 mb-30">
                                            <div className="card-pricing-top border-gray-800">
                                                <h3 className="color-white mb-10">Free</h3>
                                                <p className="text-lg color-gray-500 mb-15">Best for personal use</p>
                                                <p className="text-base color-gray-500 mb-30">Get started without creadit card or payment method</p><Link className="btn btn-border-linear" href="#">Try for free</Link><Link className="btn btn-link-more" href="#">Learn more</Link>
                                            </div>
                                            <div className="card-pricing-bottom">
                                                <h6 className="color-white mb-25">What you get:</h6>
                                                <ul className="list-checked">
                                                    <li>Unlimited Storage</li>
                                                    <li>Unlimited Members</li>
                                                    <li>Two-Factor Authentication</li>
                                                    <li>Collaborative Docs</li>
                                                    <li>Unlimited Storage</li>
                                                    <li>Sprint Management</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                        <div className="card-pricing border-gray-800 bg-gray-850 mb-30">
                                            <label className="lbl-success text-base color-gray-900">Popular</label>
                                            <div className="card-pricing-top border-gray-800">
                                                <h3 className="color-white mb-10">Business</h3>
                                                <p className="text-lg color-gray-500 mb-15">Best for personal use</p>
                                                <p className="text-base color-gray-500 mb-30">Get started without creadit card or payment method</p><Link className="btn btn-border-linear" href="#">Get started</Link><Link className="btn btn-link-more" href="#">Learn more</Link>
                                            </div>
                                            <div className="card-pricing-bottom">
                                                <h6 className="color-white mb-25">What you get:</h6>
                                                <ul className="list-checked">
                                                    <li>Unlimited Storage</li>
                                                    <li>Unlimited Members</li>
                                                    <li>Two-Factor Authentication</li>
                                                    <li>Collaborative Docs</li>
                                                    <li>Unlimited Storage</li>
                                                    <li>Sprint Management</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                        <div className="card-pricing border-gray-800 bg-gray-850 mb-30">
                                            <label className="lbl-danger text-base color-gray-900">Premium</label>
                                            <div className="card-pricing-top border-gray-800">
                                                <h3 className="color-white mb-10">Enterprise</h3>
                                                <p className="text-lg color-gray-500 mb-15">Best for personal use</p>
                                                <p className="text-base color-gray-500 mb-30">Get started without creadit card or payment method</p><Link className="btn btn-border-linear" href="#">Get started</Link><Link className="btn btn-link-more" href="#">Learn more</Link>
                                            </div>
                                            <div className="card-pricing-bottom">
                                                <h6 className="color-white mb-25">What you get:</h6>
                                                <ul className="list-checked">
                                                    <li>Unlimited Storage</li>
                                                    <li>Unlimited Members</li>
                                                    <li>Two-Factor Authentication</li>
                                                    <li>Collaborative Docs</li>
                                                    <li>Unlimited Storage</li>
                                                    <li>Sprint Management</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-70 mb-50">
                                    <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Testimonials</h2>
                                    <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Nettracking is a B2B marketing software for telecommunications industry.</p>
                                </div>
                                <div className="box-testimonials mb-150animate__fadeIn mb-100">
                                    <div className="box-swiper">
                                        <Testimonial />
                                    </div>
                                </div>
                                <div className="row align-items-end mt-30">
                                    <div className="col-lg-9 wow animate__animated animate__fadeIn">
                                        <h3 className="color-linear">Content publishing cooperation<br className="d-none d-lg-block" />with my partners</h3>
                                    </div>
                                    <div className="col-lg-3 text-lg-end mt-15 hover-up wow animate__animated animate__fadeIn" data-wow-delay="0.2s"><Link className="link-brand-1" href="#">Learn More</Link></div>
                                </div>
                                <div className="list-logos mt-50 mb-30">
                                    <div className="container">
                                        <div className="row">
                                            <div className="swiper-container swiper-group-1">
                                                <div className="swiper-wrapper wow animate__animated animate__fadeIn">
                                                    <Brand />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}