import Image from "next/image"
import Link from "next/link"
import 'animate.css';

const Form = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[40px]">
            <Image
                className="animate__animated animate__zoomInDown"
                src='/logo.png'
                width={40}
                height={40}
                alt="logo"
            />
            <form className="shadow-sm animate__animated animate__zoomIn w-full sm:w-[500px] p-[40px] bg-white rounded-[6.0001px] ">
                <div className="flex flex-col gap-[6px] text-center">
                    <h3 className="text-black font-semibold text-[24px]">Welcome Back</h3>
                    <p className="text-[14px] font-light text-gray-100">Enter your credentials to access your account.</p>
                </div>

                <div className="flex flex-col gap-[26px] text-center mt-[58px]">

                        <div className="w-full relative">
                            <svg className="absolute top-1/2 left-[15px] -translate-y-1/2" fill="#2662FF" height="20" viewBox="-.5 .5 42 42" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m40.5 31.5v-18s-18.2 12.7-19.97 13.359c-1.74-.629-20.03-13.359-20.03-13.359v18c0 2.5.53 3 3 3h34c2.529 0 3-.439 3-3zm-.029-21.529c0-1.821-.531-2.471-2.971-2.471h-34c-2.51 0-3 .78-3 2.6l.03.28s18.069 12.44 20 13.12c2.04-.79 19.97-13.4 19.97-13.4z"/></svg>
                            <input className="pr-[10px] py-[12px] pl-[50px] border border-gray-200 w-full placeholder-black text-[14px] font-normal rounded-[6px] outline-none" placeholder="Enter your email" />
                        </div>

                        <div className="w-full relative">
                            <svg className="absolute top-1/2 left-[15px] -translate-y-1/2" fill="#2662FF" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"/></svg>
                            <input className="pr-[10px] py-[12px] pl-[50px] border border-gray-200 w-full placeholder-black text-[14px] font-normal rounded-[6px] outline-none" placeholder="Enter your password" type="password" />
                        </div>


                        <button className="opacity-90 shadow-sm text-[14px] bg-primary-100 text-white p-[10px] rounded-[6px]">Sign In</button>
                </div>
            </form>
            <p className="animate__animated animate__zoomInUp text-center font-medium text-gray text-[14px]">Forget your password? <Link href="#" className="text-primary-100">Reset Password</Link> </p>
    </div>
  )
}

export default Form