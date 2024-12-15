import Header from '../components/header'
import Backgroundimage from '@/app/public/Rectangle 1.png'
import React from 'react'
import blog1 from '@/app/public/Rectangle 68.png'
import blog2 from '@/app/public/Rectangle 68 (1).png'
import blog3 from '@/app/public/Rectangle 68 (2).png'
import B1 from '@/app/public/Rectangle 69.png'
import B2 from '@/app/public/Rectangle 69 (1).png'
import B3 from '@/app/public/Rectangle 69 (2).png'
import B4 from '@/app/public/Rectangle 69 (3).png'
import B5 from '@/app/public/Rectangle 69 (4).png'
import Image from 'next/image'
import Footer from '@/app/components/footer'
import F from '@/app/public/Frame 72.png'
import N from  '@/app/public/Frame 161.png'


const BlogPage = () => {
  return (
       <>
      <div>
        <Header />
        <Image
        src={Backgroundimage}
        alt='bg'
        />
      </div>
      <main className="container mx-auto px-4 py-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white">
          <div className="lg:col-span-2">
            <div className="grid gap-8">

              <article className="rounded-lg shadow-md overflow-hidden bg-white">
                <Image src={blog1} alt="Blog post" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-black">Going all-in with minimal design</h2>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                  <a href="#" className="text-black hover:underline">Read More</a>
                </div>
              </article>


              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={blog2} alt="Blog post" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-black">Exploring new ways of decorating</h2>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                  <a href="#" className="text-black hover:underline">Read More</a>
                </div>
              </article>


              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={blog3} alt="Blog post" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-black">Handmade pieces that took time to make</h2>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                  <a href="#" className="text-black hover:underline">Read More</a>
                </div>
              </article>

              {/* Add more blog post cards as needed */}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Categories Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-black">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Crafts</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Design</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Handmade</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Interior</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Wood</a></li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-black">Recent Posts</h3>
              <ul className="space-y-4">
                
              <li className="flex gap-4">
                  <Image src={B1} alt="blog image" className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h4 className="font-medium text-black">Going all-in with millennial design</h4>
                    <span className="text-sm text-gray-500">03 Aug 2022</span>
                  </div>
                </li>

                <li className="flex gap-4">
                  <Image src={B2} alt="blog image" className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h4 className="font-medium text-black">Exploring new ways of decorating</h4>
                    <span className="text-sm text-gray-500">03 Aug 2022</span>
                  </div>
                </li>


                <li className="flex gap-4">
                  <Image src={B3} alt="blog image" className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h4 className="font-medium text-black">Handmade pieces that took time to make</h4>
                    <span className="text-sm text-gray-500">03 Aug 2022</span>
                  </div>
                </li>


                <li className="flex gap-4">
                  <Image src={B4} alt="blog image" className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h4 className="font-medium text-black">Modern home in Milan</h4>
                    <span className="text-sm text-gray-500">03 Aug 2022</span>
                  </div>
                </li>

                <li className="flex gap-4">
                  <Image src={B5} alt="blog image" className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h4 className="font-medium text-black">Colorful office redesign</h4>
                    <span className="text-sm text-gray-500">03 Aug 2022</span>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <div className='bg-white'>
        <Image
        src={F}
        alt='f'
        />
        <Image
        src={N}
        alt='n' />
      </div>
      <Footer/>
      </>
  )
}

export default BlogPage