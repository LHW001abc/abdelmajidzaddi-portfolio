"use client";
import Image from "next/image";
import { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const testimonials = [
  {
    quote:
      "Comprehensive DevOps course covering containerization, orchestration, and modern deployment practices for production-ready applications.",
    name: "DevOps Concepts",
    title: "DataCamp",
    img: "/certificates/DevOps Concepts-1.png",
    link: "",
  },
  {
    quote:
      "Mastered Git workflows, branching strategies, and advanced version control techniques for collaborative software development.",
    name: "Intermediate Git",
    title: "DataCamp",
    img: "/certificates/Intermediate Git-1.png",
    link: "",
  },
  {
    quote:
      "Learned Docker containerization including image building, container management, and deployment strategies.",
    name: "Introduction to Docker",
    title: "DataCamp",
    img: "/certificates/Introduction to Docker-1.png",
    link: "",
  },
  {
    quote:
      "Explored Kubernetes orchestration for managing containerized applications at scale with deployment and service management.",
    name: "Introduction to Kubernetes",
    title: "DataCamp",
    img: "/certificates/Introduction to Kubernetes-1.png",
    link: "",
  },
  {
    quote:
      "Comprehensive MLOps course covering model deployment, monitoring, and lifecycle management for production ML systems.",
    name: "MLOps Concepts",
    title: "DataCamp",
    img: "/certificates/MLOps Concepts-1.png",
    link: "",
  },
];

export default function ServicesHover() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <MaxWidthWrapper className="flex flex-col md:flex-row gap-8 items-start p-4 md:p-8 text-white">
      {/* Left Side Image */}
      <div className="w-full md:w-2/3 h-[50vh] md:h-[80vh] relative">
        <Image loading="lazy"
          fill
          src={testimonials[activeIndex].img}
          alt={testimonials[activeIndex].name}
          className="object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side List */}
      <div className="w-full md:w-1/3 space-y-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`cursor-pointer py-4 px-6 rounded-lg transition-all duration-300 shadow-md ${
              activeIndex === index ? "bg-maincolor text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <h3 className="text-lg font-bold">
              {index + 1}. {testimonial.name}
            </h3>
            <p className="text-sm">{testimonial.title}</p>
          </div>
        ))}
        <Link href="/certificates" className="block mt-4">
          <Button className="w-full rounded-full">View All Certificates</Button>
        </Link>
      </div>
    </MaxWidthWrapper>
  );
}
