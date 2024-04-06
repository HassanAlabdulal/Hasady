import Services from "./services";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Learnmore() {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);
  return (
    <main
      id="learnmore"
      className="flex items-start justify-center min-h-screen bg-[#f9f9f9]"
    >
      <section className="pt-32 md:pt-36 ">
        <div>
          <h2
            className="text-3xl md:text-7xl flex items-center justify-center gap-2 font-extrabold
             md:text-center md:leading-tight tracking-tight"
            data-aos="fade-up"
          >
            وداعاً للقلق، أهلاً
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              بالراحة !
            </span>
          </h2>
        </div>
        <div>
          <Services />
        </div>
      </section>
    </main>
  );
}
