export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container grid grid-cols-2 py-20 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a href="/" className="flex text-xl font-bold">
            دورة الإمام المنتظر
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">عن الدورة</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              من نحن؟
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              موقع الدورة
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
              انستقرام
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">تواصل معنا</h3>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              البريد الإلكتروني
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
