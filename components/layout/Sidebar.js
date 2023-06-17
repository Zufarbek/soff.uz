import Link from "next/link";
import { useState , useEffect } from "react";

const Sidebar = ({ openClass }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });
    const [myData, setmyData] = useState(null)

    useEffect(() => {
        setmyData(localStorage.getItem('Token'))
    }, []);

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar bg-gray-900 ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="mobile-logo border-gray-800">
                            <Link className="d-flex" href="/">
                                <img width='150px' className="logo-night" alt="GenZ" src="assets/imgs/page/logo/Soff Study white logo.png" />
                                <img width='150px' className="d-none logo-day" alt="GenZ" src="assets/imgs/page/logo/Soff Study dark logo.png" />
                            </Link>
                        </div>
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav className="mt-15">
                                    <ul className="mobile-menu font-heading">
                                        <li className={isActive.key == 1 ? "has-children active" : "has-children"} onClick={() => handleToggle(1)}>
                                            <Link href="/">Home</Link>
                                        </li>
                                          <li className={isActive.key == 5 ? "has-children active" : "has-children"} onClick={() => handleToggle(5)}>
                                            <Link className="color-gray-500" href="/page-about">About</Link>
                                        </li>
                                        <li className={isActive.key == 5 ? "has-children active" : "has-children"} onClick={() => handleToggle(5)}>
                                            <Link className="color-gray-500" href="/portfolio">Portfolio</Link>
                                        </li>
                                       
                                        <li><Link href="/page-contact">Contact</Link></li>
                                        <li><Link href="/Pos-Fits">PosFits</Link></li>
                                        <li><Link href="/Faqs">Faqs</Link></li>
                               

                                            <Link className="col-7 btn btn-linear hover-up hover-shadow " style={{ width: "300px" }} href="/page-contact#placing an order">placing an order</Link>
                                            
                                            {myData ? (
                                                <img className='col-3' style={{ width: "60px", height: "50px", borderRadius: "50%", marginLeft:"40%" , marginTop:"10px"}} src='https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png' alt='userlogo' />
                                            ) : (
                                                <Link className="col-4 btn btn-linear hover-up hover-shadow " href="/page-login">Log in</Link>
                                            )}

                                       
                                    </ul>
                                </nav>
                            </div>
                            
                            <div className="site-copyright color-gray-400 mt-30">Copyright 2022 © Genz - Personal Blog
                                Template.<br />Designed by<Link href="http://alithemes.com" target="_blank">&nbsp; AliThemes</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Sidebar;