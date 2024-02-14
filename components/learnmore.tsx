import { Features } from "./featuers";

export default function Learnmore() {
  return (
    <main
      id="learnmore"
      className="flex items-start justify-center min-h-screen bg-[#f9f9f9]"
    >
      <section className="pt-44">
        <div>
          <h1
            className="text-black md:text-6xl font-extrabold md:leading-tight 
      leading-normal tracking-tight text-3 text-center"
          >
            ليش أستخدم حصادي؟
          </h1>
        </div>
        <div>
          <Features />
        </div>
      </section>
    </main>
  );
}
