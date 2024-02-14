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
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    featureImage: "image4",
  },
  {
    title: "Intuitive user interface",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    featureImage: "image3",
  },
  {
    title: "AI-Powered insights",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    featureImage: "image",
  },
  {
    title: "AI-Powered insights",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    featureImage: "image",
  },
];

const featureList: string[] = [
  "Dark/Light theme",
  "Reviews",
  "Features",
  "Pricing",
  "Contact form",
  "Our team",
  "Responsive design",
  "Newsletter",
  "Minimalist",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl flex items-center justify-center gap-2 font-bold md:text-center">
        مزايا
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          عديدة
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
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
            className="bg-[#f7f7f7] hover:bg-[#ecf4fa] transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <CardHeader>
              <CardTitle className=" text-center">{title}</CardTitle>
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
