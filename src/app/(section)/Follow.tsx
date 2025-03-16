import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#000] px-4 pt-12 md:px-[50px] lg:pt-20 2xl:px-[100px]">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-3 py-8 md:flex-row md:justify-between">
          <h2 className="text-center font-playfair text-4xl font-[400] capitalize text-[#FBEAD2] md:text-6xl">
            Listen from our people{" "}
          </h2>
          <h6 className="font-manrope text-2xl font-[400] capitalize tracking-[1px] text-[#B99647] md:text-3xl">
            @360kebab
          </h6>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="w-full lg:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image1.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover lg:h-full"
              />
            </div>
            <div className="flex w-full flex-col gap-5 lg:w-[25%]">
              <h6 className="font-manrope text-5xl font-[400] uppercase text-[#B99647] md:text-7xl">
                360
              </h6>
              <h6 className="flex flex-col items-end justify-end font-manrope text-3xl font-[400] uppercase text-[rgba(255,255,255,0.84)] md:mt-44">
                T BONE <br /> <span className="text-lg">TOMAHAWK</span>
              </h6>
            </div>
            <div className="w-full lg:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image2.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover lg:h-full"
              />
            </div>
            <div className="w-full lg:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image3.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover lg:h-full"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="flex w-full items-end justify-end lg:w-[25%]">
              <h6 className="flex flex-col items-end justify-end font-manrope text-3xl font-[400] uppercase text-[rgba(255,255,255,0.84)] md:mt-44">
                MEZZE PLATTER <br />{" "}
                <span className="text-lg">360 BEEF SUSHI</span>
              </h6>{" "}
            </div>
            <div className="w-full lg:w-[50%]">
              {" "}
              <Image
                src={"/images/home/follow/image4.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover lg:h-full"
              />
            </div>

            <div className="flex w-full flex-col items-start justify-start lg:w-[25%]">
              <h6 className="flex flex-col font-manrope text-3xl font-[400] uppercase text-[rgba(255,255,255,0.84)]">
                ASADO BEEF <br /> <span className="text-lg">LAMB SHOULDER</span>
              </h6>{" "}
              <h6 className="font-manrope text-5xl font-[400] uppercase text-[#B99647] md:mt-52 md:text-7xl">
                STEAK
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
