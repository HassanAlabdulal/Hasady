"use client";

import image from "next/image";
import { Badge } from "./ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Start() {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);
  return (
    <section id="about" className=" w-full bg-[#f9f9f9] max-sm:pb-24 pb-36">
      <div className="shadow-lg bg-[#f7f7f7] rounded-3xl container py-24 max-sm:py-12">
        <div className="md:px-32 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src="/assets/starting.svg"
            alt="Starting Setion"
            className="w-[300px] md:w-[400px] object-contain rounded-lg"
          />
          {/* <div className="bg-green-0 flex justify-between">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                About{" "}
              </span>
              Company
            </h2>
            <p className="text-xl text-muted-foreground mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
