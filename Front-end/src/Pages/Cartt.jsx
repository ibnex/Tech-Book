import React, { useState } from 'react';


function Cartt() {
    const [ProductName ,setProductName]=useState("Math Book")
    const [category ,setCategory]=useState("Study")
    const [price ,setPrice]=useState(1500)
    const [dileveryCharge ,setDileveryCharge]=useState(25)
    // const [Total, setTotal]=useState("")
    
    const [plus ,setPlus]=useState(1)
    const onplus=()=>{
        setPlus(plus +1);

    }

    const onminus=()=>{
        if(plus >1){
            setPlus(plus -1)
        }       
    }
  return (
    <>
        <section className="py-24 relative">
        <div className="w-[90vw] max-w-7xl px-4 md:px-5 lg-6 mx-auto">

            <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart
            </h2>

            
            <div className="hidden lg:grid grid-cols-2 py-6">
                <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
                <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                    <span className="w-[90vw] max-w-[200px] text-center">Delivery Charge</span>
                    <span className="w-[90vw] max-w-[260px] text-center">Quantity</span>
                    <span className="w-[90vw] max-w-[200px] text-center">Total</span>
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                <div
                    className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                    <div className="img-box"><img src="https://plus.unsplash.com/premium_photo-1677187301535-b46cec7b2cc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWF0aHMlMjBib29rc3xlbnwwfHwwfHx8MA%3D%3D" alt="perfume bottle image" className="xl:w-[140px] rounded-xl object-cover"/></div>
                    <div className="pro-data w-full max-w-sm ">
                        <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{ProductName}
                        </h5>
                        <p
                            className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                            {category}</p>
                        <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">{price}</h6>
                    </div>
                </div>
                {/* .................... */}
                <div
                    className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                    <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                        {dileveryCharge} <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">Delivery
                            Charge</span></h6>
                    <div className="flex items-center w-full mx-auto  justify-center">
                        <button onClick={onminus}
                            className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                                <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                    strokeLinecap="round" />
                                <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                    strokeLinecap="round" />
                            </svg>
                          
                        </button>
                        <input type="text"
                            className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                            placeholder={plus}/>
                        <button onClick={onplus}
                            className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6"
                                    strokeLinecap="round" />
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                    strokeLinecap="round" />
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                    strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                    <h6
                        className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                        {price * plus}</h6>
                </div>
              
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                <div className="flex items-center justify-between w-full mb-6">
                    <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                    <h6 className="font-semibold text-xl leading-8 text-gray-900">{price *plus}</h6>
                </div>
                <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                    <p className="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
                    <h6 className="font-semibold text-xl leading-8 text-gray-900">{dileveryCharge}</h6>
                </div>
                <div className="flex items-center justify-between w-full py-6">
                    <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                    <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">{price * plus+ dileveryCharge}</h6>
                </div>
            </div>
            <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                <button
                    className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
                    <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">Add Coupon Code</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998" stroke="#4F46E5" strokeWidth="1.6"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button
                    className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">Continue
                    to Payment
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                        fill="none">
                        <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" strokeWidth="1.6"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
                                            
    </>
  );
}

export default Cartt;
