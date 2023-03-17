import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const ProfileContainer = styled.div`
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
  }
  .profile-button {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--color-dark-blue);
    color: var(--color-yellow);
    border: 1px solid var(--color-yellow);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    font-size: 1.2rem;
    font-family: montserrat;
    text-decoration: none;
    text-align: center;
    transition: 0.2s ease-in-out;
    margin 0 auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .profile-button:hover {
    background-color: var(--color-yellow);
    color: var(--color-dark-blue);
    border: 1px solid var(--color-dark-blue);
    box-shadow: 0 0 0.5rem var(--color-dark-blue);
  }
  .share-button {
    width: 15%;
    display: flex;
    justify-content: center;  
    align-items: center;
    background-color: var(--color-dark-blue);
    color: var(--color-yellow);
    border: 1px solid var(--color-yellow);
    border-radius: 12rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    font-size: 1.0rem;
    font-family: montserrat;
    text-decoration: none;
    text-align: center;
    transition: 0.2s ease-in-out;
    margin 0 auto;

  }
  .share-button:hover {
    background-color: var(--color-yellow);
    color: var(--color-dark-blue);
    border: 1px solid var(--color-dark-blue);
    box-shadow: 0 0 0.5rem var(--color-dark-blue);
  }

    



`;



function ProfileCard(props) {

   let data = props.data;
  return (
    
    <>
   
    <ProfileContainer>
    <div>
    <button className="profile-button">{props.titleButton} Create A Project</button>
      </div>
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
            Project Description{props.projectDescription}
          </h4>
          <button className="share-button"> share  your project</button>
        </div>
        </div>
    </ProfileContainer>
    </>
  );
   
     
}
export default ProfileCard;
