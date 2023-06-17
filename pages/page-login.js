import Link from "next/link";
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import React, { useState } from "react";
import { toast } from "react-toastify";


import Auth from "../repository/auth";
import { useRouter } from 'next/router';


export default function Home() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const [Password, setPassword] = useState(null)
    const [Email, setEmail] = useState(null)
    const [myData, setmyData] = useState()

    const router = useRouter();

    const Login = async () => {
        const UserLogin = await Auth.Login({ email: Email, password: Password });
        if (UserLogin.success == true) {
            toast.success("Mail has been sent");
            // toast.error("Error");
            router.push('/');
        }
        else {
            toast.error("Error");
        }
        console.log(UserLogin);
    };

    function Loginbuttun() {
        Login()
    }


    return (
        <>
            <Head>
                <title>
                    soff - Login
                </title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <div className="text-center mt-50 pb-50">
                                    <h2 className="color-linear d-inline-block">Welcome back !</h2>
                                </div>
                                <div className="box-form-login pb-50">
                                    <div className="form-login bg-gray-850 border-gray-800 text-start">
                                       
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800" type="text" onInput={(val) => { setEmail(val.target.value) }} placeholder="Email" />
                                            </div>
                                            <div className="form-group position-relative">
                                                <input className="form-control bg-gray-850 border-gray-800 password"
                                                    type={passwordShown ? "text" : "password"}
                                                    placeholder="Password"
                                                    onInput={(val) => { setPassword(val.target.value) }}
                                                />
                                                <span className="viewpass" onClick={togglePasswordVisiblity} />
                                            </div>
                                            <div className="form-group"><Link className="color-white link" href="#">Forgot password?</Link></div>
                                            <div className="form-group">
                                            <button onClick={Loginbuttun} className="btn btn-linear color-gray-850 hover-up" >Log me in</button>
                                            </div>
                                            <div className="form-group mb-0"><span>Don’t have an account?</span><Link className="color-linear" href="/page-signup"> Sign Up</Link></div>
                                        
                                    </div>
                                    <div className="box-line"><span className="bg-gray-900">Or, sign in with your email</span></div>
                                    <div className="box-login-gmail bg-gray-850 border-gray-800 hover-up"><Link className="btn btn-login-gmail color-gray-500" href="#">Sign in with Google</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}