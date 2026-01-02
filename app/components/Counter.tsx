"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { FaLinkedin, FaProjectDiagram, FaSmile, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import GridContainer from "./GridContainer";
import MaxWidthWrapper from "./MaxWidthWrapper";

type Stat = {
  icon: React.ReactNode;
  title: string;
  count: number;
  prefix?: string;
  link?: string;
};

const stats: Stat[] = [
  {
    icon: <FaLinkedin size={32} color="#0077B5" />,
    title: "Connections on LinkedIn",
    count: 500,
    prefix: "+",
    link: "https://www.linkedin.com/in/abdelmajid-zaddi-694b2b290/",
  },
  { icon: <FaProjectDiagram size={32} color="#4CAF50" />, title: "AI/ML Projects", count: 15, prefix: "+" },
  { icon: <FaSmile size={32} color="#FFC107" />, title: "Happy Clients", count: 10, prefix: "+" },
  { icon: <FaCalendarAlt size={32} color="#673AB7" />, title: "Years of Experience", count: 2, prefix: "+" },
];

const Counter = () => {
  useEffect(() => {
    stats.forEach((_, i) => {
      gsap
        .timeline({
          scrollTrigger: {
            scroller: ".main-container",
            trigger: `#stat-${i}`,
            start: "top 80%",
          },
        })
        .fromTo(
          `#stat-${i} .count`,
          { innerText: 0 },
          {
            innerText: stats[i].count,
            duration: 2,
            snap: { innerText: 1 },
            ease: "power3.out",
            onUpdate: function () {
              const el = document.querySelector(`#stat-${i} .count`);
              if (el) el.innerText = Math.round(Number(this.targets()[0].innerText)).toString();
            },
          }
        );
    });
  }, []);
  return (
    <MaxWidthWrapper>
      <GridContainer cols={4} className=" gap-8 statttt justify-center  rounded-lg">
        {stats.map((stat, index) =>
          stat.link ? (
            <Link
              id={`stat-${index}`}
              className="flex flex-col  items-center text-center bg-white shadow-md p-6 rounded-lg"
              key={index}
              href={stat.link}
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="flex items-center gap-1">
                <span>{stat.prefix}</span> <div className="text-4xl font-bold count text-maincolor">0</div>
              </div>
              <div className="mt-2 text-lg font-medium text-gray-700">{stat.title}</div>
            </Link>
          ) : (
            <div
              key={index}
              id={`stat-${index}`}
              className="flex flex-col items-center text-center bg-white shadow-md p-6 rounded-lg"
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="flex items-center gap-1">
                <span>{stat.prefix}</span> <div className=" text-2xl lg:text-4xl font-bold count text-maincolor">0</div>
              </div>
              <div className="mt-2 text-lg font-medium text-gray-700">{stat.title}</div>
            </div>
          )
        )}
      </GridContainer>
    </MaxWidthWrapper>
  );
};

export default Counter;
