import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "هل يحتاج استخدام الموقع تسجيل أو اشتراك؟",
    answer:
      "لا، ما يحتاج! تقدر تستخدم حاسباتنا مباشرة بدون أي تسجيل أو تعقيدات. بس ترى هاا .. ما بتنحفظ حساباتك 🤷🏻‍♂️",
    value: "item-1",
  },
  {
    question: "كيف أحفظ حساباتي؟",
    answer:
      "في هالحالة، تحتاج تسجل حساب عشان تخزن كل شيء وما تضطر تعبي المعلومات كل مرة.",
    value: "item-2",
  },
  {
    question: "كيف أقدر أستخدم حاسبة الأسهم في حصادي؟",
    answer:
      "أمرها سهل! بس ادخل الحاسبة وحط اسم الشركة اللي استثمرت فيها، وسعر الشراء والبيع، وحنا بنحسب لك الأرباح بعد العمولة والضريبة.",
    value: "item-3",
  },
  {
    question: "هل ممكن يكون فيه أخطاء في أسعار العملات؟",
    answer:
      "نحرص دايمًا أن نقدم لك أحدث وأدق الأسعار، بس دايمًا تأكد من الأسعار قبل ما تسوي أي عمليات مالية، لأن السوق يتغير كل ثانية.",
    value: "item-4",
  },
  {
    question: "هل تقدمون نصائح استثمارية أو مالية؟",
    answer:
      "لا، حصادي ما يقدم نصائح استثمارية، بس نساعدك تحسب وتنظم أمورك المالية بنفسك.",
    value: "item-5",
  },
  {
    question: "إذا عندي سؤال أو مشكلة، كيف أقدر أتواصل معكم؟",
    answer:
      "تقدر تتواصل معانا عبر صفحة اتصل بنا، واحنا موجودين نساعدك على طول.",
    value: "item-6",
  },
];

export const FAQ = () => {
  return (
    <main className="flex justify-center items-center bg-[#f9f9f9]">
      <section id="faq" className="container py-12 sm:py-32">
        <div className="">
          <h2
            className="text-3xl md:text-5xl flex items-center max-sm:justify-center gap-3 font-extrabold
              md:leading-normal leading-loose tracking-tight mb-4"
          >
            الأسئلة
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              الشائعة
            </span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full AccordionRoot">
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>

              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <h3 className="font-medium mt-4">
          Still have questions?{" "}
          <a
            href="#"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Contact us
          </a>
        </h3>
      </section>
    </main>
  );
};
