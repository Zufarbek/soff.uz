import Link from "next/link";
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import TrendingTopic from "../components/slider/TrendingTopic";

export default function Main() {
    return (
        <>
            <Head>
                <title>Soff - Home 1</title>
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
                                                    <div className="card-image"><Link href=""><img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="Genz" /></Link></div>
                                                    <div className="card-info"><Link className="color-gray-500" href="">React.js</Link></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp" data-wow-delay="0s">
                                                    <div className="card-image"><Link href=""><img src="https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png" alt="Genz" /></Link></div>
                                                    <div className="card-info"><Link className="color-gray-500" href="">Next.js</Link></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                                    <div className="card-image"><Link href=""><img src="https://develop365.gitlab.io/nuxtjs-2.8.X-doc/en/logos/nuxt-icon-white.png" alt="Genz" /></Link></div>
                                                    <div className="card-info"><Link className="color-gray-500" href="">Vue/Nuxt.js</Link></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                                                <div className="card-image"><Link href=""><img src="https://w7.pngwing.com/pngs/702/915/png-transparent-ruby-on-rails-round-logo-tech-companies-thumbnail.png" alt="Genz" /></Link></div>
                                                    <div className="card-info"><Link className="color-gray-500" href="">Rails</Link></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                                                    <div className="card-image"><Link href=""><img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="Genz" /></Link></div>
                                                    <div className="card-info"><Link className="color-gray-500" href="">Node.js</Link></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                                                    <div className="card-image"><Link href=""><img src="https://pbs.twimg.com/profile_images/1110148780991623201/vlqCsAVP_400x400.png" alt="Genz" /></Link></div>
                                                    <div className="card-info"><Link className="color-gray-500" href="">Nest.js</Link></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp" data-wow-delay="0.0s">
                                                    <div className="card-image"><Link href=""><img src="https://e7.pngegg.com/pngimages/969/723/png-clipart-functional-programming-in-python-computer-programming-programming-language-python-programming-practice-workshop-program-logo-text-logo-thumbnail.png" alt="Genz" /></Link></div>
                                                    <div className="card-info"><Link className="color-gray-500" href="">Python</Link></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                                    <div className="card-image"><Link href=""><img src="https://seeklogo.com/images/A/azure-sql-database-logo-D7A32C9CD9-seeklogo.com.png" alt="Genz" /></Link></div>
                                                    <div className="card-info"><Link className="color-gray-500" href="">SQL</Link></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                                                    <div className="card-image"><Link href=""><img src="https://www.openxcell.com/wp-content/uploads/2021/11/Group-56816.png" alt="Genz" /></Link></div>
                                                    <div className="card-info"><Link className="color-gray-500" href="">NoSQL</Link></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="text-center mt-70">
                                    <h2 className="color-linear mb-10">Trending Topics</h2>
                                    <p className="text-lg color-gray-500">Discover the most outstanding articles in all topics</p>
                                </div> */}
                                <div className="mb-70 mt-70">
                                    <div className="box-topics box-topics-2 border-gray-800 bg-gray-850">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="box-swiper">
                                                    <TrendingTopic />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="color-linear mb-10">Portfolio</h2>
                                            <p className="text-lg color-gray-500">Our team of experienced web developers and designers work closely with our clients to ensure that their website not only looks great, but also functions seamlessly</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-70">
                                    <h2 className="color-linear mb-10">Our Services</h2>
                                    <p className="text-lg color-gray-500 mb-10">We follow cutting-edge technology and take a modern and creative approach to solving problems.</p>
                                </div>
                                <div className="box-features bg-gray-850 border-gray-800">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0s"><span className="item-icon bg-gray-950 icon-motion" />
                                            <h5 className="color-white mb-15">Frontend <br /> Development</h5>
                                            <p className="text-base color-gray-700">We can build a product from the ground up, or support an existing solution to understand and work with our clients' business demands.</p>
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0.1s"><span className="item-icon bg-gray-950 icon-ui" />
                                            <h5 className="color-white mb-15">Backend<br />Web Development</h5>
                                            <p className="text-base color-gray-700">Our specialty is to develop gold-standard solutions, alongside reliable backend and qualitative frontend basement</p>
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0.2s"><span className="item-icon bg-gray-950 icon-branding" />
                                            <h5 className="color-white mb-15">UX / UI <br />Design</h5>
                                            <p className="text-base color-gray-700">Design your product to sell, attract, and to be easy-to-use </p>
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-50 wow animate__animated animate__fadeIn" data-wow-delay="0s"><span className="item-icon bg-gray-950 icon-product" />
                                            <h5 className="color-white mb-15">AWS <br />Serverless</h5>
                                            <p className="text-base color-gray-700">Our qualified specialists can create a solid solution based on your requests</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="row mt-70">
                                    <div className="col-lg-6 wow animate__animated animate__fadeIn" data-wow-delay={0}>
                                        <div className="card-blog-1 hover-up">
                                            <div className="card-image mb-20"><Link className="post-type" href="/blog-archive" /><Link href="/single-sidebar"><img src="assets/imgs/page/portfolio/soff - japan - 1.png" alt="Genz" /></Link></div>
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>



        </>
    )
}