import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Welcome: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] py-12 md:py-20">
      <div className="absolute left-0 top-[57%] z-10 hidden md:block">
        <h1 className="font-playfair text-8xl font-[400] uppercase tracking-[14px] text-[#151515]">
          DISC
        </h1>
      </div>
      <div className="absolute -right-10 top-[57%] z-10 hidden md:block">
        <h1 className="font-playfair text-8xl font-[400] uppercase tracking-[14px] text-[#151515]">
          TE/D
        </h1>
      </div>
      <div className="flex flex-col gap-4 md:gap-16">
        <div>
          <h1
            className="hidden text-center font-playfair text-3xl font-[400] uppercase md:block md:text-5xl md:leading-[110%]"
            style={{ color: "var(--text-light, #FBEAD2)" }}
          >
            Welcome to 360 Kebab&Steakhouse <br />A steakhouse experience.{" "}
            <br /> A doorway to perfection.
          </h1>
          <h1
            className="text-center font-playfair text-2xl font-[400] uppercase md:hidden md:text-5xl md:leading-[110%]"
            style={{ color: "var(--text-light, #FBEAD2)" }}
          >
            Welcome to 360 Kebab&Steakhouse A steakhouse experience. A doorway
            to perfection.
          </h1>
        </div>
        <div className="ga flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
          <div className="z-40">
            {" "}
            <Image
              src={"/images/home/welcome/image1.png"}
              width={160}
              height={160}
              alt="logo"
              className="z-40 h-[300px] w-full object-cover lg:h-[500px]"
            />
          </div>
          <div className="flex flex-col gap-6 px-4 md:gap-20">
            {" "}
            <Image
              src={"/images/home/welcome/1.jpg"}
              width={160}
              height={160}
              alt="logo"
              className="h-[300px] w-full object-cover px-2 md:mt-6 md:px-0 lg:h-[280px]"
            />
            <div className="px-3 md:mr-[12%] md:flex md:justify-end md:px-0">
              <Button className="rounded-none bg-transparent px-5 py-7 text-[#fff] ring-1 ring-[#BC995D] hover:bg-[#fff] hover:text-[#BC995D]">
                <Link
                  href={"/table-booking"}
                  className="flex flex-row items-center justify-center gap-2 text-center font-manrope text-sm font-[600] uppercase tracking-[1.96px]"
                >
                  Book table <ArrowRight className="w-6 text-[#BC995D]" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
