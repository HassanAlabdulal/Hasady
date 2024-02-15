import { Features } from "./featuers";

export default function Learnmore() {
  return (
    <main
      id="learnmore"
      className="flex items-start justify-center min-h-screen bg-[#f9f9f9]"
    >
      <section className="pt-32 md:pt-36 ">
        <div>
          {/* <h1
            className="text-black md:text-6xl font-extrabold md:leading-tight 
       tracking-tight text-4xl text-center"
          >
            ليش أستخدم حصادي؟
          </h1> */}
          <h2
            className="text-3xl md:text-7xl flex items-center justify-center gap-2 font-extrabold
             md:text-center md:leading-tight tracking-tight"
          >
            وداعاً للقلق، أهلاً
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              بالراحة !
            </span>
          </h2>
        </div>
        <div>
          <Features />
        </div>
      </section>
    </main>
  );
}
