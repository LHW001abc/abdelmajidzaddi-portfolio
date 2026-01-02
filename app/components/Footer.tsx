"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import Paragraph from "./Paragraph";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { MdEmail } from "react-icons/md";
import { PhoneCall } from "lucide-react";
import SpaceBtn from "./SpaceBtn";

const Footer = () => {
  const firstText = React.useRef<HTMLParagraphElement>(null);
  const secondText = React.useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.to([firstText.current, secondText.current], {
      xPercent: -100,
      repeat: -1,
      duration: 15,
      ease: "none",
      repeatDelay: 0,
    });
  }, []);

  return (
    <footer className="bg-[#171719] relative overflow-hidden h-screen">
      <div className=" text-white h-full">
        <div className={"  absolute top-0 "}>
          <div className={"whitespace-nowrap relative  "}>
            <p className="text-[15vw]" ref={firstText}>
              ABDELMAJID ZADDI
            </p>
            <p className=" absolute text-[15vw] top-0  left-full" ref={secondText}>
              ABDELMAJID ZADDI
            </p>
          </div>
        </div>
        <div className=" pt-[13vh] lg:pt-[35vh] h-full py-5  ">
          <MaxWidthWrapper className=" h-full items-start grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-5">
            <div className="flex h-full px-5 flex-col">
              <div className="flex   items-center  justify-between">
                <div className="  max-w-sm text-3xl">HEAL THE WORLD</div>
                <SpaceBtn>
                  <Link href="mailto:abdelmajidzaddi088@gmail.com" className=" text-white z-20">
                    Contact Me
                  </Link>
                </SpaceBtn>
              </div>
              <div className=" mt-auto flex justify-between">
                <div className="   flex flex-col ">
                  <a
                    href="mailto:abdelmajidzaddi088@gmail.com"
                    className="flex hover:text-maincolor2 hover:underline duration-150 items-center gap-2 text-white hover:underline"
                  >
                    <MdEmail className=" w-4 h-4" />
                    abdelmajidzaddi088@gmail.com
                  </a>
                  <a
                    href="tel:+212695557631"
                    className="flex  hover:text-maincolor2 hover:underline duration-150  items-center gap-2 text-white hover:underline"
                  >
                    <PhoneCall className=" w-4 h-4" />
                    +212 695 557 631
                  </a>{" "}
                </div>
                <div className="flex gap-3">
                  <Link
                    target="_blank"
                    className=" hover:text-maincolor2 hover:underline duration-150  flex items-center justify-center"
                    href="https://github.com/LHW001abc"
                  >
                    <FaGithub className="w-5 h-5" />
                  </Link>{" "}
                  <Link
                    target="_blank"
                    className="  hover:text-maincolor2 hover:underline duration-150  flex items-center justify-center"
                    href="https://www.linkedin.com/in/abdelmajid-zaddi-694b2b290/"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-5   flex  border-l pl-4 h-full flex-col">
              <Paragraph
                height="h-8"
                className="text-white lg:text-xl border-gray-50 opacity-100"
                text="AI/ML Solutions? <br> Deep Learning? NLP? Just call me!"
              />
              <div className=" mt-auto flex flex-col ">
                <Link href="https://abdelmajidzaddi.me/" className="uppercase ">
                  ©Abdelmajid ZADDI
                </Link>
                <span>Abdelmajid ZADDI © All Rights Reserved - 2025</span>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
