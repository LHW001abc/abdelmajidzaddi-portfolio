"use client";
import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Header from "../components/Header";

const allCertificates = [
  {
    name: "DevOps Concepts",
    title: "DataCamp",
    img: "/certificates/DevOps Concepts-1.png",
    description: "Comprehensive DevOps course covering containerization, orchestration, and modern deployment practices.",
  },
  {
    name: "Intermediate Git",
    title: "DataCamp",
    img: "/certificates/Intermediate Git-1.png",
    description: "Mastered Git workflows, branching strategies, and advanced version control techniques.",
  },
  {
    name: "Introduction to Docker",
    title: "DataCamp",
    img: "/certificates/Introduction to Docker-1.png",
    description: "Docker containerization including image building, container management, and deployment.",
  },
  {
    name: "Introduction to Kubernetes",
    title: "DataCamp",
    img: "/certificates/Introduction to Kubernetes-1.png",
    description: "Kubernetes orchestration for managing containerized applications at scale.",
  },
  {
    name: "MLOps Concepts",
    title: "DataCamp",
    img: "/certificates/MLOps Concepts-1.png",
    description: "Model deployment, monitoring, and lifecycle management for production ML systems.",
  },
  {
    name: "MLOps Deployment and Life Cycling",
    title: "DataCamp",
    img: "/certificates/MLOps Deployment and Life Cycling-1.png",
    description: "Advanced MLOps practices for deploying and managing ML models in production.",
  },
  {
    name: "Introduction to Git",
    title: "DataCamp",
    img: "/certificates/Introduction to Git-1.png",
    description: "Fundamentals of Git version control for collaborative software development.",
  },
  {
    name: "Introduction to NoSQL",
    title: "DataCamp",
    img: "/certificates/Introduction to NoSQL-1.png",
    description: "NoSQL databases including MongoDB, Redis, and document-based data storage.",
  },
  {
    name: "Big Data Fundamentals with PySpark",
    title: "DataCamp",
    img: "/certificates/BigDataFundamentalswithPySpark-1.png",
    description: "Big data processing and analysis using Apache Spark and PySpark.",
  },
  {
    name: "Data Structures and Algorithms in Python",
    title: "DataCamp",
    img: "/certificates/Data Structures and Algorithms in Python-1.png",
    description: "Core data structures and algorithms implementation in Python.",
  },
  {
    name: "Containerization and Virtualization Concepts",
    title: "DataCamp",
    img: "/certificates/Containerization and Virtualization Concepts-1.png",
    description: "Understanding containerization and virtualization technologies.",
  },
  {
    name: "Introduction to Apache Kafka",
    title: "DataCamp",
    img: "/certificates/Introduction to Apache Kafka-1.png",
    description: "Event streaming and message queuing with Apache Kafka.",
  },
  {
    name: "Introduction to dbt",
    title: "DataCamp",
    img: "/certificates/Introduction to dbt-1.png",
    description: "Data transformation and modeling using dbt (data build tool).",
  },
  {
    name: "Introduction to Object-Oriented Programming",
    title: "DataCamp",
    img: "/certificates/Introduction to Object-Oriented-1.png",
    description: "Object-oriented programming principles and design patterns.",
  },
  {
    name: "Streaming Concepts",
    title: "DataCamp",
    img: "/certificates/Streaming Concepts-1.png",
    description: "Real-time data streaming concepts and architectures.",
  },
  {
    name: "Supervised Learning with scikit-learn",
    title: "DataCamp",
    img: "/certificates/Supervised Learning with scikit-learn-1.png",
    description: "Machine learning with scikit-learn for classification and regression.",
  },
  {
    name: "Understanding Modern Data Architecture",
    title: "DataCamp",
    img: "/certificates/Understanding Modern Data Architecture-1.png",
    description: "Modern data architecture patterns and best practices.",
  },
  {
    name: "Writing Efficient Python Code",
    title: "DataCamp",
    img: "/certificates/Writing Efficient Python Code-1.png",
    description: "Python optimization techniques and performance best practices.",
  },
  {
    name: "Golang",
    title: "KodeKloud",
    img: "/certificates/Go.png",
    description: "Go programming language fundamentals and best practices.",
  },
];

export default function CertificatesPage() {
  return (
    <section className="bg-mainBg min-h-screen pt-24">
      <MaxWidthWrapper>
        <Header text="Certificates" text2="My Professional Certifications" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {allCertificates.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1E1E1E] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={cert.img}
                  alt={cert.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white text-lg font-bold">{cert.name}</h3>
                <p className="text-maincolor text-sm mb-2">{cert.title}</p>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
