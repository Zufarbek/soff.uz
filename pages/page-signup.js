import React, { useState } from "react";
import Link from "next/link";
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import { toast } from "react-toastify";


import Auth from "../repository/auth";

import { useRouter } from 'next/router';


export default function Home() {
    const [passwordShown, setPasswordShown] = useState(false);

    const [FullName, setFullName] = useState(null)
    const [Password, setPassword] = useState(null)
    const [Email, setEmail] = useState(null)
    const router = useRouter();


    const Register = async (e) => {
        e.preventDefault()
        const UserLogin = await Auth.Register({ email: Email, password: Password, fullname: FullName });
        if (UserLogin.success == true) {
            router.push('/');
            toast.success("Mail has been sent");
        }
        else {
            toast.error("Error");
        }
        console.log(UserLogin);
    };


    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
        
    };
    return (
        <>
            <Head>
                <title>
                    soff - Signup
                </title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <div className="text-center mt-50 pb-50">
                                    <h2 className="color-linear d-inline-block">Ro`yhatan o`tshingizni soraymiz</h2>
                                </div>
                                <div className="box-form-login pb-50">
                                    <div className="form-login bg-gray-850 border-gray-800 text-start">
                                        <form onSubmit={Register}>
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800" type="text" placeholder="Full name" onInput={(val) => { setFullName(val.target.value) }} />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800" type="text" placeholder="Email" onInput={(val) => { setEmail(val.target.value) }} />
                                            </div>
                                            <div className="form-group position-relative">
                                                <input className="form-control bg-gray-850 border-gray-800 password" onInput={(val) => { setPassword(val.target.value) }}
                                                    type={passwordShown ? "text" : "password"} placeholder="Password" /><span className="viewpass" onClick={togglePasswordVisiblity} />
                                            </div>
                                            <div className="form-group position-relative">
                                                <input className="form-control bg-gray-850 border-gray-800 password" type={passwordShown ? "text" : "password"} placeholder="Confirm password" /><span className="viewpass" onClick={togglePasswordVisiblity} />
                                            </div>
                                            <div className="form-group">
                                                <button onClick={Register} className="btn btn-linear color-gray-850 hover-up" >Create an account</button>
                                            </div>
                                            <div className="form-group mb-0"><span>Already have an account?</span><Link className="color-linear" href="/page-login"> Sign In</Link></div>
                                        </form>
                                    </div>
                                    <div className="box-line"><span className="bg-gray-900">Or, sign up with your email</span></div>
                                    <div className="box-login-gmail bg-gray-850 border-gray-800 hover-up"><Link className="btn btn-login-gmail color-gray-500" href="#">Sign up with Google</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}