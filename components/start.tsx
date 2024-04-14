"use client";

import image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Start() {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);
  return (
    <section id="about" className=" w-full bg-[#f9f9f9] max-sm:pb-24 pb-36">
      <div className="shadow-lg bg-[#f7f7f7] rounded-3xl container py-24 max-sm:py-12">
        <div className="md:px-32 flex flex-col-reverse md:flex-row gap-8 md:gap-24">
          <img
            src="/assets/starting.svg"
            alt="Starting Setion"
            className="w-[300px] md:w-[400px] object-contain rounded-lg"
          />
          <div className=" flex flex-col justify-start items-center ">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                <span className="text-black">وش </span>
                تنتظر؟{""}
              </h2>
            </div>
            <div>
              <h1 className="text-3xl font-semibold mt-4 mb-12">
                قراراتك المالية صارت أسهل وأسرع!
              </h1>
            </div>

            <div>
              <Button className=" rounded-full px-16 shadow-2xl bg-black font-semibold hover:bg-neutral-800">
                <Link href="/sign-in">ابدأ الآن </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
