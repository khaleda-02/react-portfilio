import React from "react";
import ProjectCompo from "./ProjectCompo";
import data from  "../ProjectsData"
function projects() {
  return (
    <div class="projects pb">
      <div class="container">
        <div class="heading-container">
          <h1 class="main-heading">work/projects</h1>
        </div>
        <div class="info">
          <ProjectCompo {...data.kasper} />
          <ProjectCompo {...data.gaming} />
          <ProjectCompo {...data.game} />
          <ProjectCompo {...data.resume} />
        </div>
      </div>
    </div>
  );
}
export default projects;
