import Image from "next/image";
import Left from "@/app/public/image 106.png";
import Center from "@/app/public/image 100.png";
import Right from "@/app/public/image 101.png";

const Browse = () => {
    return (
      <div className="text-black text-center justify-center w-700 size-32px gap-7 bg-white text-lg">
        <b>Browse The Range</b>
        <p className="text-[#666666] w-400 size-20px gap-8 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<section className="text-white-600 body-font bg-white">
  <div className="container px-7 py-30 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-67 border-2 border-white border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="w-782.12px h-721 object-cover object-center"
            src={Left}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-lg title-font font-medium text-black mb-1">
             <b>Dining</b> 
            </h2>
            
            <div className="flex items-center flex-wrap ">
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-67 border-2 border-white border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="w-782.12px h-721 object-cover object-center"
            src={Center}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-lg title-font font-medium text-black mb-1">
             <b>Living</b> 
            </h2>
            
            <div className="flex items-center flex-wrap">
              
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-67 border-2 border-white border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="w-782.12px h-721 object-cover object-center"
            src={Right}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-lg title-font font-medium text-black mb-1">
              <b>Bedroom</b>
            </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  </div>
  )
}

export default Browse