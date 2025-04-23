import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#050505]">
        <h2 className="text-center font-oswald text-5xl md:left-[15%] md:text-8xl">
          The 360 KEBAB
          <br />& Steakhouse Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#050505] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/3.jpg"
              width={1109}
              height={1600}
              alt="private dining"
              className="h-auto w-full rounded-lg object-cover md:h-[600px] md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-oswald text-5xl md:text-start md:text-7xl">
              From Dream
              <br />
              to Sizzle
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6] md:text-start">
              Located in the heart of Manchester, **360 KEBAB & Steakhouse** is
              your gateway to a world of bold flavors and culinary mastery.
              Inspired by the rich traditions of Turkish and Mediterranean
              cuisine, we bring you an authentic dining experience where every
              dish is crafted with passion and precision.
              <br />
              <br />
              Our menu is a celebration of expertly grilled kebabs, premium
              dry-aged steaks, and mouthwatering sides that capture the essence
              of true steakhouse excellence. Whether you`re savoring a perfectly
              seared ribeye or indulging in the smoky aroma of our signature
              kebabs, each bite is a tribute to quality and tradition. Paired
              with warm hospitality and an inviting ambiance, **360 KEBAB &
              Steakhouse** is more than just a restaurant—it’s an experience
              that brings the soul of Turkish grilling to Manchester.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
