import React from 'react'
// import Image from "next/image.js";
const Footer = () => {
  return (
    <footer class="bg-gray-800 text-white py-6 flex flex-col lg:px-20">
  <div class="px-5 gap-x-20 flex-col lg:flex lg:flex-row lg:justify-evenly sm:grid sm:grid-cols-4 sm:gap-4 sm:mb-8 mb-4 sm:ml-3 lg:ml-0 ml-4 mt-2">
    <div class="lg:w-1/3 lg:pe-8 sm:col-start-1 mt-4 col-span-2">
      <h1 class="  text-2xl sm:text-4xl font-semibold text-yellow-600 mb-3 hover:text-yellow-400 transition duration-300"> Choolha Chowka </h1>
      <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam adipisci perferendis repellendus consequuntur, impedit veniam nemo amet tempora maiores vitae.</p>
    </div>

    <div class="lg:w-1/6s mt-4">
      <h1 class="text-xs sm:text-sm font-semibold text-gray-400 sm:mb-3 mb-1 mt-5 sm:mt-0">Pages</h1>
      <ul className='text-l'>
        <li><a href="#" class="text-white hover:text-gray-400 transition duration-300">About</a></li>
        <li><a href="#" class="text-white hover:text-gray-400 transition duration-300">Services</a></li>
        <li><a href="#" class="text-white hover:text-gray-400 transition duration-300">Contact Us</a></li>
      </ul>
    </div>
    <div class="lg:w-1/6 mt-4 pe-4">
      <h2 class="text-xs sm:text-sm font-semibold text-gray-400 sm:mb-3 mb-1 mt-5 sm:mt-0">Our Focus</h2>
  <ul class="list-disc sm:pl-8 ml-5 sm:ml-0 text-xs">
    <li class="mb-2">Quality Food</li>
    <li class="mb-2">Hygiene</li>
    <li class="mb-2">Delicious Desserts</li>
    <li class="mb-2">Authentic Ghee Roti</li>
  </ul>
  </div>
    <div class="mt-2">
      {/* <h1 class="text-xs sm:text-sm font-semibold text-gray-400 mb-3 mt-6 sm:mt-0">Location</h1> */}
      <div class="embed-responsive aspect-ratio-1x1">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.776950908217!2d77.49329697543007!3d28.756075775597502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf5d9d94930dd%3A0x1223e21ce7705350!2sChoolha%20Chowka!5e0!3m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
  <div class="text-white flex lg:ml-8 justify-self-start ml-4 mt-5 sm:mt-0">
  <a href="#" class="mx-4 hover:opacity-75 transition duration-300"><img src="/facebook.png" alt="Facebook" className="text-xs hover:-translate-y-1 hover:scale-110 duration-300" /></a>
    <a href="https://www.instagram.com/choolhachowka/" class="mx-4 hover:opacity-75 transition duration-300"><img src="/instagram.png" alt="Instagram" className="text-xs hover:-translate-y-1 hover:scale-110 duration-300"  /></a>
    <a href="https://wa.me/6395889047" class="mx-4 hover:opacity-75 transition duration-300"><img src="/whatsapp.png" alt="WhatsApp" className="text-xs hover:-translate-y-1 hover:scale-110 duration-300" /></a>
  </div>
  <hr class="bg-gray-500 w-full text-gray-500 mt-4 mb-1" />
  <div class="text-center text-xs text-gray-400 pt-2">
                
                &copy; 2023 Choolha Chowka
            </div>
</footer>
  )
}

export default Footer
