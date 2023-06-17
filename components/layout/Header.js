import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';


import SwitchButton from '../elements/SwitchButton';

const Header = ({ handleOpen, handleRemove, openClass }) => {
    const [scroll, setScroll] = useState(0)
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    const [myData, setmyData] = useState(null)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
        setmyData(localStorage.getItem('Token'))
    })
    return (
        <>
            <header className={scroll ? "header sticky-bar bg-gray-900 stick" : "header sticky-bar bg-gray-900"}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-logo">
                            <Link className="d-flex" href="/">
                                <img className="logo-night" alt="GenZ" src="assets/imgs/page/logo/Soff Study white logo.png" />
                                <img className="d-none logo-day" alt="GenZ" src="assets/imgs/page/logo/Soff Study dark logo.png" />
                            </Link>
                        </div>
                        <div className="header-nav">
                            <nav className="nav-main-menu d-none d-xl-block">
                                <ul className="main-menu">
                                    {/* <li><Link className="color-gray-500" href="/">Main</Link></li> */}
                                    <li ><Link className="active" href="/">Home</Link>

                                    </li>
                                    <li ><Link className="color-gray-500" href="/page-about">About</Link>
                                        {/* <ul className="sub-menu">
                                            <li><Link className="color-gray-500" href="/page-portfolio">My Portfolio</Link></li>
                                            <li><Link className="color-gray-500" href="/page-portfolio-2">My Portfolio 2</Link></li>
                                            <li><Link className="color-gray-500" href="/portfolio-details">Portfolio Details</Link></li>
                                        </ul> */}
                                    </li>
                                    <li><Link className="color-gray-500" href="/portfolio">Portfolio</Link></li>


                                    {/* <li className="has-children"><Link className="color-gray-500" href="#">Category</Link>
                                        <ul className="sub-menu two-col">
                                            <li><Link className="color-gray-500" href="/blog-archive">Blog Category 1</Link></li>
                                            <li><Link className="color-gray-500" href="/blog-archive-2">Blog Category 2</Link></li>
                                            <li><Link className="color-gray-500" href="/blog-archive-3">Blog Category 3</Link></li>
                                            <li><Link className="color-gray-500" href="/blog-archive-4">Blog Category 4</Link></li>
                                            <li><Link className="color-gray-500" href="/blog-archive-5">Blog Category 5</Link></li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="has-children"><Link className="color-gray-500" href="#">Single Post</Link>
                                        <ul className="sub-menu two-col">
                                            <li><Link className="color-gray-500" href="/single-sidebar">Blog Single 1</Link></li>
                                            <li><Link className="color-gray-500" href="/single-no-sidebar">Blog Single 2</Link></li>
                                            <li><Link className="color-gray-500" href="/single-center">Blog Single 3</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-children"><Link className="color-gray-500" href="#">Pages</Link>
                                        <ul className="sub-menu two-col">
                                            <li><Link className="color-gray-500" href="/page-about">About</Link></li>
                                            <li><Link className="color-gray-500" href="/page-author">Author posts</Link></li>
                                            <li><Link className="color-gray-500" href="/page-contact">Contact</Link></li>
                                            <li><Link className="color-gray-500" href="/page-search">Search results</Link></li>
                                            <li><Link className="color-gray-500" href="/page-login">Login</Link></li>
                                            <li><Link className="color-gray-500" href="/page-signup">Signup</Link></li>
                                            <li><Link className="color-gray-500" href="/page-404">Page 404</Link></li>
                                        </ul>
                                    </li> */}
                                    <li><Link className="color-gray-500" href="/page-contact">Contact</Link></li>
                                    <li><Link className="color-gray-500" href="/Pos-Fits">PosFits</Link></li>
                                    <li><Link className="color-gray-500" href="/Faqs">Faqs</Link></li>

                                </ul>
                            </nav>
                            <div className={`burger-icon burger-icon-white ${openClass && "burger-close"}`}
                                onClick={() => { handleOpen(); handleRemove() }}>
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                        <div className="header-right text-end m-2">
                            <Link className="btn btn-search" href="#" onClick={toggleTrueFalse} />
                            <SwitchButton/>
                            <div className={isToggled ? "form-search p-20 d-block" : " form-search p-20 d-none"}>
                                <form action="#">
                                    <input className="form-control" type="text" placeholder="Search" />
                                    <input className="btn-search-2" />
                                </form>
                                <div className="popular-keywords text-start mt-20">
                                    <p className="mb-10 color-white">Popular tags:</p>
                                    <Link className="color-gray-600 mr-10 font-xs" href="#"># Travel,</Link>
                                    <Link className="color-gray-600 mr-10 font-xs" href="#"># Tech,</Link>
                                    <Link className="color-gray-600 mr-10 font-xs" href="#"># Movie</Link>
                                    <Link className="color-gray-600 mr-10 font-xs" href="#"># Lifestyle</Link>
                                    <Link className="color-gray-600 mr-10 font-xs" href="#"># Sport</Link>
                                </div>
                            </div>
                        </div>
                        <ToastContainer />
                        <div className='row loginOrder w-25'>
                                
                            <Link className="col-4 btn btn-linear d-none d-xl-inline-block hover-up hover-shadow " style={{width:"150px"}} href="/page-contact#placing an order">placing an order</Link>
                            <div className='col-1'></div>
                            {myData ? (
                                <img className='col-4 d-none d-xl-inline-block' style={{width:"70px" , height:"40px" , borderRadius:"50%"}} src='https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png' alt='userlogo'/>
                            ) : (
                                    <Link className="col-4 btn btn-linear d-none d-xl-inline-block hover-up hover-shadow " href="/page-login">Log in</Link>
                            )}

                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;