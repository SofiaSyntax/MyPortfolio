import { useState } from "react";
import { usePortfolio } from "../contexts/PortfolioContext";
import Navbar from "../components/Navbar";

export default function Admin() {
  const {
    projects,
    addProject,
    editProject,
    deleteProject,
    techSkills,
    addTechSkill,
    deleteTechSkill,
  } = usePortfolio();

  const [loggedIn, setLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [newProject, setNewProject] = useState({
    image: "",
    title: "",
    description: "",
    tech: "",
    link: "",
  });
  const [newSkill, setNewSkill] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editProjectId, setEditProjectId] = useState(null);

  function handleLogin() {
    if (credentials.username === "admin" && credentials.password === "pass") {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  }

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProject((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  }

  function handleAddProject() {
    if (editMode) {
      editProject(editProjectId, {
        ...newProject,
        tech: newProject.tech.split(","),
      });
      setEditMode(false);
      setEditProjectId(null);
    } else {
      addProject({
        id: Date.now(),
        ...newProject,
        tech: newProject.tech.split(","),
      });
    }
    setNewProject({
      title: "",
      description: "",
      tech: "",
      link: "",
      image: "",
    });
  }

  function handleAddSkill() {
    addTechSkill(newSkill);
    setNewSkill("");
  }

  function handleEditProject(projectId) {
    const projectToEdit = projects.find((project) => project.id === projectId);
    setNewProject({
      image: projectToEdit.image,
      title: projectToEdit.title,
      description: projectToEdit.description,
      tech: projectToEdit.tech.join(", "),
      link: projectToEdit.link,
    });
    setEditMode(true);
    setEditProjectId(projectId);
    console.log("Project to edit:", projectToEdit);
    console.log("Set editProjectId:", projectId);
  }

  if (!loggedIn) {
    return (
      <div>
        <Navbar />
        <div className="p-8">
          <h2 className="font-bold text-2xl">Login to Admin</h2>
          <input
            type="text"
            placeholder="Username"
            className="mt-2 p-2 border"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-2 ml-2 p-2 border"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <button
            onClick={handleLogin}
            className="mt-4 ml-2 p-2 bg-blue-500 text-white"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div container className="p-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Admin Dashboard
        </h2>

        <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 items-start">
          {/* Add New Project */}
          <section className="flex-1 mt-8">
            <h3 className="text-2xl font-semibold text-center mb-2">
              {editMode ? "Edit Project" : "Add New Project"}
            </h3>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Project Title"
                className="p-2 border w-full"
                value={newProject.title}
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
              />
              <textarea
                placeholder="Project Description"
                className="p-2 border w-full"
                value={newProject.description}
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    description: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Technologies (comma separated)"
                className="p-2 border w-full"
                value={newProject.tech}
                onChange={(e) =>
                  setNewProject({ ...newProject, tech: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Project Link"
                className="p-2 border w-full"
                value={newProject.link}
                onChange={(e) =>
                  setNewProject({ ...newProject, link: e.target.value })
                }
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="p-2 border w-full"
              />
              <button
                onClick={handleAddProject}
                className="mt-4 p-2 bg-green-500 text-white w-full md:w-auto"
              >
                {editMode ? "Save Changes" : "Add Project"}
              </button>
            </div>
          </section>

          {/* Add Tech Skill */}
          <section className="flex-1 p-0 m-0">
            <h3 className="text-2xl font-semibold text-center mb-2">
              Add Tech Skill
            </h3>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Tech Skill"
                className="p-2 border w-full"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <button
                onClick={handleAddSkill}
                className="mt-4 p-2 bg-green-500 text-white w-full md:w-auto"
              >
                Add Skill
              </button>
            </div>
          </section>

          <section className="m-0">
            <h3 className="text-2xl font-semibold mb-2">Current Tech Skills</h3>
            <ul>
              {techSkills.map((skill, index) => (
                <li key={index}>
                  <span>{skill}</span>
                  <button
                    onClick={() => deleteTechSkill(skill)}
                    className="text-red-500 ml-2"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="m-12 mt-24 text-center">
          <h3 className="text-3xl font-semibold mb-10">Current Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => handleEditProject(project.id)}
                    className="text-blue-500 ml-2"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
