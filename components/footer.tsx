import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9]">
      <hr className="w-11/12 mx-auto" />

      <section className="container  grid grid-cols-2 py-20 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a href="/" className="flex text-2xl font-bold">
            <Image
              src="/assets/logo.svg"
              width={50}
              height={50}
              className="w-4 h-auto md:w-7"
              alt="logo"
            />
            حصادي
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">عنّا</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              الخدمات
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              المميزات
            </a>
          </div>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              الأسئلة الشائعة
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">تابعنا </h3>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              اكس
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              لنكدن
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">تواصل معنا</h3>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              hasady@gmail.com
            </a>
          </div>
        </div>
      </section>

      <section className="container text-center pb-14">
        <h3 className="flex items-center justify-center gap-1 text-sm md:text-base text-muted-foreground ">
          جميع الحقوق محفوظة، حصادي &copy; ٢٠٢٤
        </h3>
      </section>
    </footer>
  );
};
