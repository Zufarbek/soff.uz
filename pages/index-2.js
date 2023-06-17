import Link from "next/link";
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import TrendingTopic from "../components/slider/TrendingTopic";

export default function Home() {
    return (
        <>
            <Head>
                <title>Genz - Home 2</title>
            </Head>
            <Layout>
                <div className="cover-home1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="banner banner-home2">
                                    <div className="text-center">
                                        <h1 className="color-white">We build <span className="color-linear"> websites </span>
                                            that help <br className="d-none d-lg-block" />your business
                                            <span className="color-linear"> stand out</span>
                                        </h1>

                                    </div>
                                    <div className="text-center mt-50">
                                        <h6 className="color-gray-600 mb-20">We use the latest technologies and best practices to create websites that are fast, secure, and user-friendly</h6>
                                        <ul className="list-tags-col-5 mb-50 text-center">
                                            <li>
                                                <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp" data-wow-delay="0s">
                                                    <div className="card-image"><Link href="/blog-archive"><img src="https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png" alt="Genz" /></Link></div>
                                                    <div className="card-info"><Link className="color-gray-500" href="/blog-archive">React/Next.js</Link></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                                    <div className="card-image"><Link href="/blog-archive"><img src="https://develop365.gitlab.io/nuxtjs-2.8.X-doc/en/logos/nuxt-icon-white.png" alt="Genz" /></Link></div>
                                                    <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Vue/Nuxt.js</Link></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                                                    <div className="card-image"><Link href="/blog-archive"><img src="https://w7.pngwing.com/pngs/702/915/png-transparent-ruby-on-rails-round-logo-tech-companies-thumbnail.png" alt="Genz" /></Link></div>
                                                    <div className="card-info"><Link className="color-gray-500" href="/blog-archive">React/Rails</Link></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                                                    <div className="card-image"><Link href="/blog-archive"><img src="https://w1.pngwing.com/pngs/885/534/png-transparent-green-grass-nodejs-javascript-react-mean-angularjs-logo-symbol.pngg" alt="Genz" /></Link></div>
                                                    <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Node.js</Link></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                                                    <div className="card-image"><Link href="/blog-archive"><img src="https://pbs.twimg.com/profile_images/1110148780991623201/vlqCsAVP_400x400.png" alt="Genz" /></Link></div>
                                                    <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Nest.js</Link></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp" data-wow-delay="0.0s">
                                                    <div className="card-image"><Link href="/blog-archive"><img src="https://e7.pngegg.com/pngimages/969/723/png-clipart-functional-programming-in-python-computer-programming-programming-language-python-programming-practice-workshop-program-logo-text-logo-thumbnail.png" alt="Genz" /></Link></div>
                                                    <div className="card-info"><Link className="color-gray-500" href="/blog-archive">Python</Link></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                                    <div className="card-image"><Link href="/blog-archive"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5eyjb_pXW0uQc3z5RZz6LxVdO_Otv1dEF5g&usqp=CAU" alt="Genz" /></Link></div>
                                                    <div className="card-info"><Link className="color-gray-500" href="/blog-archive">SQL/NoSQL</Link></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row mt-70">
                                    <div className="col-lg-6 wow animate__animated animate__fadeIn" data-wow-delay={0}>
                                        <div className="card-blog-1 hover-up">
                                            <div className="card-image mb-20"><Link className="post-type" href="/blog-archive" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage2/news3.png" alt="Genz" /></Link></div>
                                            <div className="card-info">
                                                <div className="row">
                                                    <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive">#Travel</Link></div>
                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                </div><Link href="/single-sidebar">
                                                    <h4 className="color-white mt-20">Are You Ready To Go Home After The Sunset View?</h4></Link>
                                                <div className="row align-items-center mt-25">
                                                    <div className="col-7">
                                                        <div className="box-author"><img src="assets/imgs/page/homepage1/author.jpg" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow animate__animated animate__fadeIn" data-wow-delay={0}>
                                        <div className="card-blog-1 hover-up">
                                            <div className="card-image mb-20"><Link className="post-type" href="/blog-archive" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/news1.png" alt="Genz" /></Link></div>
                                            <div className="card-info">
                                                <div className="row">
                                                    <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive">#Lifestyle</Link></div>
                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">8 mins read</span></div>
                                                </div><Link href="/single-sidebar">
                                                    <h4 className="color-white mt-20">Life is as free as eagles, or is it just loneliness?</h4></Link>
                                                <div className="row align-items-center mt-25">
                                                    <div className="col-7">
                                                        <div className="box-author"><img src="assets/imgs/page/homepage1/author.jpg" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow animate__animated animate__fadeIn" data-wow-delay={0}>
                                        <div className="card-blog-1 hover-up">
                                            <div className="card-image mb-20"><Link className="post-type" href="/blog-archive" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/news2.png" alt="Genz" /></Link></div>
                                            <div className="card-info">
                                                <div className="row">
                                                    <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive">#Photograph</Link></div>
                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">12 mins read</span></div>
                                                </div><Link href="/single-sidebar">
                                                    <h4 className="color-white mt-20">Beautiful aurora in the sky over the city, a spectacular sight</h4></Link>
                                                <div className="row align-items-center mt-25">
                                                    <div className="col-7">
                                                        <div className="box-author"><img src="assets/imgs/page/homepage1/author.jpg" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow animate__animated animate__fadeIn" data-wow-delay={0}>
                                        <div className="card-blog-1 hover-up">
                                            <div className="card-image mb-20"><Link className="post-type" href="/blog-archive" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage2/news4.png" alt="Genz" /></Link></div>
                                            <div className="card-info">
                                                <div className="row">
                                                    <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive">#Design</Link></div>
                                                    <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">25 mins read</span></div>
                                                </div><Link href="/single-sidebar">
                                                    <h4 className="color-white mt-20">Unique architectural designs but not lacking in solid structure</h4></Link>
                                                <div className="row align-items-center mt-25">
                                                    <div className="col-7">
                                                        <div className="box-author"><img src="assets/imgs/page/homepage1/author.jpg" alt="Genz" />
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center"><Link className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn" href="#">
                                    Show More Posts
                                    <i className="fi-rr-arrow-small-right" /></Link></div>
                                <div className="text-center mt-70">
                                    <h2 className="color-linear mb-10">Trending Topics</h2>
                                    <p className="text-lg color-gray-500">Discover the most outstanding articles in all topics</p>
                                </div>
                                <div className="mb-70 mt-70">
                                    <div className="box-topics box-topics-2 border-gray-800 bg-gray-850">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="box-swiper">
                                                    <TrendingTopic />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-70">
                                    <div className="col-lg-12 mb-50">
                                        <h2 className="color-linear d-inline-block mb-10">Recent posts</h2>
                                        <p className="text-lg color-gray-500">Don't miss the latest trends</p>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="box-list-posts">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                        <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage2/news1.png" alt="Genz" /></Link></div>
                                                        <div className="card-info">
                                                            <div className="row">
                                                                <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                                <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div><Link href="/single-sidebar">
                                                                <h5 className="color-gray-50 mt-20">16 Unheard Ways To Achieve Greater Walker</h5></Link>
                                                            <div className="row align-items-center mt-25">
                                                                <div className="col-7">
                                                                    <div className="box-author"><img src="assets/imgs/page/homepage2/author.png" alt="Genz" />
                                                                        <div className="author-info">
                                                                            <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                        <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage2/news2.png" alt="Genz" /></Link></div>
                                                        <div className="card-info">
                                                            <div className="row">
                                                                <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                                <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div><Link href="/single-sidebar">
                                                                <h5 className="color-gray-50 mt-20">Master The Art Of Nature With These 7 Tips</h5></Link>
                                                            <div className="row align-items-center mt-25">
                                                                <div className="col-7">
                                                                    <div className="box-author"><img src="assets/imgs/page/homepage2/author2.png" alt="Genz" />
                                                                        <div className="author-info">
                                                                            <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                        <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage2/news5.png" alt="Genz" /></Link></div>
                                                        <div className="card-info">
                                                            <div className="row">
                                                                <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                                <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div><Link href="/single-sidebar">
                                                                <h5 className="color-gray-50 mt-20">16 Unheard Ways To Achieve Greater Walker</h5></Link>
                                                            <div className="row align-items-center mt-25">
                                                                <div className="col-7">
                                                                    <div className="box-author"><img src="assets/imgs/page/homepage2/author.png" alt="Genz" />
                                                                        <div className="author-info">
                                                                            <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                        <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage2/news6.png" alt="Genz" /></Link></div>
                                                        <div className="card-info">
                                                            <div className="row">
                                                                <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                                <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div><Link href="/single-sidebar">
                                                                <h5 className="color-gray-50 mt-20">Master The Art Of Nature With These 7 Tips</h5></Link>
                                                            <div className="row align-items-center mt-25">
                                                                <div className="col-7">
                                                                    <div className="box-author"><img src="assets/imgs/page/homepage2/author2.png" alt="Genz" />
                                                                        <div className="author-info">
                                                                            <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                        <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage2/news7.png" alt="Genz" /></Link></div>
                                                        <div className="card-info">
                                                            <div className="row">
                                                                <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                                <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div><Link href="/single-sidebar">
                                                                <h5 className="color-gray-50 mt-20">Your Light Is About To Stop Being Relevant</h5></Link>
                                                            <div className="row align-items-center mt-25">
                                                                <div className="col-7">
                                                                    <div className="box-author"><img src="assets/imgs/page/homepage2/author.png" alt="Genz" />
                                                                        <div className="author-info">
                                                                            <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                        <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage2/news8.png" alt="Genz" /></Link></div>
                                                        <div className="card-info">
                                                            <div className="row">
                                                                <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                                <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div><Link href="/single-sidebar">
                                                                <h5 className="color-gray-50 mt-20">Your Light Is About To Stop Being Relevant</h5></Link>
                                                            <div className="row align-items-center mt-25">
                                                                <div className="col-7">
                                                                    <div className="box-author"><img src="assets/imgs/page/homepage2/author2.png" alt="Genz" />
                                                                        <div className="author-info">
                                                                            <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                        <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage2/news9.png" alt="Genz" /></Link></div>
                                                        <div className="card-info">
                                                            <div className="row">
                                                                <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                                <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div><Link href="/single-sidebar">
                                                                <h5 className="color-gray-50 mt-20">Your Light Is About To Stop Being Relevant</h5></Link>
                                                            <div className="row align-items-center mt-25">
                                                                <div className="col-7">
                                                                    <div className="box-author"><img src="assets/imgs/page/homepage2/author.png" alt="Genz" />
                                                                        <div className="author-info">
                                                                            <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                        <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage2/news10.png" alt="Genz" /></Link></div>
                                                        <div className="card-info">
                                                            <div className="row">
                                                                <div className="col-7"><Link className="color-gray-700 text-sm" href="/blog-archive"># Travel</Link></div>
                                                                <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">3 mins read</span></div>
                                                            </div><Link href="/single-sidebar">
                                                                <h5 className="color-gray-50 mt-20">Your Light Is About To Stop Being Relevant</h5></Link>
                                                            <div className="row align-items-center mt-25">
                                                                <div className="col-7">
                                                                    <div className="box-author"><img src="assets/imgs/page/homepage2/author2.png" alt="Genz" />
                                                                        <div className="author-info">
                                                                            <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                                    <div className="col-lg-4">
                                        <div className="sidebar">
                                            <div className="box-sidebar bg-gray-850 border-gray-800">
                                                <div className="head-sidebar wow animate__animated animate__fadeIn">
                                                    <h5 className="line-bottom">Popular Posts</h5>
                                                </div>
                                                <div className="content-sidebar">
                                                    <div className="list-posts">
                                                        <div className="item-post wow animate__animated animate__fadeIn">
                                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post.jpg" alt="Genz" /></Link></div>
                                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                <h6 className="color-white">Creating is a privilege but it’s also a gift</h6></Link><span className="color-gray-700">15 mins read</span>
                                                                <ul className="d-inline-block">
                                                                    <li className="color-gray-700">15 April 2022</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="item-post wow animate__animated animate__fadeIn">
                                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post2.jpg" alt="Genz" /></Link></div>
                                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                <h6 className="color-white">Being unique is better than being perfect</h6></Link><span className="color-gray-700">15 mins read</span>
                                                                <ul className="d-inline-block">
                                                                    <li className="color-gray-700">15 April 2022</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="item-post wow animate__animated animate__fadeIn">
                                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post3.jpg" alt="Genz" /></Link></div>
                                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                <h6 className="color-white">Every day, in every city and town across the country</h6></Link><span className="color-gray-700">15 mins read</span>
                                                                <ul className="d-inline-block">
                                                                    <li className="color-gray-700">15 April 2022</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="item-post wow animate__animated animate__fadeIn">
                                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post4.jpg" alt="Genz" /></Link></div>
                                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                <h6 className="color-white">Your voice, your mind, your story, your vision</h6></Link><span className="color-gray-700">15 mins read</span>
                                                                <ul className="d-inline-block">
                                                                    <li className="color-gray-700">15 April 2022</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="item-post wow animate__animated animate__fadeIn">
                                                            <div className="image-post"><Link href="/single-sidebar"><img src="assets/imgs/page/homepage1/img-post4.jpg" alt="Genz" /></Link></div>
                                                            <div className="info-post border-gray-800"><Link href="/single-sidebar">
                                                                <h6 className="color-white">Your voice, your mind, your story, your vision</h6></Link><span className="color-gray-700">15 mins read</span>
                                                                <ul className="d-inline-block">
                                                                    <li className="color-gray-700">15 April 2022</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-sidebar bg-gray-850 border-gray-800">
                                                <div className="head-sidebar wow animate__animated animate__fadeIn">
                                                    <h5 className="line-bottom">Last Comment</h5>
                                                </div>
                                                <div className="content-sidebar">
                                                    <div className="list-comments">
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner “</p>
                                                            <div className="box-author-small"><img src="assets/imgs/page/homepage1/author6.png" alt="Genz" />
                                                                <div className="author-info"><span className="d-block color-gray-700 text-sm">Jane Cooper</span><span className="color-gray-700 text-xs">15 April 2022</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner “</p>
                                                            <div className="box-author-small"><img src="assets/imgs/page/homepage1/author7.png" alt="Genz" />
                                                                <div className="author-info"><span className="d-block color-gray-700 text-sm">Katen Doe</span><span className="color-gray-700 text-xs">15 April 2022</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                                            <p className="color-gray-500 mb-20">“ Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner “</p>
                                                            <div className="box-author-small"><img src="assets/imgs/page/homepage1/author8.png" alt="Genz" />
                                                                <div className="author-info"><span className="d-block color-gray-700 text-sm">Barbara Cartland</span><span className="color-gray-700 text-xs">15 April 2022</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-sidebar bg-gray-850 border-gray-800">
                                                <div className="head-sidebar"><Link href="/index"><img src="assets/imgs/template/logo.svg" alt="Genz" /></Link>
                                                    <h6 className="color-gray-700">Follow us on instagram</h6>
                                                </div>
                                                <div className="content-sidebar">
                                                    <div className="row mt-30 mb-10">
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery.png" alt="Genz" /></Link></div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery2.png" alt="Genz" /></Link></div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery3.png" alt="Genz" /></Link></div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery4.png" alt="Genz" /></Link></div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery5.png" alt="Genz" /></Link></div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery6.png" alt="Genz" /></Link></div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery7.png" alt="Genz" /></Link></div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery8.png" alt="Genz" /></Link></div>
                                                        <div className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn"><Link href="#"><img className="bdrd-8" src="assets/imgs/page/homepage1/gallery9.png" alt="Genz" /></Link></div>
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

            </Layout>



        </>
    )
}