import React from 'react'
import Header from '@/app/components/header'
import Backgroundimage from '@/app/public/Rectangle 1.png'
import image1 from '@/app/public/Images.png'
import image2 from '@/app/public/Images (6).png'
import image3 from '@/app/public/Images (1).png'
import image4 from '@/app/public/Images (2).png'
import Image from 'next/image'
import Fo from '@/app/public/Group 63.png'
import T from '@/app/public/Frame 161.png'
import c from '@/app/public/Frame 72.png'


const Shop = () => {
  return (
      <>
      <div>
        <Header />
        <Image
        src={Backgroundimage}
        alt='bg'
        />
        <div>
          <Image
          src={Fo}
          alt='f'
          />
        </div>
      </div>
      <section className="text-gray-600 body-font bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image1}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
           <b className='text-black'>Syltherine</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
          Stylish cafe chair
          </h2>
          <p className="mt-1"><b className=' text-black'>Rp 2.500.000</b> Rp 3.500.000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image2}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
          <b className='text-black'>Leviosa</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
          Stylish cafe chair
          </h2>
          <p className="mt-1 text-black"><b>Rp 2.500.000</b></p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image3}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
          <b className='text-black'>Lolito</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
          Luxury big sofa
          </h2>
          <p className="mt-1"><b className='text-black'>Rp 7.000.000</b>Rp 14.000.000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image4}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
            <b className='text-black'>Respira</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
          Outdoor bar table and stool
          </h2>
          <p className="mt-1"><b className='text-black'>Rp 500.000</b></p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image1}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
            <b className='text-black'>Syltherine</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
          Stylish cafe chair
          </h2>
          <p className="mt-1"><b className='text-black'>Rp 2.500.000</b>Rp 3.500.000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image2}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
            <b className='text-black'>Leviosa</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
          Stylish cafe chair
          </h2>
          <p className="mt-1 text-black"><b>Rp 2.500.000</b></p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image3}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
          <b className='text-black'>Lolito</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
          Luxury big sofa
          </h2>
          <p className="mt-1"><b className='text-black'>Rp 7.000.000</b>Rp 14.000.000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image4}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
          <b className='text-black'>Respira</b>
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Outdoor bar table and stool
          </h2>
          <p className="mt-1 text-black"><b>Rp 500.000</b></p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image1}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
           <b className='text-black'>Syltherine</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
          Stylish cafe chair
          </h2>
          <p className="mt-1"><b className=' text-black'>Rp 2.500.000</b> Rp 3.500.000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image2}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
          <b className='text-black'>Leviosa</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
          Stylish cafe chair
          </h2>
          <p className="mt-1 text-black"><b>Rp 2.500.000</b></p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image3}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
          <b className='text-black'>Lolito</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
          Luxury big sofa
          </h2>
          <p className="mt-1"><b className='text-black'>Rp 7.000.000</b>Rp 14.000.000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image4}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
            <b className='text-black'>Respira</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
          Outdoor bar table and stool
          </h2>
          <p className="mt-1"><b className='text-black'>Rp 500.000</b></p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image1}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
           <b className='text-black'>Syltherine</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
          Stylish cafe chair
          </h2>
          <p className="mt-1"><b className=' text-black'>Rp 2.500.000</b> Rp 3.500.000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image2}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
          <b className='text-black'>Leviosa</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
          Stylish cafe chair
          </h2>
          <p className="mt-1 text-black"><b>Rp 2.500.000</b></p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image3}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
          <b className='text-black'>Lolito</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
          Luxury big sofa
          </h2>
          <p className="mt-1"><b className='text-black'>Rp 7.000.000</b>Rp 14.000.000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image4}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
            <b className='text-black'>Respira</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
          Outdoor bar table and stool
          </h2>
          <p className="mt-1"><b className='text-black'>Rp 500.000</b></p>
        </div>
      </div>
    </div>
  </div>
  <div className='text-center justify-center bg-white'>
  <Image
  src={c}
  alt='c' />
</div>
<div className='bg-white'>
  <Image 
  src={T}
  alt='t'/>
</div>
</section>
</>
  )
}

export default Shop
