"use client";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = ({}) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".head-container", 1.5, {
      y: 50,
      opacity: 1,
      ease: "power4.out",
    })
      .from(".head-hero", 1, {
        x: 160,
        opacity: 0,
        delay: -0.5,
      })
      .from(".hero-button", 1, {
        y: 100,
        opacity: 0,
        ease: "power4.out",
        delay: -0.5,
      });
  }, []);
  return (
    <section
      id="hero"
      className="flex h-screen w-full items-center justify-center"
    >
      <div className="relative flex h-screen w-full items-center justify-center bg-black">
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="min-h-full min-w-full object-cover"
            style={{ objectPosition: "center" }}
            src="/video/home/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/thumbnail.png"
          ></video>
        </div>
        <div className="z-40 flex h-full w-full items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center gap-7">
            <h1 className="text-center font-playfair text-5xl font-[400] uppercase leading-[80%] text-[#FBEAD2] sm:text-5xl md:text-8xl">
              360KEBAB& <br />
              STEAKHOUSE
            </h1>
            <div className="flex flex-row items-center justify-center gap-3">
              <Link href="/menu">
                <Button className="hero-button flex items-center justify-center gap-3 rounded-none bg-[#FBEAD2] px-7 py-7 text-center font-manrope text-sm font-[600] uppercase tracking-[1.96px] text-[#282828] hover:bg-[#f2e6d5]">
                  Order NOw
                </Button>
              </Link>
              <Link href="/menu">
                <Button className="hero-button flex items-center justify-center gap-3 rounded-none bg-[#BC995D] px-7 py-7 text-center font-manrope text-sm font-[600] uppercase tracking-[1.96px] text-[#282828] hover:bg-[#f5cb82]">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
