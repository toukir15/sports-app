"use client"
import { useState } from "react";
import CollectionSpotlight from "./Components/CollectionSpotlight";
import Container from "./Components/Container";
import Sports from "./Components/Sports";
import { IoIosSunny } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <div className=" dark:bg-[#292b32] bg-[#F7F7F8] text-white pb-[30px] mb:pb-[40px] lg:pb-[50px] ">
        <Container>
          <Sports />
          <CollectionSpotlight />
        </Container>
        <button onClick={() => setIsDark(!isDark)} className="absolute top-5 right-10"> {isDark ? <IoIosSunny size={28} /> : <IoMoonOutline size={28} className="text-black" />}  </button>
      </div>
    </div>
  );
}
