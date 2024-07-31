"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import project_1 from "../public/project-1.png";
import project_2 from "../public/project-2.png";
import project_3 from "../public/project-3.png";
import { FaDiagramProject } from "react-icons/fa6";

const Projects = () => {
  return (
    <section id="projects" className="bg-foreground py-4 px-8">
      <h1 className="flex items-center gap-2 font-medium text-2xl text-background mb-6">
        <FaDiagramProject />
        My Projects
      </h1>
      <div className="md:flex-col md:gap-6">
        <ProjectCard
          title="Code Lang Insights"
          src={project_1}
          link="https://codelanginsights-123.web.app/"
        />
        <ProjectCard
          title="DashForge"
          src={project_2}
          link={"https://github.com/ansariafzal-ka/dashforge"}
        />
        <ProjectCard
          title="WanderWay - Landing Page"
          src={project_3}
          link={"https://wanderway-landing-page.vercel.app/"}
        />
      </div>
    </section>
  );
};

export default Projects;
