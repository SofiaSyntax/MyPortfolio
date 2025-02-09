import { createContext, useState, useEffect, useContext } from "react";

const PortfolioContext = createContext();

export function usePortfolio() {
  return useContext(PortfolioContext);
}

export function PortfolioProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [techSkills, setTechSkills] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const storedTechSkills =
      JSON.parse(localStorage.getItem("techSkills")) || [];

    setProjects(storedProjects);
    setTechSkills(storedTechSkills);
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("techSkills", JSON.stringify(techSkills));
  }, [projects, techSkills]);

  const addProject = (project) => setProjects([...projects, project]);

  const editProject = (id, updatedProject) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id ? { ...project, ...updatedProject } : project
      )
    );
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const addTechSkill = (skill) => setTechSkills([...techSkills, skill]);
  const deleteTechSkill = (skill) =>
    setTechSkills(techSkills.filter((s) => s !== skill));

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        addProject,
        editProject,
        deleteProject,
        techSkills,
        addTechSkill,
        deleteTechSkill,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}
