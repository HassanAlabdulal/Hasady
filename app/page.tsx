"use client";

import Homepage from "@/components/homepage";
import Learnmore from "@/components/learnmore";
import Features from "@/components/features";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <section>
      <Homepage />
      <Learnmore />
      <Features />
      <FAQ />
    </section>
  );
}
