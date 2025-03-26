"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Map = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".branches-underline", {
      scrollTrigger: {
        trigger: ".branches-underline",
        toggleActions: "restart none none none",
      },
      scale: 1,
      duration: 1.5,
    });
  }, []);
  return (
    <section className="h-full w-full px-4 py-12 md:px-20 md:py-24">
      <div className="flex h-full w-full flex-col gap-8 md:flex-row md:gap-4">
        <div className="w-full md:w-[70%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2258.1992701845807!2d-2.227819023405336!3d53.45506637232107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb34f27b9d8a5%3A0xfea51c20e750975c!2s360%20KEBAB%20%26%20Steakhouse!5e1!3m2!1sen!2sin!4v1742969192261!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[500px] w-full grayscale invert hover:grayscale hover:invert md:h-[700px]"
          ></iframe>
        </div>
        <div className="flex w-full flex-col gap-6 md:w-[30%] md:items-start md:justify-end md:gap-12">
          <h2 className="font-playfair text-4xl font-[400] capitalize text-[#FBEAD2] md:text-6xl">
            Find us{" "}
          </h2>
          <div className="flex flex-col gap-3">
            <Link
              href={"https://maps.app.goo.gl/ofQ34pZNY75zFv6d7"}
              target="_blank"
            >
              <h6 className="font-manrope text-2xl font-[400] uppercase text-[rgba(255,255,255,0.84)]">
                54-56 Wilmslow Rd, <br /> Manchester M14 5AL, <br /> United
                Kingdom{" "}
              </h6>{" "}
            </Link>
            <Link href={"tel:+447707070732"}>
              <span className="font-manrope text-lg font-[300] uppercase text-[#fff]">
                +44 7707 070732
              </span>
            </Link>
            <Link href={"mailto:grand360-steakhouse.co.uk"}>
              <span className="font-manrope text-lg font-[300] uppercase text-[#fff]">
                grand360-steakhouse.co.uk{" "}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
