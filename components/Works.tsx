"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Project() {
  const { theme } = useTheme();

  const projects = [
    {
      src: "/project1.jpg",
      title: "Taskora",
      desc: "Task management app to organize daily tasks with simple status navigation.",
      tools: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://taskora-phi.vercel.app/",
    },
    {
      src: "/project2.jpg",
      title: "MediMine",
      desc: "AI-powered health assistant that analyzes symptoms and provides basic insights.",
      tools: ["Next.js", "Express.js", "TypeScript", "Tailwind CSS"],
      link: "https://medimine-frontend.vercel.app/",
    },
    {
      src: "/project3.jpg",
      title: "ResuMatch",
      desc: "Telegram-based web app to analyze resumes and match job opportunities automatically.",
      tools: ["Next.js", "Tailwind CSS", "Telegram API", "n8n", "Supabase"],
      link: "https://resumatch-ivory.vercel.app/",
    },
    {
      src: "/project4.jpg",
      title: "My Portfolio",
      desc: "Personal portfolio showcasing my work.",
      tools: ["Next.js", "Tailwind CSS", "Vercel"],
      link: "https://web-personal-eosin.vercel.app/",
    },
  ];

  return (
    <section
      id="project"
      className={`relative min-h-screen w-full py-20 transition-colors duration-500
    ${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-[#f8fbfc] text-black"}`}
    >

      <div className="max-w-6xl mx-auto px-5 md:px-10">
        {/* Title */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            Projects
          </motion.h2>
          <p className="text-sm opacity-75">
            Some featured works I’ve built.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5">

          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5
            ${theme === "dark" ? "bg-[#13282c]" : "bg-white"}
            shadow-sm hover:shadow-md`}
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                {/* Image */}
                <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden">

                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm sm:text-base font-semibold mb-1">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm opacity-70 mb-2 line-clamp-2">
                    {project.desc}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="text-[11px] sm:text-xs px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-blue-500">
                    View →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>


  );
}
