import { useState } from "react";
import Link from "next/link";
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { AiOutlineClose } from "react-icons/ai";
import ContactAPI from '../repository/Contact'
import { toast } from "react-toastify";


export default function Home() {

    const [Open, setOpen] = useState("none")
    const [Data , setData] = useState({})

    const [Name, setName] = useState(null)
    const [email, setemail] = useState(null)
    const [phone, setphone] = useState(null)
    const [subject, setsubject] = useState(null)
    const [message, setmessage] = useState(null)


    const portfolioAll = async () => {
        const Contact = await ContactAPI.postContact({
            name: Name ,
            email: email ,
            phone: phone ,
            subject: subject , 
            message: message
        });
        if (Contact.success == "true") {
            toast.success("Mail has been sent");
        }
        else{
            toast.error("Error");
        }
        // console.log(UserLogin);
    };

    
    function Send() {
        portfolioAll()
    }


    function branch1() {
        setOpen("inline")
        setData({
            url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5785.662500247264!2d69.21635752349265!3d41.28773452266332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2f5a84b25f%3A0xf934f004dd798141!2sSoff%20Study%20zamonaviy%20kasblar%20markazi!5e0!3m2!1sru!2s!4v1686137314304!5m2!1sru!2s",
            number:"(90) 002-67-89",
            email:"soffstudy81@gmail.com",
            telegram:"soff_admin"
        })
    }

    function branch2() {
        setOpen("inline")
        setData({
            url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.632755821436!2d69.28403433245765!3d41.33859847258796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8be757c05039%3A0xe0582ab52c37e37a!2sSoff%20Study%20Bodomzor%20filiali!5e0!3m2!1sru!2s!4v1686138016438!5m2!1sru!2s",
            number:"(90) 968-61-01",
            email:"yusoff.me@gmail.com",
            telegram:"Yusoff_me"
        })

    }
    function Close() {
        setOpen("none")
    }


    return (
        <>
            <Head>
                <title>
                    soff - Contact
                </title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <div className="text-center mt-70">
                                    <h1 id="placing an order" className="color-linear d-inline-block mb-30">Contact Us</h1>
                                    <p className="text-xl color-gray-500">We are AliThemes , a creative and dedicated group of individuals who love web development<br className="d-none d-lg-block" />almost as much as we love our customers. We are passionate team with the mission for<br className="d-none d-lg-block" />achieving the perfection in web design. All designs are made by love with pixel perfect design<br className="d-none d-lg-block" />and excellent coding quality. Speed, security and SEO friendly alway in our mind.</p>
                                </div>
                                {/* <div className="text-center mt-30">
                                    <div className="d-inline-block location text-start">Soff Study Novza filiali<br />Soff Study Bodomzor filiali</div>
                                    <div className="d-inline-block support text-start">(90) 002-67-89<br />(90) 968-61-01</div>
                                    <div className="d-inline-block text-start"><MdOutlineAlternateEmail  style={{fontSize:"40px" , marginTop:"-20px" , marginLeft:"-15px" , color:`rgba(11,209,209,1)`}} /></div>
                                    <div className="d-inline-block text-start"> contact@genz.com<br />yusoff.me@gmail.com</div>
                                    <div className="d-inline-block plane text-start ml-20">soff_admin<br />Yusoff_me</div>
                                </div> */}
                                <div className="text-center mt-30" style={{height:"50px"}}>
                                    <div style={{ cursor: "pointer" }} onClick={branch1} className="d-inline-block location text-start fs-4">Soff Study Novza filiali</div>
                                    <div style={{ cursor: "pointer" }} onClick={branch2} className="d-inline-block location text-start fs-4">Soff Study Bodomzor filiali</div>
                                </div>
                                <div className="box-map w-100" style={{ display: `${Open}`, overflow: "hidden", backgroundColor: "#0F172A", position: "absolute", marginTop: "-300px", width: "900px", marginLeft: "-205px" }}>
                                    <AiOutlineClose onClick={Close} style={{ position: "absolute", top: "0", right: "30px", fontSize: "50px" }} />
                                    <iframe className="google-map w-50 m-auto" src={Data.url} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                    {/* <div style={{ position: "absolute", top: "0", right: "-10px" }}> */}
                                        <div  style={{ position: "absolute", top: "70px", right: "468px" }} className="d-inline-block support fs-3"><Link className="color-gray-500" href={`tel:${Data.number}`}>{Data.number}</Link></div>
                                        <div  style={{ position: "absolute", top: "162px", right: "690px" }} className="d-inline-block "><MdOutlineAlternateEmail style={{ fontSize: "45px", marginTop: "-15px", marginLeft: "-10px", color: `rgba(11,209,209,1)` }} /></div>
                                        <div  style={{ position: "absolute", top: "160px", right: "370px" }} className="d-inline-block fs-3"><Link className="color-gray-500" href={`mailto:${Data.email}`}>{Data.email}</Link></div>
                                        <div  style={{ position: "absolute", top: "220px", right: "507px" }} className="d-inline-block plane fs-3"><Link className="color-gray-500" href={`tg:${Data.telegram}`}>{Data.telegram}</Link></div>
                                    {/* </div> */}
                                </div>
                                <div  className="form-contact">
                                    <div className="text-center">
                                        <h3 className="color-linear d-inline-block mb-10">Drop Us a Line</h3>
                                        <p className="text-xs color-gray-500" >Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    <div  className="row mt-50" >
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Your name *" onInput={(val) => {setName(val.target.value)}}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Email *" onInput={(val) => { setemail(val.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="number" placeholder="Phone number *" onInput={(val) => { setphone(val.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Subject *" onInput={(val) => { setsubject(val.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea className="form-control bg-gray-850 border-gray-800 color-gray-500" rows={5} placeholder="Message *" defaultValue={""} onInput={(val) => { setmessage(val.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div onClick={Send} className="text-center mb-50 btn btn-linear btn-load-more btn-radius-8 hover-up">
                                                Send Message
                                                <i className="fi-rr-arrow-small-right" /></div>
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