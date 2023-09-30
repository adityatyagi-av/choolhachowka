import Link from 'next/link'
import React from 'react'

const Pricing = () => {
  return (
    
      <div className="bg-white  mx-auto max-w-screen-xl">
    <div className="container px-6 py-8 mx-auto">
        <div className="xl:items-center xl:-mx-8 xl:flex">
            <div className="flex flex-col items-center xl:items-start xl:mx-8">
                <h1 className="text-2xl font-medium text-gray-800 capitalize lg:text-3xl">Our Service Pricing</h1>

                <div className="mt-4">
                    <span className="inline-block w-40 h-1 bg-yellow-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-yellow-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-yellow-500 rounded-full"></span>
                </div>

                <p className="mt-4 font-medium text-gray-500 ">
                    You can get services based on your chosed plan
                </p>

                <Link href="/register" className="flex items-center mt-4 -mx-1 text-sm text-gray-700 capitalize  hover:underline hover:text-yellow-600 ">
                    <span className="mx-1">Register now to get extra discount</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
            </div>

            <div className="flex-1 xl:mx-8">
                <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                    <div className="max-w-sm mx-auto border rounded-lg md:mx-4 ">
                        <div className="p-6">
                            <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl ">Mess Plan</h1>

                            <p className="mt-4 text-gray-500 ">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl ">₹3800 <span className="text-base font-medium">/Month</span></h2>

                            <p className="mt-1 text-gray-500 ">
                                
                            </p>

                            <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-600 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 focus:ring focus:ring-yellow-300 focus:ring-opacity-80">
                                Get Now
                            </button>
                        </div>

                        <hr className="border-gray-200 "/>

                        <div className="p-6">
                            <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl ">Mess Plan Services:</h1>

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 ">Lorem, ipsum.</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 ">Lorem, ipsum.</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 ">Lorem, ipsum.</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 ">Lorem, ipsum.</span>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 ">Lorem, ipsum.</span>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 ">Lorem, ipsum.</span>
                                </div>

                                
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm mx-auto border rounded-lg md:mx-4">
                        <div className="p-6">
                            <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl ">Tiffin Plan</h1>

                            <p className="mt-4 text-gray-500">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl ">₹4000 <span className="text-base font-medium">/month</span></h2>

                            <p className="mt-1 text-gray-500 ">
                                
                            </p>

                            <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-600 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 focus:ring focus:ring-yellow-300 focus:ring-opacity-80">
                                Start Now
                            </button>
                        </div>

                        <hr className="border-gray-200 "/>

                        <div className="p-6">
                            <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl ">Tiffin Plan Services:</h1>

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 ">Lorem, ipsum.</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 ">Lorem, ipsum.</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 ">Lorem, ipsum.</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 ">Lorem, ipsum.</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 ">Lorem, ipsum.</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 ">Lorem, ipsum.</span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Pricing
