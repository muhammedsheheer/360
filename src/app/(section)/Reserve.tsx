import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#000] px-4 py-12 md:px-20 md:py-20">
      <div className="flex w-full flex-col gap-6 md:flex-row md:gap-10">
        <div className="w-full md:w-[30%]">
          <Image
            src="/images/home/reserve/image1.png"
            width={160}
            height={160}
            alt="logo"
            className="h-[300px] w-full object-cover md:h-full"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-5 md:w-[40%]">
          <h2 className="font-playfair text-4xl font-[400] capitalize text-[#FBEAD2] md:text-6xl">
            Reserve your table
          </h2>
          <p className="max-w-[450px] text-center font-manrope text-sm font-[400] tracking-[0.54px] text-[#FBEAD2] md:text-base">
            At Istanbul, we’ve created more than just a dining space—we’ve
            crafted an experience. Surrounded by warm ambiance, elegant décor,
            and the inviting aroma of authentic Turkish cuisine, every visit
            feels like a journey through the heart of Istanbul.
          </p>
          <div>
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
        <div className="w-full md:w-[30%]">
          <Image
            src="/images/home/reserve/image2.png"
            width={160}
            height={160}
            alt="logo"
            className="h-[300px] w-full object-cover md:h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Reserve;
