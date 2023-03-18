import Link from "next/link"
import DefaultHeader from "../Layout/DefaultHeader"
import ResponsiveSection from "../Layout/Responsive"
import LoginInput from "./Input"
import { FcGoogle } from "react-icons/fc";


interface LoginProps {
    
}

const LoginPage:React.FC<LoginProps> = () => {
    return (
        <>
            <DefaultHeader/>
            <ResponsiveSection addClass="login flex-col justify-center items-center mt-8">
                <div className="login-header flex flex-col">
                    <h1 className="text-primary-font mb-4">Login</h1>
                    <p className="m-0 text-third-font mb-6">Welcome back! Login your account</p>
                </div>
                <form className="flex flex-col justify-center items-center gap-4" action="">
                    <LoginInput label="" type="email" placeholder="Enter your e-mail"/>
                    <LoginInput label="" type="password" placeholder="Enter your password"/>
                    
                    
                    <div className="flex flex-row justify-between items-center mt-4 gap-4">
                        <div className="text-third-font">
                            <input type="checkbox" name="remember-me" className="w-4 h-4 accent-second-warning text-second-font bg-third-bg cursor-pointer mr-2"/>
                            <label htmlFor="remember-me">Remember Me</label>
                        </div>
                        <Link href="/" className="m-0 text-third-font hover:text-second-font">Forgot Password?</Link>
                    </div>
                    
                    <button className="text-dark bg-primary-warning hover:bg-second-warning focus:ring-2 focus:ring-third-bg font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 mr-2 focus:outline-none flex flex-row justify-center items-center gap-2 w-full mt-4">Login</button>

                    <p className="m-0 text-third-font">Or</p>

                    <Link href="" className="text-primary-font bg-second-bg hover:bg-third-bg focus:ring-2 focus:ring-third-bg font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 mr-2 focus:outline-none flex flex-row justify-center items-center gap-2 w-full">
                        <FcGoogle/>
                        Login with Google
                    </Link>
                    
                    <div className="flex flex-row justify-between items-center gap-4">
                        <p className="m-0 text-third-font">Don't have an account?</p>
                        <Link className="m-0 text-primary-warning hover:text-second-warning" href="/signup">Sign Up Now</Link>
                    </div>
                    
                </form>
                <div className="login-footer"></div>
            </ResponsiveSection>
        </>
       
    )
}

export default LoginPage