import React from "react";

function Home() {
  return (
    <div class="home">
      <div class="container">
        <div class="content">
          <h1>I'm khaled Ayman .</h1>
          <p>
            Based in Palestine. <span>Software Engineer and Web Devloper</span>.
            I think thoughts others don't so I could do things others won't.
          </p>
          <div class="links">
            <a
              class="linkedin"
              target="_blank"
              href="https://www.linkedin.com/in/khaled-elkhalili-656326244/"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              class="github"
              target="_blank"
              href="https://github.com/khaleda-02"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              class="insta"
              target="_blank"
              href="https://www.instagram.com/khaleda.02/"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              class="twitter"
              target="_blank"
              href="https://twitter.com/khaleda_02"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              class="youtube"
              target="_blank"
              href="https://www.youtube.com/channel/UCnGFAbBn5N-D8fGeDz8P0tQ"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <a href="#about-in" class="a">
        <i class="far fa-arrow-alt-circle-down"></i>
      </a>
    </div>
  );
}

export default Home;
