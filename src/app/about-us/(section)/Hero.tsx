import Image from "next/image";

const Hero = ({}) => {
  return (
    <section id="hero" className="flex w-full items-center justify-center">
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-oswald text-5xl font-semibold leading-[66px] text-[#fbead2] lg:text-6xl">
                Welcome to 360 KEBAB & Steakhouse Where Every Bite Tells a Story
              </h1>
              <p className="font-manrope font-normal text-[#C1B6A6]">
                Indulge in the authentic flavors of the finest kebabs and
                premium steaks, expertly crafted to perfection. At 360 KEBAB &
                Steakhouse, we don`t just serve food—we create an unforgettable
                dining experience. From sizzling charcoal-grilled kebabs to
                succulent, perfectly aged steaks, every bite is a journey of
                taste and tradition. Savor the richness, embrace the artistry,
                and discover the flavors you`ve been craving.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-1/2">
            <Image
              src="/images/about-us/image2.jpg"
              width={1066}
              height={1600}
              alt="hero"
              className="h-full md:h-[875px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
