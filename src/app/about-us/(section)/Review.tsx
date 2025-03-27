"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitType = document.querySelectorAll(".review-head");
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

    gsap.to(".review-underline", {
      scrollTrigger: {
        trigger: ".review-underline",
        toggleActions: "restart none none none",
      },
      scale: 1,
      duration: 1.5,
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
    <section className="relative flex h-full w-full justify-center bg-[#000] px-0 md:px-[350px]">
      <div className="flex h-full w-full flex-col items-start justify-center gap-4 py-12 md:py-44">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 pb-2 md:pb-6 lg:gap-4">
          <h2 className="text-center font-playfair text-4xl font-[400] capitalize text-[#FBEAD2] md:text-6xl">
            Listen from our people{" "}
          </h2>
        </div>
        <div className="flex w-full items-center justify-center p-4">
          {reviews && (
            <Carousel className="w-full px-4">
              <CarouselContent className="ml-4 flex w-full justify-center gap-4 md:gap-14">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="flex h-[400px] w-full max-w-[700px] basis-full flex-col items-center justify-center gap-6 rounded-none border border-[#CFAC6A] bg-[#000] px-6 py-8 md:h-[450px]"
                  >
                    <div className="flex w-full items-center justify-center">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <Icons.star key={index} className="text-[#B99647]" />
                      ))}
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="line-clamp-5 text-center text-[#fff]">
                        {review.text.text}
                      </p>
                    </div>
                    <div className="flex w-full flex-col items-center gap-2">
                      <Image
                        src={
                          review.authorAttribution.photoUri ||
                          "/images/home/reviews/pictures/anna-mathew.svg"
                        }
                        width={64}
                        height={64}
                        alt={review.authorAttribution.displayName}
                      />
                      <div className="flex flex-col gap-2">
                        <p className="text-center text-[#fff]">
                          {review.authorAttribution.displayName}
                        </p>
                        <span className="text-center text-[#fff]">
                          {review.relativePublishTimeDescription}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#CFAC6A] text-[#CFAC6A] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#CFAC6A] text-[#CFAC6A] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
