"use client";
import React, { useEffect, useState, useRef } from "react";
import SpaceBtn from "./SpaceBtn";
import lottie, { AnimationItem } from "lottie-web";
import confettiAnimation from "../data/conffite.json";

const CopyEmail = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const lottieContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (lottieContainerRef.current && !animationRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: lottieContainerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: confettiAnimation,
      });
    }
    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
        animationRef.current = null;
      }
    };
  }, []);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);

    if (animationRef.current) {
      animationRef.current.goToAndPlay(0);
    }

    setTimeout(() => {
      setCopiedType(null);
    }, 1000);
  };

  return (
    <div className="mt-5 text-white flex flex-col gap-4 items-center z-40 relative">
      <div 
        ref={lottieContainerRef}
        className={`absolute -bottom-5 right-0 w-[200px] h-[200px] ${copiedType ? "block" : "hidden"}`}
      />

      <SpaceBtn
        className="relative text-white z-30 hover:text-white"
        onClick={() => handleCopy("abdelmajidzaddi088@gmail.com", "email")}
      >
        <span className="z-20">{copiedType === "email" ? "Email is Copied!" : "Copy my email address"}</span>
      </SpaceBtn>
      <SpaceBtn
        className="relative text-white hover:text-white z-30"
        onClick={() => handleCopy("+212695557631", "phone")}
      >
        <span className="z-20">{copiedType === "phone" ? "Phone Number is Copied!" : "Copy my Phone Number"}</span>
      </SpaceBtn>
    </div>
  );
};

export default CopyEmail;
