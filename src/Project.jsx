import React from "react";

const Project = ({ project }) => {
  const isLocalImage = String(project.image).startsWith("images/projects/");

  return (
    <td className="project-cell">
      <a href={project.url} target="#">
        <div className="container">
          <img
            className={
              isLocalImage ? "project-image" : "project-image android-image"
            }
            src={project.image}
            alt={project.name}
          />
          <div className="middle">
            <div className="text">
              {project.name}
              <br />
              <br />
              {project.description}
            </div>
          </div>
        </div>
      </a>
    </td>
  );
};

export default Project;
