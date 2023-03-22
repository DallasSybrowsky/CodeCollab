import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  .AboutContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about__title_box h1 {
    margin: 2rem;
    font-family: montserrat;
    color: var(--color-yellow);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about__details_box h3 {
    margin: 2rem 6rem 1rem 6rem;
    font-family: montserrat;
    color: var(--color-light-blue);
    text-align: center;

/* Tablet responsive styles */
@media (max-width: 840px) {
  .AboutContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .about__title_box h1 {
    margin: 0.5rem;
    font-family: montserrat;
    color: var(--color-yellow);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .about__details_box h3 {
    margin: 2rem 2rem 1rem 2rem;
    font-family: montserrat;
    color: var(--color-light-blue);
    text-align: center;
  }
}

/* Mobile responsive styles */
@media (max-width: 450px) {
  .logo {
    width: 100%;
    min-width: 100%;
    margin-bottom: -3rem;
  }
  .navbar {
    align-items: flex-start;
    flex-direction: row;
  }
  .nav__links {
    padding: 0;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  }
  
  .nav__links li {
    margin: 1rem 0;
  }

  .nav__links a {
    margin: 0;
    font-size: 1.5rem;
  }
}
`;

function About() {
  return (
    <AboutContainer>
      <div className="about__title_box">
        <h1 className="about__title">Our Mission</h1>
        <div className="about__details_box">
          <h3 className="about__details">
            We are a group of passionate recent graduates of a coding bootcamp
            who want to continue working on the projects we are passionate
            about! We also know how important networking is in a new career
            field. We built CodeCollab in order to fill our need for a
            collaborative environment where new grads can come to start
            projects, continue previous ones, or just find like-minded people in
            our same situation.
          </h3>
        </div>
      </div>
    </AboutContainer>
  );
}

export default About;
