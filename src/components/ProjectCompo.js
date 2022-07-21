import React from "react";

export default function ProjectCompo(props) {
  return (
    <div class="inner-info pb">
      <h1 class="sub-heading">{props.name}</h1>
      <h2 class="date-heading">{props.date}</h2>
      <p class="info-details">
        {props.info}
        <br />
        to see it and learn more .
        <a
          href={props.link}
          class="web-link"
          target="_blank"
        >
          more
        </a>
      </p>
    </div>
  );
}
