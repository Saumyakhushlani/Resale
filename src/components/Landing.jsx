import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Rules from "./Rules";
import Footer from "./ui/footer";

export function LandingPage() {
  return (
    <BackgroundBeamsWithCollision className={'flex flex-col'}>
      <div className="h-screen flex flex-col justify-center items-center">
        <div>
          <h2 className="text-6xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black ">
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-[#472307] to-[#351E11] py-4">
              <span className="tracking-wider uppercase ">Manit Bazaar</span>
            </div>
          </h2>
        </div>
        <div className="relative mt-[-25px] md:mt-[-16px] flex justify-center items-center w-full  max-w-md md:max-w-3xl px-4 py-4">
          <p className="text-[17px] md:text-md lg:text-lg text-[#c52a1c] text-center md:max-w-8xl max-w-xl px-3">
            Manit Bazaar is a student-to-student reselling platform exclusively
            for the MANIT community. Buy, sell, or exchange books, gadgets,
            furniture, and more — all within your campus. Simplify your college
            life by trading with trusted peers!
          </p>
        </div>
        <Link href="/product">
          <button
            className="mt-6 flex items-center gap-x-2 bg-[#FFF8E6] 
             rounded-2xl text-[#351e11] px-6 py-3 font-semibold text-lg 
             shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
          >
            Explore Products
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
      <Rules/>
      <Footer/>
    </BackgroundBeamsWithCollision>
  );
}
