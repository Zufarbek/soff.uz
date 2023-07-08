import React ,{useEffect, useState} from 'react'
import Head from 'next/head';
import Layout from '../components/layout/Layout'
import Link from "next/link";

import PortfolioAPI from '../repository/portfolio';

export default function portfolio() {
    const [DataPortfolio, setDataPortfolio] = useState([])
    const Url = 'https://soff.husandev.uz/'
    const portfolioAll = async () => {
        const UserLogin = await PortfolioAPI.getAllPortfolio();
        setDataPortfolio(UserLogin)
    };

    useEffect(() => {
        portfolioAll()
    }, []);

    return (
        <>
            <Head>
                <title>soff - portfolio</title>
            </Head>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-1" />
                        <div className="col-xl-10 col-lg-12">
                            <div className="mt-70 mb-50">
                                <h2 className="color-linear mb-10 wow animate__animated animate__fadeInUp">Portfolio</h2>
                                <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Our team of experienced web developers and designers work closely with our clients to ensure that their website not only looks great, but also functions seamlessly</p>
                                <div className="row mt-70">
                                    {DataPortfolio ? (
                                            DataPortfolio.map((item, index) => (
                                                <div key={item._id} className="col-lg-4">
                                                    <div className="card-style-1 hover-up mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".0s">
                                                        <div className="card-image"><Link className="link-post" href={`/portfolio-details2id/[id]`} as={`/portfolio-details2id/${item._id}`}><img height={"410px"} src={Url + item.image} alt="Genz" />
                                                            <div className="card-info card-bg-2">
                                                                <div className="info-bottom mb-15">
                                                                    <h4 className="color-white mb-15">{item.title}</h4>
                                                                    <div className="box-author">
                                                                        <div className="author-info">
                                                                            <span className="color-gray-700 text-sm">{item.title} | online</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                    ) : (
                                        <h1>Loading...</h1>
)}
                                   
                              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
