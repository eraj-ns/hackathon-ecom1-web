import React from 'react'
import Image from 'next/image'
import image1 from '@/app/public/Rectangle 37.png'
import image2 from '@/app/public/Rectangle 45 (1).png'
import image3 from '@/app/public/Rectangle 43.png'
import image4 from '@/app/public/Rectangle 44.png'
import image5 from '@/app/public/Rectangle 41 (1).png'
import image6 from '@/app/public/Rectangle 39.png'
import image7 from '@/app/public/Rectangle 40.png'
import image8 from '@/app/public/Rectangle 38.png'
import image9 from '@/app/public/Rectangle 36.png'
import Footer from '@/app/components/footer'

const FuniroFurniture = () => {
  return (
    <section className="text-gray-600 body-font text-center ">
  <div className="container px-5 py-24 mx-auto justify-center flex-center bg-white pt-2 pb-2">
    <div className="text-lg justify-center flex-center">
      <h1 className="text-gray justify-center flex-center text-xs text-center">
      Share your setup with
      </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-black text-lg">
      <b className='size-9'>#FuniroFurniture</b>
      </p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="gallery"
            className="w-274px object-cover h-382px block"
            src={image9}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="gallery"
            className="w-344px object-cover h-242px  block"
            src={image6}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="gallery"
            className="w-344px object-cover h-242px  block"
            src={image3}
          />
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image
            alt="gallery"
            className="w-381px object-cover h-323px block"
            src={image1}
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image
            alt="gallery"
            className="w-258px h-196px object-cover block"
            src={image4}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="gallery"
            className="w-178px object-cover h-242px block"
            src={image5}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="gallery"
            className="w-425px object-cover h-433px block"
            src={image2}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="gallery"
            className="w-295px object-cover h-392px block"
            src={image7}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
            alt="gallery"
            className="w-451px object-cover h-312px block"
            src={image8}
          />
        </div>
    
      </div>
    </div>
  </div>
  <Footer />
</section>

  )
}

export default FuniroFurniture