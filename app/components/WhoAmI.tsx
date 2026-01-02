import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Paragraph from "./Paragraph";
import Image from "next/image";
import Header from "./Header";
import { Button } from "@/components/ui/button";

const WhoAmI = () => {
  return (
    <section className="flex flex-col items-center  bg-mainBg">
      <MaxWidthWrapper>
        <Header bordertop text="About" text2="Abdelmajid" />

        <div className="flex lg:px-20  lg:flex-row flex-col gap-4 mt-4 lg:mt-8 justify-center">
          <div className=" max-w-md flex flex-col gap-5 mb-auto">
            <Paragraph text="About Abdelmajid ZADDI" className=" text-lg" height="h-10" />
            <Paragraph
              className=" text-sm"
              height="h-auto"
              text="I build intelligent AI/ML solutions, from deep learning models to production-ready ML pipelines."
            />
          </div>
          <div className=" overflow-hidden rounded-2xl  w-full lg:w-[55vw] h-[50vh] lg:h-[80vh]  relative">
            <Image src="/me.jpg" alt="me" fill className=" object-cover" />
          </div>
          <div className="max-w-md flex flex-col gap-5 mt-auto">
            <Paragraph className="text-lg font-semibold !text-maincolor" text="What I Do" height="h-10" />
            <Paragraph
              className="text-sm"
              height="h-auto"
              text="Results-driven AI Engineer and Software Developer with expertise in building AI-powered applications that integrate advanced machine learning, NLP, and real-time data processing. Adept in MLOps, cloud services (AWS), and DevOps practices, I deliver production-ready solutions that are scalable, secure, and optimized for performance."
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <a href="https://drive.google.com/file/d/1KpK_D3YDqPGkfdx0GBjCCLf_enGIjY0N/view?usp=sharing" className=" mx-auto self-center" target="_blank" rel="noopener noreferrer">
        <Button className=" rounded-full px-6 py-3 text-lg lg:text-xl my-6">Download CV ?</Button>
      </a>{" "}
    </section>
  );
};

export default WhoAmI;
