import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import Hero from "@/components/Hero";

import { usePortfolio } from "../contexts/PortfolioContext";

export default function Home() {
  const { projects, techSkills } = usePortfolio();

  return (
    <div className="min-h-screen w-full font-worksans">
      <Hero />
      <section className="m-12 text-center">
        <h2 className="text-3xl font-semibold">Technical Skills</h2>
        <div className="mt-4 flex flex-wrap items-center justify-center space-x-2">
          {techSkills.map((skill, index) => (
            <span
              key={index}
              className=" shadow-xl text-gray-700 px-3 py-2 font-semibold rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
      <section className="m-12 mt-36 text-center">
        <h2 className="text-3xl font-semibold">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="p-2 whitespace-normal break-words">
                  {project.description}
                </p>
                <p className="mb-6">
                  <strong>Technologies Used:</strong> {project.tech.join(", ")}
                </p>
                <a
                  href={project.link}
                  className="text-gray-700 mb-4 inline-flex items-center gap-2 hover:underline"
                >
                  View Project Live <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
