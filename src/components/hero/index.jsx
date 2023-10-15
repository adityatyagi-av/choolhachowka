import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
      <header className="bg-white  max-w-screen-xl mx-auto">
    <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">Get most prestigious food<br/> only on <span className="text-yellow-500 ">Choolha Chowka</span></h1>
                    
                    <p className="mt-3 text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                    
                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-yellow-500 rounded-sm lg:w-auto hover:bg-yellow-600 focus:outline-none focus:bg-yellow-500">Order Now</button>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
               
               
                
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    
    
        <Image width={300} height={300} className="h-auto max-w-full rounded-sm" src="/mainimages/mess2.jpg" alt=""/>
    
        <Image width={300} height={300} className="h-auto max-w-full rounded-sm" src="/mainimages/mess3.jpg" alt=""/>
    
        <Image width={300} height={300} className="h-auto max-w-full rounded-sm" src="/mainimages/mess.jpg" alt=""/>
    
        <Image width={300} height={300} className="h-auto max-w-full rounded-sm" src="/mainimages/mess2.jpg" alt=""/>
    
        <Image width={300} height={300} className="h-auto max-w-full rounded-sm" src="/mainimages/mess3.jpg" alt=""/>
    
        <Image width={300} height={300} className="h-auto max-w-full rounded-sm opacity-50" src="/mainimages/mess.jpg" alt=""/>
    
        <Image width={300} height={300} className="h-auto max-w-full rounded-sm" src="/mainimages/mess.jpg" alt=""/>
    
        <Image width={300} height={300} className="h-auto max-w-full rounded-sm" src="/mainimages/mess2.jpg" alt=""/>
    
        <Image width={300} height={300} className="h-auto max-w-full hidden md:block rounded-sm" src="/mainimages/mess3.jpg" alt=""/>
    
    
</div>


            </div>
        </div>
    </div>
</header>
   
  )
}

export default Hero
