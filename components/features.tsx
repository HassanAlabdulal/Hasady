import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "./icons";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "نوفر وقتك",
    description:
      "وقتك غالي عندنا، نوفر لك الوقت بخدماتنا اللي تخلص شغلك في طرفة عين!",
    icon: <MedalIcon />,
  },
  {
    title: "استخدامنا سهل",
    description: "ما فيه تعقيد، ولا لف ودوران، استخدامنا سهل زي شربة الماي!",
    icon: <MedalIcon />,
  },
  {
    title: "واجهتنا بسيطة",
    description: "واجهتنا ما تضيعك، كل حاجة قدام عينك، الاستخدام سهل وسلس!",
    icon: <MedalIcon />,
  },
];

export default function Features() {
  return (
    <main className="flex justify-center items-center bg-[#f9f9f9]">
      <section className="container py-12 sm:py-32 ">
        <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
          <div>
            <h2
              className="text-3xl md:text-5xl flex items-center max-sm:justify-center font-extrabold
              md:leading-tight tracking-tight "
            >
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text  ">
                مميزاتنا
              </span>
            </h2>
            <p className="text-muted-foreground text-xl mt-4 mb-8 max-sm:text-center">
              حصادي هو الحل الأمثل لإدارة استثماراتك بذكاء وتحقيق أهدافك
              المالية.
            </p>

            <div className="flex flex-col gap-8">
              {serviceList.map(({ icon, title, description }: ServiceProps) => (
                <Card key={title} className="bg-[#f7f7f7] shadow-md">
                  <CardHeader className="flex md:flex-row justify-start items-start gap-4 max-sm:gap-0">
                    <div className=" p-1 rounded-2xl ">{icon}</div>
                    <div>
                      <CardTitle className="max-sm:text-center">
                        {title}
                      </CardTitle>
                      <CardDescription className="text-md mt-2 max-sm:text-center">
                        {description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <img
            src="/assets/featuers.svg"
            className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
            alt="services"
          />
        </div>
      </section>
    </main>
  );
}
