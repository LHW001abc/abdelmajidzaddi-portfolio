"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

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
    <>
      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 relative bg-mainBg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-blue-500 font-bold uppercase tracking-[0.2em] text-xs">Career Path</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-4 text-white">Professional Experience</h2>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto relative before:absolute before:left-[19px] md:before:left-1/2 before:top-4 before:bottom-4 before:w-[2px] before:bg-white/5 before:-translate-x-1/2">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Point */}
                <div className="absolute left-[19px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-4 border-slate-800 z-10 flex items-center justify-center">
                  <Briefcase size={16} className="text-blue-400" />
                </div>

                {/* Card Content */}
                <div className="w-full md:w-[45%] ml-14 md:ml-0">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:border-blue-500/20 transition-all group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{exp.date}</span>
                      <Calendar size={14} className="text-slate-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                    <p className="text-slate-300 font-medium mb-2 flex items-center">
                      <MapPin size={14} className="mr-2 text-slate-500" /> {exp.company}
                    </p>
                    <p className="text-slate-500 text-sm mb-4">{exp.location}</p>
                    <ul className="text-slate-400 text-sm leading-relaxed mb-6 list-disc ml-4 space-y-1">
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((t) => (
                        <span key={t} className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-slate-300 font-bold uppercase">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for reverse layout */}
                <div className="hidden md:block md:w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6 relative bg-mainBg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-xs">Learning Path</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-4 text-white">Education</h2>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto relative before:absolute before:left-[19px] md:before:left-1/2 before:top-4 before:bottom-4 before:w-[2px] before:bg-white/5 before:-translate-x-1/2">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Point */}
                <div className="absolute left-[19px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-4 border-slate-800 z-10 flex items-center justify-center">
                  <GraduationCap size={16} className="text-emerald-400" />
                </div>

                {/* Card Content */}
                <div className="w-full md:w-[45%] ml-14 md:ml-0">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:border-emerald-500/20 transition-all group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">{edu.date}</span>
                      <Calendar size={14} className="text-slate-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-emerald-400 transition-colors">{edu.title}</h3>
                    <p className="text-slate-300 font-medium mb-4 flex items-center">
                      <MapPin size={14} className="mr-2 text-slate-500" /> {edu.institution}
                    </p>
                    <ul className="text-slate-400 text-sm leading-relaxed list-disc ml-4 space-y-1">
                      {edu.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for reverse layout */}
                <div className="hidden md:block md:w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyJourney;
