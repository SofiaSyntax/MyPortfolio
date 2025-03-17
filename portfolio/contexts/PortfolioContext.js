import { createContext, useState, useEffect, useContext } from "react";

const PortfolioContext = createContext();

export function usePortfolio() {
  return useContext(PortfolioContext);
}

export function PortfolioProvider({ children }) {
  // Hardcoded Tech Skills and Projects
  const techSkillsData = [
    "JavaScript",
    "React",
    "CSS",
    "HTML",
    "TailwindCSS",
    "GitHub",
    "WCAG",
    "Next.js",
    "Figma",
  ];

  const projectsData = [
    {
      id: 1,
      title: "Pokémon Card Site",
      description:
        "A user can view cards and save cards to their collection. This was a group project that utilized fetching data from an API",
      tech: ["React", "Next.js", "TailwindCSS"],
      image: "assets/Rectangle1.png",
      link: "https://pokemon-one-bay.vercel.app/",
    },
    {
      id: 2,
      title: "Zoom Redesign",
      description: "Creating a simplified version of the Zoom homepage.",
      tech: ["JavaScript", "HTML", "CSS", "Vite"],
      image: "assets/Rectangle2.png",
      link: "https://zoom-redesign-mu.vercel.app/",
    },
    {
      id: 3,
      title: "Todo-list",
      description:
        "A simple Todo-list where you can add, complete and remove todos.",
      tech: ["JavaScript", "HTML", "TailwindCSS", "React"],
      image: "assets/Rectangle3.png",
      link: "https://react-todo-list-i9us.vercel.app/",
    },
  ];

  const [projects, setProjects] = useState(projectsData);
  const [techSkills, setTechSkills] = useState(techSkillsData);

  // For using local storage

  // const [projects, setProjects] = useState([]);
  // const [techSkills, setTechSkills] = useState([]);

  // useEffect(() => {
  //   const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
  //   const storedTechSkills =
  //     JSON.parse(localStorage.getItem("techSkills")) || [];

  //   setProjects(storedProjects);
  //   setTechSkills(storedTechSkills);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("projects", JSON.stringify(projects));
  //   localStorage.setItem("techSkills", JSON.stringify(techSkills));
  // }, [projects, techSkills]);

  // const addProject = (project) => setProjects([...projects, project]);

  // const editProject = (id, updatedProject) => {
  //   setProjects((prevProjects) =>
  //     prevProjects.map((project) =>
  //       project.id === id ? { ...project, ...updatedProject } : project
  //     )
  //   );
  // };

  // const deleteProject = (id) => {
  //   setProjects(projects.filter((project) => project.id !== id));
  // };

  // const addTechSkill = (skill) => setTechSkills([...techSkills, skill]);
  // const deleteTechSkill = (skill) =>
  //   setTechSkills(techSkills.filter((s) => s !== skill));

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        // addProject,
        // editProject,
        // deleteProject,
        techSkills,
        // addTechSkill,
        // deleteTechSkill,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}
