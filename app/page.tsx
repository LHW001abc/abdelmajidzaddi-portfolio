"use client";
import dynamic from "next/dynamic";
const Intro = dynamic(() => import("./components/Intro"));
const MyWork = dynamic(() => import("./components/MyWork"));
const Me = dynamic(() => import("./components/Me"));
const WhoAmI = dynamic(() => import("./components/WhoAmI"));
const HealTheWorld = dynamic(() => import("./components/HealTheWorld"));
export default function Home() {
  return (
    <section className="bg-mainBg relative">
      <Intro />
      <MyWork />
      <Me />
      <WhoAmI />
      <HealTheWorld />
    </section>
  );
}
