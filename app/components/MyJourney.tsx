import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Paragraph from "./Paragraph";

const MyJourney = () => {
  const experience = [
    {
      role: "AI Engineer",
      company: "Futurate By Infosysta",
      date: "Feb 2025 - Present",
      location: "Casablanca, Morocco",
      details: [
        "Building production-ready AI/ML solutions using Python, PyTorch, and Hugging Face.",
        "Developing and deploying NLP and GenAI applications with FastAPI and Django.",
        "Working with LLMs and transformer models for various business applications.",
        "Implementing MLOps practices with Docker and cloud platforms.",
      ],
      tools: ["Python", "PyTorch", "Hugging Face", "FastAPI", "Docker", "LLM", "NLP"],
    },
    {
      role: "AI Developer & Freelancer",
      company: "Upwork & ADAONE",
      date: "Apr 2024 - Present",
      location: "Remote",
      details: [
        "Building computer vision solutions using OpenCV and YOLO Framework.",
        "Developing ML models with TensorFlow and PyTorch for diverse client needs.",
        "Deploying AI solutions on AWS with Flask APIs and CI/CD pipelines.",
        "Working with clients globally on cutting-edge AI projects.",
      ],
      tools: ["Python", "TensorFlow", "PyTorch", "AWS", "Flask", "OpenCV"],
    },
    {
      role: "NLP Engineering Intern",
      company: "3D SMART FACTORY",
      date: "Apr 2023 - Jul 2023",
      location: "Rabat, Morocco",
      details: [
        "Developed NLP solutions for industrial applications.",
        "Built data pipelines using Streamlit, Pandas, and NumPy.",
        "Trained and fine-tuned deep learning models with PyTorch.",
      ],
      tools: ["Python", "PyTorch", "Streamlit", "Pandas", "Docker"],
    },
  ];

  const education = [
    {
      title: "Software Engineering Degree",
      institution: "FST Mohammedia - Hassan II University",
      date: "2022 - 2025",
      details: [
        "Software Engineering and Computer Systems Integration program.",
        "Focus on AI, Machine Learning, and Data Engineering.",
      ],
    },
    {
      title: "DEUST in Mathematics & Computer Science",
      institution: "FST Mohammedia - Hassan II University",
      date: "2020 - 2022",
      details: [
        "Diploma of University Studies in Science and Technology.",
        "Foundation in Mathematics, Physics and Computer Science.",
      ],
    },
    {
      title: "Baccalaureate - Mathematics Sciences",
      institution: "Mohammed VI High School, Taroudant",
      date: "2019 - 2020",
      details: [
        "Mathematics Science A, French option.",
        "Strong foundation in mathematical reasoning and problem-solving.",
      ],
    },
  ];

  return (
    <section className="bg-mainBg">
      <MaxWidthWrapper className="grid   grid-cols-4 gap-4 mx-auto text-white p-6">
        <div className="col-span-1 sticky top-6">
          <div className="mb-12">
            <h3 className="text-lg font-bold uppercase">Experience</h3>
          </div>
          <div>
            <h3 className="text-lg font-bold uppercase">Education</h3>
          </div>
        </div>

        <div className="col-span-3 space-y-12">
          <div>
            {experience.map((item, index) => (
              <div key={index} className="mb-8">
                <h4 className="text-xl items-start flex font-semibold">
                  <Paragraph className="!font-semibold !text-xl" text={item.role} />,{" "}
                  <span className="text-maincolor2">{item.company}</span>
                </h4>
                <p className="text-gray-400 text-sm mb-2">
                  {item.date} / {item.location}
                </p>
                <ul className="list-disc ml-6 mb-2">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <div className="flex lg:flex-nowrap flex-wrap gap-2">
                  {item.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            {education.map((item, index) => (
              <div key={index} className="mb-8">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-gray-400 text-sm mb-2">
                  {item.institution} / {item.date}
                </p>
                <ul className="list-disc ml-6">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default MyJourney;
