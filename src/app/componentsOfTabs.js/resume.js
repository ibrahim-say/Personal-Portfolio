import React from "react";

import Title from "../components/title";

import Education from "../components/education";
import Experience from "../components/experience";
import Skills from "../components/skills";

function Resume() {
  return (
    <div>
      <Title title="Resume" />
      <Education />
      <Experience />
      <Skills/>

    </div>
  );
}

export default Resume;
  