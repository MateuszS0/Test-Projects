import React from 'react'
import Image from 'next/image'
import Searchbar from '@/components/Searchbar'
import HCarousel from '@/components/HCarousel'


const Home = () => {
  return (
    <>
    <section className='px-6 md:px-20 py-24 border-2 border-red-500'>
      <div className="flex max-xl:flex-col">
        <div className="flex flex-col justify-center">
          <p className='small-text'>Smart Shopping Starts Here:
            <Image
              src="assets/icons/arrow-right.svg"
              alt='arrow-right'
              width={16}
              height={16}
            />
          </p>
          <h1 className='head-text'>
            Welcome to
            <span className='text-primary'> Priceless</span>
          </h1>
          <p className='mt-6'>Some description</p>

          <Searchbar/>
        </div>
        <HCarousel/>
      </div>
    </section>
    <section className='trending-section'>
      <h2 className='section-text'>Trending</h2>
      <div className='flex flex-wrap gap-x-8 gap-y-16'>
        {['Apple Iphone 15','Book','Shoes'].map
        ((product=> (
          <div>{product}</div>
        )))
        }
      </div>
    </section>
    </>
  )
}

export default Home