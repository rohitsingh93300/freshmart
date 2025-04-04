import React from 'react'
import HeroImg from "../assets/Hero1.png"

const Hero = () => {
  return (
    <section className="relative bg-green-600 text-white mt-15">
      <div className="max-w-6xl mx-auto py-16 flex flex-col md:flex-row items-center px-6 md:px-0 gap-7">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fresh Groceries Delivered to Your Door</h1>
          <p className="text-lg mb-6">
            Shop from our wide selection of fresh fruits, vegetables, dairy, and more. Get same-day delivery!
          </p>
          <div className="flex flex-wrap gap-4">
            <button asChild className="bg-white text-green-600 hover:bg-gray-100 rounded-full px-3 py-1">
              <a href="/products">Shop Now</a>
            </button>
            <button asChild variant="outline" className="text-white border-white bg-green-700 hover:bg-green-600 rounded-full px-3 py-2">
              <a href="/about">Learn More</a>
            </button>
          </div>
        </div>
        <div className="relative  flex justify-center">
          {/* <div className="relative w-full max-w-md h-64 md:h-80">
            <div className="absolute inset-0 bg-white/20 rounded-lg backdrop-blur-sm"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={grocery}
                alt="Fresh groceries"
                className="max-h-full object-contain"
              />
            </div>
          </div> */}
          <div className="absolute inset-0 bg-white/20 rounded-lg backdrop-blur-sm"></div>
          <img src={HeroImg} alt="" className='z-10'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
