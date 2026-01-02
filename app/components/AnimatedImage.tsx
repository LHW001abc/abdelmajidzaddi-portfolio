"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

// Lazy-load animation files to avoid unnecessary imports
const animationMap: Record<string, () => Promise<any>> = {
  "animate8.json": () => import("../data/animate8.json"),
  "animate9.json": () => import("../data/animate9.json"),
  "coffe.json": () => import("../data/coffe.json"),
  "dream.json": () => import("../data/dream.json"),
};

const AnimatedImage = ({ data = "animate1.json", className }: { data?: string; className?: string }) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    setIsClient(true);

    if (animationMap[data]) {
      animationMap[data]().then((mod) => setAnimationData(mod.default));
    }
  }, [data]);

  useEffect(() => {
    if (containerRef.current && animationData && !animationRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
        animationRef.current = null;
      }
    };
  }, [animationData]);

  if (!isClient || !animationData) {
    return <Image width={2000} height={2000} alt="animation" src="/placeholder.png" />;
  }

  return <div ref={containerRef} className={`${className || "max-w-[50%]"}`} />;
};

export default AnimatedImage;
