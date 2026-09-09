import React from "react";

import Title from "../ui/Title";

import Education from "./education/Education";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";

function ResumeModal() {
  return (
    <div>
      <Title title="Resume" />
      <Education />
      <Experience />
      <Skills/>

    </div>
  );
}

export default ResumeModal;
  