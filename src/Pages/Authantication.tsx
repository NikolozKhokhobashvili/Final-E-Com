import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

const Authantication = () => {

    const [userName, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onSubmit = (e: any) => {
        e.preventDefault();
        setIsLoading(true)

        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers:{
             'Accept' : 'application/json',
             'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username: userName,
                password: password
            })
        })
            .then(res => res.json())
            .then(json => {
                Cookies.set('token', json.token)
                setIsLoading(false)
                alert('შესვლა წარმატებით მოხდა')

            })
            .catch(err => {
                setIsLoading(false)
                alert('მომხმარებელი ვერ მოიძებნა')
            })
    }

    const NameChange = (e: any) => {
        setUserName(e.target.value)
    }

    const PasswordChange = (e: any) => {
        setPassword(e.target.value)
    }



    return (
        <Layout>
            <div className="w-full h-[160px] absolute top-[124px] bg-[#F6F6F6] px-[162px] flex gap-[8px] items-center">
                <div className=" h-[91px] w-[1116px] relative rounded-[4px] mt-[30px] flex gap-[4px] items-center">
                    <h3 className='absolute top-0 left-0 font-inter font-[700] text-[24px] leading-[29.05px] text-[#0E1422]'>Login</h3>
                    <span className="w-[80px] h-[25px] font-inter font-[500] text-[14px] leading-[24.5px] text-[#5C5F6A]">
                        Ecommerce
                    </span>
                    <div className="w-[24px] h-[24px] p-[6px] flex gap-[10px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="12"
                            viewBox="0 0 6 12"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.81168 5.46731C6.06095 5.74435 6.06303 6.19578 5.81633 6.47571L0.948585 12L0.0460425 10.9967L4.46723 5.97935L0 1.01366L0.89321 0L5.81168 5.46731Z"
                                fill="#71747E"
                            />
                        </svg>
                    </div>
                    <span className=" h-[25px] font-inter font-[500] text-[14px] leading-[24.5px] text-[#0E1422]">
                        Login
                    </span>
                </div>
            </div>
            <button className='w-[320px] h-[44px] absolute top-[412px] left-[560px] rounded-[4px] border py-[12px] px-[24px] flex gap-[8px] bg-[#FFFFFF] border-[#B6B7BC] text-center justify-center items-center'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.94813 7.99999C3.94813 7.48037 4.03438 6.98212 4.1885 6.51487L1.49225 4.45599C0.966754 5.52287 0.670753 6.72512 0.670753 7.99999C0.670753 9.27387 0.966503 10.4752 1.49113 11.5415L4.18588 9.47862C4.03325 9.01349 3.94813 8.51712 3.94813 7.99999Z" fill="#FBBC05" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68212 3.27275C9.811 3.27275 10.8306 3.67275 11.6317 4.32725L13.9622 2C12.5421 0.763625 10.7214 0 8.68212 0C5.51612 0 2.79512 1.8105 1.49225 4.456L4.18837 6.51487C4.80962 4.62912 6.5805 3.27275 8.68212 3.27275Z" fill="#EA4335" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68212 12.7272C6.58062 12.7272 4.80975 11.3709 4.1885 9.48512L1.49225 11.5436C2.79512 14.1895 5.51612 16 8.68212 16C10.6361 16 12.5017 15.3061 13.9019 14.0061L11.3426 12.0276C10.6205 12.4825 9.71112 12.7272 8.68212 12.7272Z" fill="#34A853" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3293 8C16.3293 7.52725 16.2564 7.01813 16.1471 6.5455H8.68213V9.63638H12.9791C12.7643 10.6903 12.1795 11.5004 11.3426 12.0276L13.9019 14.0061C15.3726 12.6411 16.3293 10.6076 16.3293 8Z" fill="#4285F4" />
                    </svg>
                </div>
                <span>
                    Continue with Google
                </span>
            </button>
            <div className='w-[320px] h-[24px] absolute top-[488px] left-[560px] flex gap-[16px]  items-center '>
                <div className='w-[135px] h-0 border border-[#E6E7E8]'>

                </div>
                <span>OR</span>
                <div className='w-[135px] h-0 border border-[#E6E7E8]'>

                </div>
            </div>

            <form onSubmit={onSubmit}>
                <div className='w-[320px] h-[69px] absolute top-[546px] left-[560px] '>
                    <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#474B57]'>Username</span>
                    <input onChange={NameChange} required type="text" className='w-[320px] h-[45px] rounded-[6px] border py-[10px] px-[15px] flex gap-[8px] border-[#E6E7E8]' />
                </div>
                <div className='w-[320px] h-[69px] absolute top-[630px] left-[560px] '>
                    <span className='font-inter font-[500] text-[14px] leading-[24.5px] text-[#474B57]'>Password</span>
                    <input onChange={PasswordChange} required type="password" className='w-[320px] h-[45px] rounded-[6px] border py-[10px] px-[15px] flex gap-[8px] border-[#E6E7E8]' />
                </div>
                <button className='w-[320px] h-[44px] absolute top-[763px] left-[561px] rounded-[4px] bg-[#0E1422] text-[white]' type='submit'>{isLoading ? 'Loading...' : 'Log In'}</button>
            </form>
            <Link to='/authantication/forgot-password'><span className='absolute top-[715px] left-[777px] font-inter font-[500] text-[12px] text-[#474B57]'>Forgot Password?</span></Link>
            <Link to='/authantication/sign-up'><span className='absolute top-[831px] left-[630px] font-inter font-[500] text-[12px] text-[#474B57]'>Don't have an account? Sign up</span></Link>

        </Layout>
    )
}

export default Authantication