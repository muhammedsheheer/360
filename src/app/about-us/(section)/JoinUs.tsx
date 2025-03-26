import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({}) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/image1.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="max-w-[500px] text-center font-oswald text-5xl leading-[60px]">
            Join Us for a
            <br />
            Flavorful Experience
          </h1>
          <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6]">
            Savor the rich flavors of expertly grilled kebabs and premium steaks
            at 360 KEBAB & Steakhouse. From perfectly seared cuts to traditional
            Turkish-inspired dishes, every bite is crafted to perfection. Let
            our warm hospitality and inviting atmosphere turn any meal—whether a
            casual gathering or a special occasion—into an unforgettable dining
            experience.
          </p>

          <Button className="group w-fit items-center gap-[1.19rem] px-6 py-6 font-semibold uppercase">
            <Link
              href="/table-booking"
              className="flex items-center justify-center gap-3"
            >
              Book A Table{" "}
              <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
