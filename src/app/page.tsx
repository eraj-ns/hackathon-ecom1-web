
import React from "react";
import Hero from "./components/hero";
import Browse from "./components/browse";
import Products from "./components/products";
import RoomIspirations from "./components/room";
import FuniroFurniture from "./components/funiro"
import BlogPage from "@/app/blog/page";
import Page from "@/app/contact/page"
import Shop from "./shop/page";


const Home = () => {
  return (
    <div>
      <Hero />
      <Browse />
      <Products />
      <RoomIspirations/>
      <FuniroFurniture />
      <BlogPage />
      <Page />
      <Shop />
      
    </div>
  );
}
 
export default Home