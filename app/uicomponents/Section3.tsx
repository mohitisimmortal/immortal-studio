import { DotFilledIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Section3() {
  return (
    <div className="mx-4 md:mx-10 xl:mx-28" id="process">
      <p className="mb-4 p-3 flex items-center w-fit xl:text-lg rounded-full bg-lightblack">
        <DotFilledIcon className="text-primarycolor" />
        Our Process
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Card */}
        <Card className="rounded-xl border-bordercolor1">
          <CardContent className="pb-0 pt-4">
            <div className="relative w-full h-64">
              <Image
                src="/images/subscribe.jpg"
                alt="Switch Icon"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </CardContent>
          <CardHeader className="pt-4">
            <CardTitle className="font-normal">Subscribe</CardTitle>
            <CardDescription className="text-zinc-400 sm:text-lg">
              Unlock unlimited creativity by subscribing to our design subscription service today and take your first step towards elevating your brand.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Second Card */}
        <Card className="rounded-xl border-bordercolor1">
          <CardContent className="pb-0 pt-4">
            <div className="relative w-full h-64">
              <Image
                src="/images/design.jpg"
                alt="Switch Icon"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </CardContent>
          <CardHeader className="pt-4">
            <CardTitle className="font-normal">Design</CardTitle>
            <CardDescription className="text-zinc-400 sm:text-lg">
              Our team of talented designers is dedicated to bringing your vision to life, no matter how big or small your project may be. We’ve got you covered.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Third Card */}
        <Card className="rounded-xl border-bordercolor1">
          <CardContent className="pb-0 pt-4">
            <div className="relative w-full h-64">
              <Image
                src="/images/delivery.jpg"
                alt="Switch Icon"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </CardContent>
          <CardHeader className="pt-4">
            <CardTitle className="font-normal">Delivery</CardTitle>
            <CardDescription className="text-zinc-400 sm:text-lg">
              Once you’ve submitted your design request, our team gets to work right away, ensuring that you receive your designs in a timely manner.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Fourth Card */}
        <Card className="rounded-xl border-bordercolor1">
          <CardContent className="pb-0 pt-4">
            <div className="relative w-full h-64">
              <Image
                src="/images/website.jpg"
                alt="Switch Icon"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </CardContent>
          <CardHeader className="pt-4">
            <CardTitle className="font-normal">Website</CardTitle>
            <CardDescription className="text-zinc-400 sm:text-lg">
              Visit our website mohitisimmortal.in to learn more about our services and how we can help elevate your brand.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
