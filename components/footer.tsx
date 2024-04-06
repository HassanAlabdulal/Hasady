"use client";

import Image from "next/image";

const scrollToElement = (elementId: string) => {
  const targetedElement = document.getElementById(elementId);

  if (targetedElement) {
    targetedElement.scrollIntoView({ behavior: "smooth" });
  }
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9]">
      <hr className="w-11/12 mx-auto" />

      <section className="container grid grid-cols-2 py-20 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a href="/" className="flex text-2xl font-bold">
            <Image
              src="/assets/logo.svg"
              width={50}
              height={50}
              className="w-5 h-auto md:w-9"
              alt="logo"
            />
            حصادي
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">عن حصادي</h3>
          <div>
            <button
              onClick={() => scrollToElement("learnmore")}
              className="opacity-60 hover:opacity-100 hover:mr-1 transition-all duration-300"
            >
              الخدمات
            </button>
          </div>

          <div>
            <button
              onClick={() => scrollToElement("features")}
              className="opacity-60 hover:opacity-100 hover:mr-1 transition-all duration-300"
            >
              المميزات
            </button>
          </div>
          <div>
            <button
              onClick={() => scrollToElement("faq")}
              className="opacity-60 hover:opacity-100 hover:mr-1 transition-all duration-300"
            >
              الأسئلة الشائعة
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">الحاسبات </h3>
          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100 hover:mr-1 transition-all duration-300"
            >
              حاسبة الأسهم
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100 hover:mr-1 transition-all duration-300"
            >
              حاسبة القروض
            </a>
          </div>
          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100 hover:mr-1 transition-all duration-300"
            >
              حاسبة العملات
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">تواصل معنا</h3>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100 hover:mr-1 transition-all duration-300"
            >
              hasady@gmail.com
            </a>
          </div>
          <section className=" flex items-center gap-3">
            <a
              href="https://twitter.com/7assan_abdulaal"
              className="text-lg transition-all duration-300 hover:scale-110 bg-[#AA8A41]/25  p-2 rounded-lg flex justify-center"
              target="_blank"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              href="https://github.com/HassanAlabdulal"
              className="text-lg transition-all duration-300 hover:scale-110 bg-[#AA8A41]/25  p-2 rounded-lg flex justify-center"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/hassan-alabdulal/"
              className="text-lg transition-all duration-300 hover:scale-110 bg-[#AA8A41]/25  p-2 rounded-lg flex justify-center"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </section>
        </div>
      </section>

      <main className="container text-center pb-14">
        <h3 className="flex items-center justify-center gap-1 text-sm md:text-base text-muted-foreground ">
          جميع الحقوق محفوظة لفريق حصادي &copy; ٢٠٢٤
        </h3>
      </main>
    </footer>
  );
};
