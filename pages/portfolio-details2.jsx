import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';


const PortfolioDetails = () => {

    const [Img , setImg] = useState({nameIMG:"assets/imgs/page/portfolio-details2/emu University1.png"})


    function Change1() {
        setImg("assets/imgs/page/portfolio-details2/Emu University1.png")

    }

    function Change2() {
        setImg("assets/imgs/page/portfolio-details2/Emu University1.png")

    }

    function Change3() {
        setImg("assets/imgs/page/portfolio-details2/Emu University1.png")
    }

    return (
        <>
            <Head>
                <title>
                    soff - Portfolio Details
                </title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="pt-30 border-bottom border-gray-800 pb-20">
                                    <div className="box-breadcrumbs">
                                        <ul className="breadcrumb">
                                            <li><Link className="home" href="/">Home</Link></li>
                                            <li><Link href="/portfolio">Portfolio</Link></li>
                                            <li><Link href="/portfolio-details2">Portfolio-details</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row mt-50 align-items-end">
                                    <div className="col-lg-8 m-auto text-center">
                                        <h2 className="color-linear">EMU UNIVERSITY</h2>
                                    </div>
                                </div>
                                <div className="row mt-30 mb-50" style={{overflow:"hidden"}}>
                                        <div className="row m-0">
                                        <div className="col-4">
                                            <Link  
                                              href={{
                                                pathname: "/portfolio-details2_img",
                                                query: Img, // the data
                                              }}>
                                            <div style={{cursor:"pointer"}} className="image-detail mb-30"><img onClick={Change1} className="bdrd16" style={{height:"400px"}} src="assets/imgs/page/portfolio-details2/Emu University1.png" alt="Genz" /></div>
                                            </Link>
                                            </div>
                                            <div className="col-4">
                                                <div style={{cursor:"pointer"}} className="image-detail mb-30"><img onClick={Change2} className="bdrd16" style={{height:"400px"}} src="assets/imgs/page/portfolio-details2/Emu University1.png" alt="Genz" /></div>
                                            </div>
                                            <div className="col-4">
                                                <div style={{cursor:"pointer"}} className="image-detail mb-30"><img onClick={Change3} className="bdrd16" style={{height:"400px"}} src="assets/imgs/page/portfolio-details2/Emu University1.png" alt="Genz" /></div>
                                            </div>
                                           
                                        </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="content-detail border-gray-800">
                                            <h3 className="color-white mb-30 wow animate__animated animate__fadeIn">Project Details (<Link className='color-linear' href={"https://emuni.uz/en/home-page/"} target={"https://emuni.uz/en/home-page/"}>Emumi.uz</Link>)</h3>
                                            <p className="text-lg color-gray-500 wow animate__animated animate__fadeIn">Thirty there &amp; time wear across days, make inside on these you. Can young a really, roses blog small of song their dreamy life pretty? Because really duo living to noteworthy bloom bell. Transform clean daydreaming cute twenty process rooms cool. White white dreamy dramatically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. Thirty she a studio of she whimsical projects, afternoon effect going an floated maybe.</p>
                                            <p className="text-lg color-gray-500 wow animate__animated animate__fadeIn">Tortor placerat bibendum consequat sapien, facilisi facilisi pellentesque morbi. Id consectetur ut vitae a massa a. Lacus ut bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent ornare accumsan elit venenatis. Congue sodales nunc quis ultricies odio porta. Egestas mauris placerat leo phasellus ut sit.</p>
                                            {/* <div className="row mt-50 wow animate__animated animate__fadeIn">
                                                <div className="col-lg-6 gallery-left"><img className="img-bdrd-16 mb-30" src="assets/imgs/page/portfolio/portfolio-2.png" alt="Genz" /></div>
                                                <div className="col-lg-6 gallery-right"><img className="img-bdrd-16 mb-20" src="assets/imgs/page/portfolio/portfolio-3.png" alt="Genz" />
                                                <img className="img-bdrd-16" src="assets/imgs/page/portfolio/portfolio-4.png" alt="Genz" /></div>
                                            </div> */}
                                            <p className="text-center text-lg color-gray-500 wow animate__animated animate__fadeIn">The brand identity</p>
                                            <h3 className="color-white mt-50 mb-30 wow animate__animated animate__fadeIn">Hire me</h3>
                                            <p className="text-lg color-gray-500 wow animate__animated animate__fadeIn">Thirty there &amp; time wear across days, make inside on these you. Can young a really, roses blog small of song their dreamy life pretty? Because really duo living to noteworthy bloom bell. Transform clean daydreaming cute twenty process rooms cool. White white dreamy dramatically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. Thirty she a studio of she whimsical projects, afternoon effect going an floated maybe.</p>
                                        </div>
                                        <div className="box-tags wow animate__animated animate__fadeIn"><Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up" href="blog-archive">#Nature</Link><Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up" href="blog-archive">#Beauty</Link><Link className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up" href="blog-archive">#Travel Tips</Link><Link className="btn btn-tags bg-gray-850 border-gray-800 hover-up" href="blog-archive">#House</Link></div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="sidebar">
                                            <div className="box-sidebar bg-gray-850 border-gray-800">
                                                <div className="head-sidebar wow animate__animated animate__fadeIn">
                                                    <h5 className="line-bottom">Project information</h5>
                                                </div>
                                                <div className="content-sidebar">
                                                    <div className="list-comments">
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-200 mb-10 text-uppercase">Category</p>
                                                            <p className="color-gray-500">UNIVERSITY</p>
                                                        </div>
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-200 mb-10 text-uppercase">Client</p>
                                                            <p className="color-gray-500">Ғайбуллаев Асилбек</p>
                                                        </div>
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-200 mb-10 text-uppercase">Project date</p>
                                                            <p className="color-gray-500">01 january, 2023</p>
                                                        </div>
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-200 mb-10 text-uppercase">Project URL</p>
                                                            <p className="color-gray-500"><Link className="text-white" href={"https://emuni.uz/en/home-page/"} target={"https://emuni.uz/en/home-page/"}>https://emuni.uz/en/home-page/</Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-inline-block pt-10 wow animate__animated animate__fadeIn">
                                                <div className="d-flex align-item-center">
                                                    <h6 className="d-inline-block color-gray-500 mr-10">Share</h6><Link className="icon-media icon-fb" href="#" /><Link className="icon-media icon-tw" href="#" /><Link className="icon-media icon-printest" href="#" />
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
    );
};

export default PortfolioDetails;