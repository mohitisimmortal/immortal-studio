import Section3 from "./uicomponents/Section3";
import Section4 from "./uicomponents/Section4";
import Section2 from "./uicomponents/Section2";
import Section5 from "./uicomponents/Section5";
import Section6 from "./uicomponents/Section6";
import Section7 from "./uicomponents/Section7";
import Section8 from "./uicomponents/Section8";

export default function Home() {
  // new font to put in classname- font-[family-name:var(--font-geist-sans)]
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <h1 className="mt-20 xl:mt-48 text-center text-7xl font-medium sm:text-9xl lg:text-[12rem]">
        Immortal
      </h1>
      <h3 className="text-center mb-10 sm:text-xl">
        Minimalist Studio
      </h3>
      <Section2 />
      <div className="mb-20"></div>
      <Section3 />
      <div className="mb-20"></div>
      <Section4 />
      <div className="mb-20"></div>
      <Section5 />
      <div className="mb-20"></div>
      <Section6 />
      <div className="mb-20"></div>
      <Section7 />
      <div className="mb-20"></div>
      <Section8 />
    </div>
  );
}
