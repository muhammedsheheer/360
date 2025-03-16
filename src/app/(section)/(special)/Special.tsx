"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(max-width:690px)", () => {
      gsap.to(".special-description", {
        scrollTrigger: {
          trigger: ".special-description",
          toggleActions: "restart none none none",
        },
        x: 0,
      });
    });

    mm.add("(min-width:691px)", () => {
      gsap.to(".special-description", {
        scrollTrigger: {
          trigger: ".special-description",
          toggleActions: "restart none none none",
        },
        x: 30,
        duration: 2,
      });
    });

    gsap.to(".special-title", {
      scrollTrigger: {
        trigger: ".special-title",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      x: 30,
      duration: 1.5,
    });

    const splitType = document.querySelectorAll(".special-head");
    splitType.forEach((char, i) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" });
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.2,
        });
      }
    });

    // const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e, "===e");
    // })

    // const raf = (time: number) => {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }
    // requestAnimationFrame(raf)

    // return () => {
    //   lenis.destroy(); // Cleanup Lenis instance to avoid memory leaks
    // };
  }, []);
  return (
    <section className="relative flex h-full w-full justify-center bg-[#070707] pb-12 pt-12 md:pb-16 md:pt-32">
      <div className="absolute right-[17%] top-[40%] hidden md:block">
        <p className="w-full max-w-[250px] font-manrope text-sm font-[300] tracking-[0.54px] text-[#C1B6A6]">
          360 was born from a passion for bringing the finest cuts of beef to
          the table, with a commitment to sustainability.
        </p>
      </div>
      <div className="absolute left-[20%] top-[25%] flex flex-col gap-4">
        <h1 className="hidden px-4 font-playfair text-sm font-[600] uppercase italic tracking-[1.96px] text-[#DCDCDC] md:block">
          Special
        </h1>
        <h1 className="hidden px-4 font-playfair text-4xl font-[400] capitalize text-[#FBEAD2] md:block md:text-5xl">
          360 <br />
          Signature <br />
          Steaks
        </h1>
      </div>

      <div className="flex h-full w-full flex-col items-center justify-center gap-4 py-12">
        <h1 className="px-4 font-playfair text-sm font-[600] uppercase italic tracking-[1.96px] text-[#DCDCDC] md:hidden">
          Special
        </h1>
        <h1 className="px-4 font-playfair text-4xl font-[400] capitalize text-[#FBEAD2] md:hidden md:text-5xl">
          360 Signature Steaks{" "}
        </h1>
        {modelData && (
          <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
            <EmblaCarousel slides={modelData} options={OPTIONS} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Special;
