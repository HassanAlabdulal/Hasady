import image from "next/image";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceProps {
  title: string;
  description: string;
  serviceImage: string;
}

const services: ServiceProps[] = [
  {
    title: "دوّن استثمارك وحقق أرباح خيالية ",
    description:
      "حاسبتنا تساعدك تتابع استثماراتك بالأسهم بكل سهولة. حط اسم الشركة وتكاليفك، وخلينا نوريك الأرباح المتوقعة بعد العمولات والضرائب!",
    serviceImage: "/assets/Calculator.svg",
  },
  {
    title: " اعرف أرباحك وخسائرك بدقة",
    description:
      "تقدر تراقب أداء شركاتك المُستثمر فيها بدقة، مع متابعة لمعدل الأرباح والخسائر بشكل مباشر.",
    serviceImage: "/assets/Finance.svg",
  },
  {
    title: " خطط لسداد قروضك بسهولة",
    description:
      "لا تخلي القروض تلخبط حساباتك! دخّل تفاصيل قرضك واحنا نحسب لك كل شيء، من الفائدة للقسط الشهري.",

    serviceImage: "/assets/Manage money.svg",
  },
  {
    title: " راقب الصرف لحظة بلحظة",
    description: " اعرف قيمة ريالك حول العالم! بسرعة وسهولة . ",
    serviceImage: "/assets/Currency.svg",
  },
];

const serviceList: string[] = [
  "أمان مالي",
  "استثمار ذكي",
  "رؤية استراتيجية",
  "تنبؤات دقيقة",
  " تخطيط سهل",
];

export default function Services() {
  return (
    <section id="services" className="container py-16 space-y-8">
      <div className="flex flex-wrap justify-center gap-4">
        {serviceList.map((service: string) => (
          <div key={service}>
            <Badge
              variant="secondary"
              className="md:text-md text-sm bg-[#d0b880] hover:bg-[#d0b880]/90"
            >
              {service}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
        {services.map(({ title, description, serviceImage }: ServiceProps) => (
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
                src={serviceImage}
                alt="About services"
                className="w-[200px] lg:w-[270px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
