import React from "react";

function Skills() {
  return (
    <div id="skills-in" class="skills">
      <div class="container">
        <div class="heading-container">
          <h1 class="main-heading">skills</h1>
        </div>
        <div class="info">
          <p class="extra-heading">my programming language proficiency</p>
          <div class="top">
            <div class="box">
              <h1>javascript</h1>
              <div class="progress-div javascript"><span></span></div>
            </div>
            <div class="box">
              <h1>reactjs</h1>
              <div class="progress-div reactjs"><span></span></div>
            </div>
            <div class="box">
              <h1>html&ccs</h1>
              <div class="progress-div web"><span></span></div>
            </div>

            <div class="box">
              <h1>java</h1>
              <div class="progress-div java"><span></span></div>
            </div>

            <div class="box">
              <h1>gitHub</h1>
              <div class="progress-div git"><span></span></div>
            </div>

            <div class="box">
              <h1>database</h1>
              <div class="progress-div data-base"><span></span></div>
            </div>

            <div class="box">
              <h1>data structure</h1>
              <div class="progress-div data-structure"><span></span></div>
            </div>

            <div class="box">
              <h1>design patterns</h1>
              <div class="progress-div design-pattern"><span></span></div>
            </div>

            <div class="load">
              <p class="loading">loading ...</p>
              <div class="box">
                <h1>php</h1>
                <div class="progress-div php"><span></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
