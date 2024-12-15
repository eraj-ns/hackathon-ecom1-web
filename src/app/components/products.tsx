import Image from "next/image";
import Pro1 from "@/app/public/Images.png";
import Pro2 from "@/app/public/Images (6).png";
import Pro3 from "@/app/public/Images (1).png";
import Pro4 from "@/app/public/Images (2).png";
import Pro5 from "@/app/public/Images (3).png";
import Pro6 from "@/app/public/Images (7).png";
import Pro7 from "@/app/public/Images (5).png";
import Pro8 from "@/app/public/image 8.png";

 const Products = () => {
    return (
        <div>
            <p className="text-black text-center justify-center w-1100 size-1500 pt-5 pb-5 bg-white text-lg">
         <b>Our Products</b>  
            </p>
        <section className="text-gray-600 body-font bg-white">
  <div className="container px-8 py-30 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-785 h-901 block"
            src={Pro1}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
          <b className="text-black w-123 h-29">Syltherine</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
          Stylish cafe chair
          </h2>
          <p className="mt-1 text-gray"><b className="text-black">Rp 2.500.000</b> Rp 3.500.000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={Pro2}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-black text-md tracking-widest title-font mb-1">
          <b>Leviosa</b>
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
            src={Pro3}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-black text-md tracking-widest title-font mb-1">
           <b>Lolito</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">   
           Luxury big sofa
          </h2>
          <p className="mt-1">
           <b className="text-black">Rp 7.000.000 </b> Rp 14.000.000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={Pro4}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
           <b className="text-black w-123 h-29">Respira</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
          Outdoor bar table and stool
          </h2>
          <p className="mt-1 text-black">
          <b>Rp 500.000</b>
          </p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={Pro5}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
            <b className="text-black">Grifo</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
            Night lamp
          </h2>
          <p className="mt-1 text-black"><b>RP 1.500.000</b></p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={Pro6}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
          <b className="text-black">Muggo</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
            Small mug
          </h2>
          <p className="mt-1 text-black"><b>Rp 150.000</b></p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={Pro7}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
            <b className="text-black">Pingky</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
          Cute bed set
          </h2>
          <p className="mt-1">
            <b className="text-black">RP 7.000.000</b> Rp 14.000.000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-67 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={Pro8}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">
            <b className="text-black">Potty</b>
          </h3>
          <h2 className="text-gray title-font text-lg font-medium">
            Minimalist flower pot
          </h2>
          <p className="mt-1 text-black"><b>Rp 500.000</b></p>
          <div>
          <div className="absolute inset-0 bg-white bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="space-y-3 px-4">
                <button className="w-full bg-white text-[#B88E2F] py-2 rounded hover:bg-gray-100 transition-colors">
                  Add to cart
                </button>
                
                <div className="flex justify-center gap-6 text-white">
                  <button className="flex items-center gap-1 hover:text-gray-200">
                    <span>Share</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-gray-200">
                    <span>Compare</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-gray-200">
                    <span>Like</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    )
}

 export default Products

