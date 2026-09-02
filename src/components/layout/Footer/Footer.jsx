import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-[#FAFAFA]">

      <div className="mx-auto w-11/12 md:w-8/12 mb-16">

        <div className="flex flex-wrap gap-6">

         
          <div className="w-full md:w-[calc(50%-12px)] xl:w-[calc(25%-18px)]">
            <ul>
              <li className="mt-16 mb-3 font-display text-2xl font-normal text-[#10152E] leading-8 tracking-[1px]">
                MORE
              </li>

              <li className="text-[#10152E] font-display font-light text-sm leading-5 tracking-[1px] mb-2">
                FAQ
              </li>
              <li className="text-[#10152E] font-display font-light text-sm leading-5 tracking-[1px] mb-2">
                Shipping & returns
              </li>
              <li className="text-[#10152E] font-display font-light text-sm leading-5 tracking-[1px] mb-2">
                Contact
              </li>
              <li className="text-[#10152E] font-display font-light text-sm leading-5 tracking-[1px] mb-2">
                Terms
              </li>
              <li className="text-[#10152E] font-display font-light text-sm leading-5 tracking-[1px]">
                Privacy
              </li>
            </ul>
          </div>

          {/* EMAIL LIST */}
          <div className="w-full md:w-[calc(50%-12px)] xl:w-[calc(25%-18px)]">
            <ul>
              <li className="mt-16 mb-3 font-display text-2xl font-normal text-[#10152E] leading-8 tracking-[1px]">
                EMAIL LIST
              </li>

              <li className="text-[#10152E] font-display font-light text-sm leading-5 tracking-[1px] mb-2">
                FAQ
              </li>
              <li className="text-[#10152E] font-display font-light text-sm leading-5 tracking-[1px] mb-2">
                Shipping & returns
              </li>
              <li className="text-[#10152E] font-display font-light text-sm leading-5 tracking-[1px] mb-2">
                Contact
              </li>
              <li className="text-[#10152E] font-display font-light text-sm leading-5 tracking-[1px] mb-2">
                Terms
              </li>
              <li className="text-[#10152E] font-display font-light text-sm leading-5 tracking-[1px]">
                Privacy
              </li>
            </ul>
          </div>

          {/* ABOUT US */}
          <div className="w-full md:w-[calc(50%-12px)] xl:w-[calc(25%-18px)]">
            <ul>
              <li className="mt-16 mb-3 font-display text-2xl font-normal text-[#10152E] leading-8 tracking-[1px]">
                ABOUT US
              </li>

              <li className="text-[#10152E] font-display font-light text-sm leading-5 tracking-[1px]">Helping businesses thrive with<br />tailored
                solutions and expert<br />guidance. Driven by <br /> innovation, we focus on real<br /> results and lasting<br/> partnerships.
              </li>
            </ul>
          </div>

          {/* FOLLOW US */}
          <div className="w-full md:w-[calc(50%-12px)] xl:w-[calc(25%-18px)]">
            <h3 className="mt-16 mb-3 whitespace-nowrap font-display text-xl font-normal text-[#10152E] leading-8 tracking-[1px]">
              FOLLOW US ON SOCIAL MEDIA
            </h3>

            <ul className="flex gap-4">
              <li className="size-10 bg-[#CDBB88] text-white text-[16px] flex justify-center items-center rounded-sm">
                <FaInstagram />
              </li>

              <li className="size-10 bg-[#CDBB88] text-white text-[16px] flex justify-center items-center rounded-sm">
                <FaPinterestP />
              </li>

              <li className="size-10 bg-[#CDBB88] text-white text-[16px] flex justify-center items-center rounded-sm">
                <FaTiktok />
              </li>
            </ul>
          </div>

        </div>
      </div>

     
      <div className="border-t-2 border-[#E5E5E5] w-full"></div>

   
      <div>

        <ul className="flex flex-wrap justify-center gap-4 mt-16 px-4">
          <li className="text-[#10152E] font-display font-light text-sm leading-5 tracking-[1px]">
            FAQ
          </li>

          <li className="text-[#10152E] font-display font-light text-sm leading-5 tracking-[1px]">
            Shipping & returns
          </li>

          <li className="text-[#10152E] font-display font-light text-sm leading-5 tracking-[1px]">
            Contact
          </li>

          <li className="text-[#10152E] font-display font-light text-sm leading-5 tracking-[1px]">
            Terms
          </li>

          <li className="text-[#10152E] font-display font-light text-sm leading-5 tracking-[1px]">
            Privacy
          </li>
        </ul>

        <h5 className="font-display text-center mt-16 mb-16 text-[#262D4D] font-light text-sm leading-5 tracking-[1px]">
          Copyright 2024
        </h5>

      </div>

    </footer>
  )
}