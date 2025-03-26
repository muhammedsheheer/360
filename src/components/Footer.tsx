import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";
import { ArrowRight, ChevronRight } from "lucide-react";

const Footer = ({}) => {
  return (
    <footer className="relative flex h-full w-full bg-[#131313] px-4 py-12 md:px-[50px] md:py-36 lg:px-[100px] 2xl:px-[160px]">
      <div className="absolute bottom-14 right-14 hidden md:block">
        <span className="font-manrope text-sm font-[400] tracking-[0.96px] text-[#64615C]">
          © 2025 360KEBAB&STEAKHOUSE
        </span>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:gap-20 2xl:gap-44">
        {/* first div */}
        <div className="flex flex-col gap-6 md:gap-12">
          <div className="ml-2 md:ml-0">
            <h1 className="font-playfair text-3xl font-[400] italic md:text-5xl">
              Subscribe to <br />
              our newsletter
            </h1>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 md:flex-row md:gap-16">
            <div className="flex flex-col items-start justify-start gap-2">
              <Button
                variant="link"
                className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
                asChild
              >
                <Link href="/menu">Menu</Link>
              </Button>
              <Button
                variant="link"
                className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
                asChild
              >
                <Link href="/about-us">About</Link>
              </Button>
              <Button
                variant="link"
                className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
                asChild
              >
                <Link href="/contact">Contact</Link>
              </Button>
              <Button
                variant="link"
                className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
                asChild
              >
                <Link href="/table-booking">booking</Link>
              </Button>
              {/* <Button
                variant="link"
                className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
                asChild
              >
                <Link href="">Gift voucher</Link>
              </Button> */}
            </div>
            <div className="ml-4 flex flex-col gap-2 md:ml-0">
              <h6 className="font-manrope text-base font-[700] uppercase tracking-[1.62px] [color:var(--text-light,#FBEAD2)]">
                Contact
              </h6>
              <Link
                href="tel:+447707070732"
                className="font-manrope text-sm font-[400] [color:var(--text-light,#FBEAD2)]"
              >
                +44 7707 070732
              </Link>
              <Link
                href="https://maps.app.goo.gl/ZTaWWUnjRAwJ24Mn8"
                target="_blank"
                className="font-manrope text-sm font-[400] [color:var(--text-light,#FBEAD2)]"
              >
                 54-56 Wilmslow Rd, Manchester M14 5AL, United Kingdom
              </Link>
              <Link
                href="mailto:grand360-steakhouse.co.uk"
                className="font-manrope text-sm font-[400] [color:var(--text-light,#FBEAD2)]"
              >
                grand360-steakhouse.co.uk
              </Link>

              <div className="flex flex-row items-center gap-3 pt-8">
                <Link
                  href={"https://www.instagram.com/360kebab/"}
                  target="_blank"
                >
                  {" "}
                  <Icons.instagram className="[color:var(--text-light,#FBEAD2)]" />
                </Link>
                <Link
                  href={
                    "https://www.tripadvisor.com/Restaurant_Review-g187069-d19297066-Reviews-360_Lounge-Manchester_Greater_Manchester_England.html"
                  }
                  target="_blank"
                >
                  {" "}
                  <Icons.unknown className="[color:var(--text-light,#FBEAD2)]" />
                </Link>
                <Link
                  href={"https://maps.app.goo.gl/ZTaWWUnjRAwJ24Mn8"}
                  target="_blank"
                >
                  {" "}
                  <Icons.google className="[color:var(--text-light,#FBEAD2)]" />
                </Link>
                <Link
                  href={"https://www.facebook.com/360lounge/"}
                  target="_blank"
                >
                  {" "}
                  <Icons.facebook className="[color:var(--text-light,#FBEAD2)]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* second div */}
        <div className="ml-4 flex flex-col gap-6 md:ml-0 md:gap-32">
          <div className="flex flex-col gap-4 md:gap-8">
            <p className="w-full max-w-[400px] font-manrope text-sm font-[300] tracking-[0.6px] [color:var(--text-light,#FBEAD2)] md:text-base">
              By subscribing to the newsletter, you will always be up to date.
              Find out about new products, events, and specials.
            </p>
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="text"
                placeholder="Email Address"
                className="w-full border-0 border-b-[1px] border-[color:var(--text-light,#FBEAD2)] bg-transparent px-2 py-4 text-[color:var(--text-light,#FBEAD2)] placeholder-[#958B7D] focus:outline-none focus:ring-0 md:w-[250px]"
              />

              <div>
                <Button className="mt-2 rounded-none border-[color:var(--text-light,#FBEAD2)] bg-transparent py-6 ring-1 ring-[color:var(--text-light,#FBEAD2)]">
                  <span className="flex flex-row items-center justify-center text-center font-manrope text-sm font-[600] uppercase tracking-[1.96px] [color:var(--text-light,#FBEAD2)]">
                    Subscribe <ArrowRight />
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <span className="font-manrope text-sm font-[400] tracking-[0.96px] text-[#64615C]">
              © 2025 360KEBAB&STEAKHOUSE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
