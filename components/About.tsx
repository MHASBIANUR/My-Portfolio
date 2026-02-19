"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPhp,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiLaravel,
  SiMysql
} from "react-icons/si";

import { useTheme } from "next-themes";


export default function About() {
  const { theme } = useTheme();

  const monoIcon =
    theme === "dark" ? "text-white" : "text-gray-800";

  const techIcons = [
    //  BACKEND 
    { icon: <SiExpress className={monoIcon} />, name: "Express.js" },
    { icon: <FaPhp className="text-[#777bb4]" />, name: "PHP" },
    { icon: <FaNodeJs className="text-[#6cc24a]" />, name: "Node.js" },
    { icon: <SiLaravel className="text-[#ff2d20]" />, name: "Laravel" },

    // FRONTEND 
    { icon: <FaHtml5 className="text-[#e34c26]" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS" },
    { icon: <FaJsSquare className="text-[#f7df1e]" />, name: "JavaScript" },
    { icon: <SiTypescript className="text-[#3178c6]" />, name: "TypeScript" },
    { icon: <FaReact className="text-[#61DBFB]" />, name: "React" },
    { icon: <SiNextdotjs className={monoIcon} />, name: "Next.js" },
    { icon: <SiTailwindcss className="text-[#38bdf8]" />, name: "Tailwind CSS" },

    // DATABASE
    { icon: <SiMysql className="text-[#00758f]" />, name: "MySQL" },
    { icon: <SiPostgresql className="text-[#31648c]" />, name: "PostgreSQL" },

    // TOOLS 
    { icon: <FaGitAlt className="text-[#f1502f]" />, name: "Git" },
  ];

  const services = [
    {
      img: "/02.svg",
      title: "Fullstack Web Development",
      desc: "Building complete web applications from frontend UI to backend APIs and databases.",
      delay: 0.1,
    },
    {
      img: "/03.svg",
      title: "Frontend Engineering",
      desc: "Creating responsive, clean, and interactive user interfaces using React, Next.js, and Tailwind CSS.",
      delay: 0.3,
    },
    {
      img: "/01.svg",
      title: "Backend & API Development",
      desc: "Developing scalable REST APIs with Node.js, Express, Prisma, and both SQL/NoSQL databases.",
      delay: 0.5,
    },
  ];

  return (
    <section
      id="about"
      className={`relative min-h-screen flex flex-col justify-center py-20 px-6 sm:px-10 md:px-20 overflow-hidden
        transition-colors duration-300
        ${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-black"}`}
    >
      {/* Background blur */}
      <div
        className={`absolute top-[-100px] left-[-100px] w-[250px] h-[250px] rounded-full blur-3xl opacity-50 -z-10
        ${theme === "dark" ? "bg-[#112224]" : "bg-[#e9f3f6]"}`}
      />
      <div
        className={`absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full blur-3xl opacity-40 -z-10
        ${theme === "dark" ? "bg-[#13282c]" : "bg-[#e0f0f5]"}`}
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
      >
        About Me
      </motion.h2>
      <br />

      {/* Content Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">

        {/* Text */}
        <motion.div
          className="flex-1 text-justify text-base sm:text-lg leading-relaxed space-y-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            Hi, I’m <b className="text-[#6f1d1b] dark:text-[#e0a899]">M. Hasbianur</b>,
            a Fullstack Developer focused on building scalable, efficient, and
            well-structured web applications — from intuitive frontend interfaces
            to robust backend architectures.
          </p>

          <p>
            I work across both JavaScript and PHP ecosystems, developing modern
            applications using Node.js, Express, Laravel, React, and Next.js.
            I have experience designing RESTful APIs, managing relational databases
            like MySQL and PostgreSQL, and implementing clean, maintainable code
            that prioritizes performance and user experience.
          </p>

          <p>
            My goal is to continuously grow as a developer while delivering
            digital solutions that are reliable, scalable, and impactful.
          </p>

          <div className="mt-8">
            <a
              href="/CV.pdf"
              download="CV-M.Hasbianur.pdf"
              className={`border px-8 py-3 rounded-none uppercase tracking-[2px] font-semibold transition-all duration-300
        ${theme === "dark"
                  ? "border-white text-white hover:bg-white hover:text-[#0c1618]"
                  : "border-[#0c1618] text-[#0c1618] hover:bg-[#0c1618] hover:text-white"
                }`}
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Tech Icons */}
        <motion.div
          className="
            flex-1 
            grid 
            grid-cols-3 
            xs:grid-cols-3
            sm:grid-cols-4 
            md:grid-cols-3 
            gap-4 sm:gap-6 
            justify-items-center
          "
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {techIcons.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`
          flex flex-col items-center justify-center
          w-full h-16 sm:h-20
          rounded-lg border
          transition-all
          ${theme === "dark"
                  ? "bg-[#13282c] border-white/10"
                  : "bg-[#f9fafb] border-black/10"}
        `}
            >

              <div className="text-3xl sm:text-5xl mb-1 p-2 rounded-md">
                {tech.icon}
              </div>

              <p className="text-sm sm:text-base font-medium text-center">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* What I Do */}
      <motion.div
        className="mt-24 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-2xl font-semibold mb-6">What I Do</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className={`rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-2
                ${theme === "dark" ? "bg-[#13282c]" : "bg-[#f7fbfd]"}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: service.delay, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={80}
                  height={80}
                  className={`object-contain transition-all duration-300
                    ${theme === "dark" ? "invert brightness-0" : ""}
                  `}
                />

              </div>
              <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
              <p className="text-base leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
