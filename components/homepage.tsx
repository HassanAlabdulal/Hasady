"use client";

import { Button } from "@/components/ui/button";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Homepage() {
  return (
    <main className="min-h-screen w-full background">
      <div className=" flex flex-col items-center justify-center pt-48 max-sm:pt-40">
        <div>
          <h1 className="text-black md:text-8xl font-extrabold md:leading-tight leading-normal tracking-tight text-4xl text-center ">
            الأمان المالي بدءًا <br />
            <span className="text-primary ">من حصادي</span>
          </h1>
        </div>
        <div className="mt-12">
          <Button className="inline-flex items-center justify-center md:px-7 md:py-7 md:text-xl px-5 py-5 text-lg  shadow-2xl bg-black text-white hover:bg-neutral-800 rounded-full">
            متحمس تعرف أكثر؟ 🔥
          </Button>
        </div>
        <div className="mt-11">
          <Player
            src="/assets/animations/homepage.json"
            background="transparent"
            speed={0.9}
            className="md:w-[400px] md:h-[400px] w-[350px] h-[350px]"
            loop
            autoplay
          />
        </div>
      </div>
    </main>
  );
}
