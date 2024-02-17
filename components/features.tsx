import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
// import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "نوفر وقتك",
    description:
      "وقتك غالي عندنا، نوفر لك الوقت بخدماتنا اللي تخلص شغلك في طرفة عين!",
    icon: "",
  },
  {
    title: "سهولة الاستخدام",
    description: "ما فيه تعقيد، ولا لف ودوران، استخدامنا سهل زي شربة الماي!",
    icon: "",
  },
  {
    title: "واجهة بسيطة",
    description: "واجهتنا ما تضيعك، كل حاجة قدام عينك، الاستخدام سهل وسلس!",
    icon: "",
  },
];

export default function Features() {
  return (
    <main className="h-screen flex justify-center items-center bg-[#f9f9f9]">
      <section className="container py-24 sm:py-32 ">
        <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
          <div>
            <h2
              className="text-3xl md:text-5xl flex items-center  font-extrabold
              md:leading-tight tracking-tight"
            >
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                مميزاتنا
              </span>
            </h2>

            <p className="text-muted-foreground text-xl mt-4 mb-8 ">
              حصادي هو الحل الأمثل لإدارة استثماراتك بذكاء وتحقيق أهدافك
              المالية.
            </p>

            <div className="flex flex-col gap-8">
              {serviceList.map(({ icon, title, description }: ServiceProps) => (
                <Card key={title} className="bg-[#f7f7f7] shadow-md">
                  <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                      {icon}
                    </div>
                    <div>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription className="text-md mt-2">
                        {description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <img
            src=""
            className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
            alt="About services"
          />
        </div>
      </section>
    </main>
  );
}
