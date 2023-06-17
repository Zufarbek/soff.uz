import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Head from 'next/head';
// import ImgData from "../../public/assets/imgs/page/portfolio-details2/Emu University1.png";


import PortfolioAPI from '../../repository/portfolio'


const BlogDetails = () => {
    let Router = useRouter()
    
    const Url = 'http://localhost:5000/'
    const [DataPortfolioId, setDataPortfolioId] = useState({});
    const id  = Router.query.detrails2id;

    const portfolioAll = async (props) => {
        console.log(props);
        const UserLogin = await PortfolioAPI.getAllPortfolioId(props);
        console.log(UserLogin);
        setDataPortfolioId(UserLogin)
    };

    useEffect(() => {
        portfolioAll(id)
    }, [id]);







    return (
        <>
            <Head>
                <title>
                    soff - Portfolio Details2
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
                                        <h2 className="color-linear">{DataPortfolioId.title}</h2>
                                    </div>
                                </div>
                                <div className="row mt-30 mb-50" style={{ overflow: "hidden" }}>
                                    <div className="row m-0">
                                        <div className="col-4">
                                           
                                                <div style={{ cursor: "pointer" }} className="image-detail mb-30"><img  className="bdrd16" style={{ height: "400px" }} src={Url + DataPortfolioId.image} alt="Genz" /></div>
                                            
                                        </div>
                                        <div className="col-4">
                                            <div style={{ cursor: "pointer" }} className="image-detail mb-30"><img  className="bdrd16" style={{ height: "400px" }} src={Url + DataPortfolioId.image} alt="Genz" /></div>
                                        </div>
                                        <div className="col-4">
                                            <div style={{ cursor: "pointer" }} className="image-detail mb-30"><img  className="bdrd16" style={{ height: "400px" }} src={Url + DataPortfolioId.image} alt="Genz" /></div>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="content-detail border-gray-800">
                                            <h3 className="color-white mb-30 wow animate__animated animate__fadeIn">Project Details (<Link className='color-linear' href={`${DataPortfolioId.link}`} target={"https://emuni.uz/en/home-page/"}>Emumi.uz</Link>)</h3>
                                            <p className="text-lg color-gray-500 wow animate__animated animate__fadeIn">{DataPortfolioId.description}</p>
                                          
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
                                                            <p className="color-gray-500">{DataPortfolioId.category}</p>
                                                        </div>
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-200 mb-10 text-uppercase">Client</p>
                                                            <p className="color-gray-500">{DataPortfolioId.client}</p>
                                                        </div>
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-200 mb-10 text-uppercase">Project date</p>
                                                            <p className="color-gray-500">{DataPortfolioId.project_date}</p>
                                                        </div>
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-200 mb-10 text-uppercase">Project URL</p>
                                                            <p className="color-gray-500"><Link className="text-white" href={`${DataPortfolioId.link}`} target={"https://emuni.uz/en/home-page/"}>{DataPortfolioId.link}</Link></p>
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



export default BlogDetails;