"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Menu = ({}) => {
  return (
    <section className="relative h-full w-full bg-[#131313]">
      <div className="absolute left-[10%] top-[15%] hidden md:block">
        <Image
          src={"/images/home/menu/image1.png"}
          width={160}
          height={160}
          alt="logo"
          className="z-40 h-[370px] w-full object-cover"
        />
      </div>
      <div className="absolute left-[13%] top-[45%] hidden md:block">
        <Image
          src={"/images/home/menu/image2.png"}
          width={160}
          height={160}
          alt="logo"
          className="z-40 h-[340px] w-full object-cover"
        />
      </div>
      <div className="absolute right-[13%] top-[15%] hidden md:block">
        <Image
          src={"/images/home/menu/image3.png"}
          width={160}
          height={160}
          alt="logo"
          className="z-40 h-[370px] w-full object-cover"
        />
      </div>
      <div className="absolute right-[2%] top-[40%] hidden md:block">
        <Image
          src={"/images/home/menu/image4.png"}
          width={160}
          height={160}
          alt="logo"
          className="z-40 h-[320px] w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex flex-row overflow-hidden">
        <h1 className="whitespace-nowrap font-playfair text-5xl font-[400] tracking-[2px] text-[#262626] md:text-8xl">
          360 kebab&steakhouse 360 kebab&steakhouse
        </h1>
      </div>
      <div className="flex flex-col gap-8 py-12 md:py-80">
        <div className="flex flex-col items-center justify-center gap-6 md:gap-10">
          <span className="font-playfair text-sm font-[600] uppercase italic tracking-[1.98px] text-[#DCDCDC]">
            Explore menu
          </span>
          <h1 className="text-center font-playfair text-5xl font-[400] text-[#FBF5DC] md:text-8xl">
            Menu
          </h1>
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="w-full max-w-[500px] px-2 text-center font-manrope text-sm font-[300] tracking-[0.54px] text-[#C1B6A6] md:px-0 md:text-base">
              360kebab was born from a passion for bringing the finest cuts of
              beef to the table, with a commitment to sustainability and premium
              quality. Every dish is a labor of love, crafted by our experienced
              chefs who handpick each cut to ensure perfection.
            </p>
            <div>
              <Button className="rounded-none bg-transparent px-4 py-6 text-[#fff] ring-1 ring-[#BC995D] hover:bg-[#fff] hover:text-[#BC995D] md:px-5 md:py-7">
                <Link
                  href={""}
                  className="flex flex-row items-center justify-center gap-2 text-center font-manrope text-xs font-[600] uppercase tracking-[1.96px] md:text-sm"
                >
                  View Menu <ArrowRight className="w-6 text-[#BC995D]" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-6 md:hidden">
          <Image
            src={"/images/home/menu/image1.png"}
            width={160}
            height={160}
            alt="logo"
            className="z-40 h-[300px] w-full object-cover lg:h-[500px]"
          />
          <Image
            src={"/images/home/menu/image3.png"}
            width={160}
            height={160}
            alt="logo"
            className="z-40 h-[300px] w-full object-cover lg:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;
