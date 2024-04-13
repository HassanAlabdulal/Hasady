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
    <section id="start" className=" py-52 mb-36 bg-[#f7f7f7] mx-16 rounded-3xl">
      <div className=""></div>
    </section>
  );
}
