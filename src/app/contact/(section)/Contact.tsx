"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Mail, MapPin, MoveRight, Phone } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const FormValidation = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  reason: z.string(),
  message: z.string(),
});

type FormData = z.infer<typeof FormValidation>;

const Contact = ({}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(FormValidation),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      reason: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    bookTableMutation.mutate(data);
  };

  const bookTableMutation = useMutation({
    mutationFn: async (values: z.infer<typeof FormValidation>) => {
      return await axios.post("/api/contact", values);
    },
    onSuccess: () => {
      // toast.success(
      //   // "Your message has been submitted successfully. We will get back to you soon",
      //   "Your reservation request has been successfully submitted to the restaurant!",
      // );
      toast(
        (t) => (
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-center">
              Your reservation request has been successfully submitted to the
              restaurant!
            </p>
            <button
              onClick={() => {
                toast.dismiss(t.id);
                form.reset();
              }}
              className="rounded bg-primary px-4 py-2 text-white"
            >
              OK
            </button>
          </div>
        ),
        { duration: Infinity },
      );
    },
    onError: () => {
      toast.error(
        "There was an error submitting your message. Please try again later",
      );
    },
  });

  return (
    <section className="flex h-full w-full items-center justify-center bg-[#000000]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] px-0 pb-12 pl-0 md:px-2 md:pb-24">
        <div className="flex w-full flex-col lg:flex-row">
          <div
            style={{
              backgroundImage: "url(/images/about-us/image5.jpg)",
              backgroundPosition: "center",
            }}
            className="relative mt-6 flex h-full w-full items-center justify-center pb-6 lg:ml-[-10px] lg:w-1/2"
          >
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/70"></div>
            <div className="h-7/12 z-20 flex w-full flex-col gap-16 px-3 md:w-7/12 md:px-0">
              <div className="flex w-full flex-col gap-10">
                <div className="flex w-full flex-col gap-2">
                  <p className="font-oswald text-7xl font-extralight">
                    Get in touch
                  </p>
                  <p className="text-sm font-light">
                    Use the form on the right to send us a message.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    className="px-1 py-1 text-white hover:bg-transparent hover:text-white"
                    variant="ghost"
                    asChild
                  >
                    <Link
                      href="https://www.instagram.com/360kebab/"
                      target="_blank"
                    >
                      <Icons.instagram />
                    </Link>
                  </Button>
                  <Button
                    className="px-1 py-1 text-white hover:bg-transparent hover:text-white"
                    variant="ghost"
                    asChild
                  >
                    <Link
                      href="https://maps.app.goo.gl/ZTaWWUnjRAwJ24Mn8"
                      target="_blank"
                    >
                      <Icons.google />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-lg font-semibold">Working Hours</p>
                <p className="text-lg font-semibold">360 KEBAB & Steakhouse</p>
                <div className="flex gap-7">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#b3b3aa]">Monday</p>
                    <p className="text-[#b3b3aa]">Tuesday</p>
                    <p className="text-[#b3b3aa]">Wednesday</p>
                    <p className="text-[#b3b3aa]">Thursday</p>
                    <p className="text-[#b3b3aa]">Friday</p>
                    <p className="text-[#b3b3aa]">Saturday</p>
                    <p className="text-[#b3b3aa]">Sunday</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>3:00pm-2:00am</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>11:00am - 2:00am</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>11:00am - 2:00am</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>11:00am - 2:00am</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>11:00am - 2:00am</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>11:00am - 2:00am</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>11:00am - 2:00am</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* second time */}
              <div className="flex flex-col gap-4">
                <p className="text-lg font-semibold">Breakfast</p>
                <div className="flex gap-7">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#b3b3aa]">Monday</p>
                    <p className="text-[#b3b3aa]">Tuesday</p>
                    <p className="text-[#b3b3aa]">Wednesday</p>
                    <p className="text-[#b3b3aa]">Thursday</p>
                    <p className="text-[#b3b3aa]">Friday</p>
                    <p className="text-[#b3b3aa]">Saturday</p>
                    <p className="text-[#b3b3aa]">Sunday</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>9:00am-1:00pm</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>9:00am-1:00pm</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>9:00am-1:00pm</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>9:00am-1:00pm</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>9:00am-1:00pm</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>9:00am-1:00pm</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>9:00am-1:00pm</span>
                    </p>
                  </div>
                </div>
              </div>

              {/*end */}
            </div>
          </div>
          <div className="flex w-full flex-col bg-[#000000] pb-24 pt-5 lg:w-1/2 lg:items-center lg:justify-center">
            <div className="flex w-full flex-col gap-6 px-3 lg:w-3/5 lg:px-0">
              <div className="flex gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full bg-[#0f0f0f] p-2">
                    <MapPin className="text-[#b7955b]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p>
                    54-56 Wilmslow Rd, Manchester M14 5AL,
                    <br />
                    United Kingdom
                  </p>
                  <Button
                    variant="link"
                    className="flex gap-2 text-sm text-[#b3b3aa] hover:bg-transparent"
                    asChild
                  >
                    <Link
                      href="https://maps.app.goo.gl/ZTaWWUnjRAwJ24Mn8"
                      target="_blank"
                    >
                      <span>Get Direction</span>
                      <MoveRight />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full bg-[#0f0f0f] p-2">
                    <Phone className="text-[#b7955b]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="tel:+447707070732">
                    <p>+44 7707 070732</p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full bg-[#0f0f0f] p-2">
                    <Mail className="text-[#b7955b]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 break-all">
                  <Link href="mailto:grand360-steakhouse.co.uk">
                    grand360-steakhouse.co.uk
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-3 lg:w-3/5 lg:px-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
                  <div className="flex gap-4 pt-7">
                    <div className="flex w-full flex-col gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="First Name"
                                {...field}
                                className="h-12 min-w-[250px] rounded-lg border-none bg-[#222222] pl-8 text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Phone"
                                {...field}
                                className="h-12 min-w-[250px] rounded-lg border-none bg-[#222222] pl-8 text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Email Address"
                                {...field}
                                className="h-12 min-w-[250px] rounded-lg border-none bg-[#222222] pl-8 text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="reason"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Reason for contacting (optional)"
                                {...field}
                                className="h-12 min-w-[250px] rounded-lg border-none bg-[#222222] pl-8 text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Textarea
                                placeholder="Your Message"
                                {...field}
                                className="h-24 min-w-[250px] rounded-lg border-none bg-[#222222] pl-8 text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col pt-7 lg:flex-row">
                    <Button
                      disabled={bookTableMutation.isPending}
                      className="w-full py-6"
                    >
                      Contact US
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[1300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2258.1992687127185!2d-2.2252441!3d53.45506639999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb34f27b9d8a5%3A0xfea51c20e750975c!2s360%20KEBAB%20%26%20Steakhouse!5e1!3m2!1sen!2sin!4v1742972351477!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[500px] w-full grayscale invert"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// /images/contact/contact.png
