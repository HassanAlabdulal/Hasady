"use client";

import Homepage from "@/components/homepage";
import Learnmore from "@/components/learnmore";
import Features from "@/components/features";
import { FAQ } from "@/components/faq";
import Start from "@/components/start";

export default function Home() {
  return (
    <section>
      <Homepage />
      <Learnmore />
      <Features />
      <FAQ />
      <Start />
    </section>
  );
}
