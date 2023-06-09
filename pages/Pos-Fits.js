import Link from "next/link";
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import data from "../util/healthy";

export default function PosFits() {
    return (
        <>
            <Head>
                <title>soff - Pos-Fits</title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="row align-items-end mt-50">
                                    <div className="col-lg-12 text-center">
                                        <div className="d-inline-block position-relative">
                                            <h2 className="color-linear mb-10 wow animate__animated animate__fadeInUp">Featured Articles</h2>
                                        </div>
                                        <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Discover the most outstanding articles in all topics</p>
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <div className="box-breadcrumbs wow animate__animated animate__fadeIn">
                                            <ul className="breadcrumb">
                                                <li><Link className="home" href="/">Home</Link></li>
                                                <li><Link href="/Pos-Fits">PosFits</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="border-bottom border-gray-800 mt-30 mb-30" />
                                    </div>
                                </div>
                                <div className="box-list-posts mt-40">
                                    <div className="row">
                                        <div className="col-lg-8 m-auto">
                                            <div className="box-list-posts mt-30">
                                                {data.slice(0, 5).map((item, i) => (
                                                    <div  key={i} className="card-list-posts card-list-posts-small border-bottom border-gray-800 pb-30 mb-30 wow animate__animated animate__fadeIn">
                                                        <div className="card-image hover-up">
                                                            <div className="box-author mb-20">
                                                                <img src="assets/imgs/page/healthy/author.png" alt="Genz" />
                                                                <div className="author-info">
                                                                    <h6 className="color-gray-700">Joseph</h6>
                                                                    <span className="color-gray-700 text-sm">25 April 2022</span>
                                                                </div>
                                                            </div>
                                                            <Link className="btn btn-tag bg-gray-800 hover-up" href="/blog-archive">{item.category}</Link>       
                                                        </div>
                                                        <div className="card-info"><Link href={`/blog/${item.id}`}>
                                                            <h3 className="mb-20 color-white">{item.title}</h3></Link>
                                                            <p className="color-gray-500">Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</p>
                                                            <div className="row mt-20">
                                                                <div className="col-7"><Link className="color-gray-700 text-sm mr-15" href="/blog-archive"># Travel</Link><Link className="color-gray-700 text-sm" href="/blog-archive"># Lifestyle</Link></div>
                                                                <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <nav className="mb-50">
                                                <ul className="pagination">
                                                    <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".0s"><Link className="page-link page-prev" href="#"><i className="fi-rr-arrow-small-left" /></Link></li>
                                                    <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".1s"><Link className="page-link" href="#">1</Link></li>
                                                    <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".2s"><Link className="page-link active" href="#">2</Link></li>
                                                    <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".3s"><Link className="page-link" href="#">3</Link></li>
                                                    <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".4s"><Link className="page-link" href="#">...</Link></li>
                                                    <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".5s"><Link className="page-link page-next" href="#"><i className="fi-rr-arrow-small-right" /></Link></li>
                                                </ul>
                                            </nav>
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