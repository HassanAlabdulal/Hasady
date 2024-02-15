import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import image from "../assets/growth.png";
// import image3 from "../assets/reflecting.png";
// import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  featureImage: string;
}

const features: FeatureProps[] = [
  {
    title: "نظام يحسب لك أرباحك ",
    description:
      "وداعاً للعمليات الحسابية المعقدة! سيساعدك نظامنا على حساب أرباحك المتوقعة من الأسهم بدقة وسهولة.",
    featureImage: "image4",
  },
  {
    title: "معرفة معدل الأرباح والخسائر",
    description:
      "تقدر تراقب أداء شركاتك المُستثمر فيها بدقة، مع متابعة لمعدل الأرباح والخسائر بشكل مباشر.",
    featureImage: "image3",
  },
  {
    title: "حاسبة القروض",
    description:
      "خلاص انسى هم القروض! حصادي يساعدك تحسب أقساط القرض وفوائده بدقة، ويسهل عليك التخطيط المالي.",
    featureImage: "image",
  },
  {
    title: "تحويل العملات",
    description:
      "نقدم لك خدمة تحويل العملات بسهولة وسرعة، مع أسعار صرف مُحدثة لحظة بلحظة.",
    featureImage: "image",
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
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl flex items-center justify-center gap-2 font-bold md:text-center">
        وداعاً للقلق، أهلاً
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          بالراحة !
        </span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {features.map(({ title, description, featureImage }: FeatureProps) => (
          <Card
            key={title}
            className="bg-[#ecf4fa] hover:bg-[#f7f7f7] transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <CardHeader>
              <CardTitle className=" text-center ">{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              {/* <Image
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              /> */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
