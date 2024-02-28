import React from "react";
import project1 from "/public/images/project1.png";
import project2 from "/public/images/project2.png";
import project3 from "/public/images/project3.png";
import project4 from "/public/images/project4.png";
import project5 from "/public/images/project5.png";
import project6 from "/public/images/project6.png";
import ProjectCard from "./projectCard";
function AllProjects({ type }) {
  return (
    <div className="row m-0 gy-5 ">
      {(type === "template" || type === "all") && (
        <>
          <ProjectCard
            link="https://ibrahim-say.github.io/template1/"
            src={project1}
            name="Leon Template"
            type="Template"
          />
          <ProjectCard
            link="https://ibrahim-say.github.io/template2/"
            src={project2}
            name="Kasper Template"
            type="Template"
          />
          <ProjectCard
            link="https://ibrahim-say.github.io/template3/"
            src={project3}
            name="Elzero Template"
            type="Template"
          />
          <ProjectCard
            link="https://ibrahim-say.github.io/Template4/"
            src={project4}
            name="Dashboard Template"
            type="Template"
          />
        </>
      )}
      {(type === "game" || type === "all") && (
        <>
          <ProjectCard
            link="https://ibrahim-say.github.io/Image_Editor/"
            src={project5}
            name="Image Editor"
            type="Image Editor"
          />
          <ProjectCard
            link="https://ibrahim-say.github.io/memory-game/"
            src={project6}
            name="Memory Game"
            type="Games"
          />
        </>
      )}
    </div>
  );
} 

export default AllProjects;
