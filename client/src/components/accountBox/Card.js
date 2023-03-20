import React from "react";
import styled from "styled-components";
// import { useState, useEffect } from "react";

const ExploreContainer = styled.div`
  .ExploreContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    justify-content: center;
  }

  .explore__card {
    position: relative;
    background-color: var(--color-dark-blue);
    margin: 1rem;
    padding: 1rem 2rem;
    box-shadow: 0 0 0.5rem var(--color-dark-blue);
    border-radius: 1rem;
    max-width: 100vw;
    min-height: 132px;
    max-height: 15vh;
    transition: 0.2s ease-in-out;
  }

  .explore__card:hover {
    box-shadow: 0 0 0.5rem var(--color-light-blue);
  }

  .project__title {
    margin-top: 0.8rem;
    color: var(--color-yellow);
    text-shadow: 0.1rem 0.1rem 0.25rem var(--color-bg);
    font-size: 1.5rem;
    font-family: montserrat;
    text-decoration: none;
  }

  .project__title a {
    color: var(--color-yellow);
    text-shadow: 0.1rem 0.1rem 0.25rem var(--color-bg);
    font-size: 1.5rem;
    font-family: montserrat;
    text-decoration: none;
  }

  .project__title a:hover {
    text-shadow: 0.15rem 0.15rem 0.5rem var(--color-black);
  }

  .project__author {
    padding: 1rem 0 0 0.5rem;
    color: var(--color-bg);
    font-size: 1.1rem;
    font-family: montserrat;
`;

function ExploreCard(props) {
  return (
    <ExploreContainer>
      <div key={props.id} className="explore__card">
        <div className="explore__card__title">
          <h3 className="project__title">
            <a href="#">
              Project Title: Hard Coded Title{props.projectTitle}
            </a>
          </h3>
        </div>
        <div className="explore__card__content">
          <h4 className="project__author">
            Project Author: Hard Coded Author{props.projectAuthor}
          </h4>
        </div>
      </div>
    </ExploreContainer>
  );
}
export default ExploreCard;
