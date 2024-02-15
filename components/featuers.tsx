import image from "next/image";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
  featureImage: string;
}

const features: FeatureProps[] = [
  {
    title: " استثمر بذكاء وحقق أرباح خيالية ",
    description:
      "وداعاً للعمليات الحسابية المعقدة! يساعدك نظامنا على حساب أرباحك المتوقعة من الأسهم بدقة وسهولة.",
    featureImage: "/assets/Calculator.svg",
  },
  {
    title: " اعرف أرباحك وخسائرك بدقة",
    description:
      "تقدر تراقب أداء شركاتك المُستثمر فيها بدقة، مع متابعة لمعدل الأرباح والخسائر بشكل مباشر.",
    featureImage: "/assets/Finance.svg",
  },
  {
    title: " خطط لسداد قروضك بسهولة",
    description:
      "خلاص انسى هم القروض! حصادي يساعدك تحسب أقساط القرض وفوائده بدقة، ويسهل عليك التخطيط المالي.",
    featureImage: "/assets/Manage money.svg",
  },
  {
    title: " أسعار صرف العملات لحظة بلحظة",
    description:
      "نقدم لك خدمة تحويل العملات بسهولة وسرعة، مع أسعار صرف مُحدثة لحظة بلحظة.",
    featureImage: "/assets/Currency.svg",
  },
];

const featureList: string[] = [
  "أمان مالي",
  "استثمار ذكي",
  "رؤية استراتيجية",
  "تنبؤات دقيقة",
  " نمو سريع",
];

export const Features = () => {
  return (
    <section id="features" className="container py-16 space-y-8">
      <h2 className="text-2xl lg:text-3xl flex items-center justify-center gap-2 font-bold md:text-center">
        وداعاً للقلق، أهلاً
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          بالراحة !
        </span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="md:text-md text-sm bg-[#d0b880] hover:bg-[#d0b880]/90"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
        {features.map(({ title, description, featureImage }: FeatureProps) => (
          <Card
            key={title}
            className="bg-[#f7f7f7] hover:bg-[#f5f5f5] transition-all max-w-[470px] duration-500 shadow-md hover:shadow-xl hover:scale-105 rounded-2xl"
          >
            <CardHeader>
              <CardTitle className=" text-center ">{title}</CardTitle>
            </CardHeader>

            <CardContent className=" text-lg text-center">
              {description}
            </CardContent>

            <CardFooter>
              <img
                src={featureImage}
                alt="About features"
                className="w-[200px] lg:w-[270px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
