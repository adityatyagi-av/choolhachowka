import React from 'react'

const Moreaboutus = () => {
  return (
    <div className="flex flex-col mt-20 mb-10 mx-16 gap-8 sm:flex sm:flex-col lg:flex lg:flex-row mx-auto max-w-screen-xl">
      <div className=""><h1 className="text-gray-400 font-mono">ABOUT US</h1>
      <h1 className="font-bold text-2xl">More <span className="text-yellow-500">About Us</span></h1><br />
      <p className='font-sans font-medium text-zinc-500'><span className=" text-base text-slate-700">Welcome to Choolha Chowka – where every bite is an adventure! 🍽️<br />
Our Journey:
Since [Year], we've been on a mission to redefine food. <br />Our story started with one idea: create exceptional, <br /> handcrafted dishes that bring people closer together.</span> <br /> <br />
<h4 className='text-gray-700'>
What Makes Us Special: 
</h4>

<span className=' text-slate-600'>Quality First</span>: Top-notch ingredients, sourced locally whenever possible for freshness. <br />
<span className=' text-slate-600'>Culinary Artistry</span>: Talented chefs creating visually stunning and delicious dishes. <br />
 <span className=' text-slate-600'>Diverse Flavors</span>: A menu that's a global gastronomic tour, catering to all tastes. <br />
<span className=' text-slate-600'>Exceptional Service</span>: Friendly staff ensuring your experience is memorable.
</p>
      </div>
      <img className="h-96" src="/download.jpeg" alt="Head"/>
    </div>
  )
}

export default Moreaboutus
