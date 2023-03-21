import React from "react";
import styled from "styled-components";
import { QUERY_USER } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import AuthService from "../../utils/auth";
import { Link } from "react-router-dom";

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

  .Link-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  
  .profile-button {
    font-family: "Courier Prime", monospace;
    transition: 0.5s;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background: #ffc442;
    font-family: "Courier Prime", monospace;
    box-shadow: 0px 7px 0px 0px #cf920d;
    margin-bottom: 25px;
    width: 80%;
    height: 10vh;
    margin-top: 20px;
    color: #175d8f;

    font-weight: 600;
    text-decoration: none;
    font-size: 20px;
    padding: 10px;
    padding-top: 7px;
    transition: 0.5s;
  }

  button:hover {
    box-shadow: none;
    transform: translateY(5px);
    transition: all 0.1s linear;
  }

  button:hover {
    box-shadow: none;
    transform: translateY(5px);
    transition: all 0.1s linear;
  }

  button:focus {
    outline: none;
    text-decoration: none;
  }
`;

function ProfileCard(props) {
  // TODO: This is dummy data - get real data through query
  const test = [
    {
      projectTitle: "Bibliomania",
      projectText: "Connect with new books!",
      projectAuthor: "Dallas Sybrowsky",
      createdAt: "2021-03-01T00:00:00.000Z",
      comments: [],
    },
    {
      projectTitle: "FidoFind",
      projectText: "Connect with new books!",
      projectAuthor: "Dallas Sybrowsky",
      createdAt: "2021-03-01T00:00:00.000Z",
      comments: [],
    },
    {
      projectTitle: "New Portfolio",
      projectText: "Connect with new books!",
      projectAuthor: "Dallas Sybrowsky",
      createdAt: "2021-03-01T00:00:00.000Z",
      comments: [],
    },
  ];

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: AuthService.getUsername() },
  });
  const projects = data?.user.projects || [];
  console.log(projects);

  const renderProjects = () => {
    let result = null;

    if (projects) {
      result = projects.map((project, i) => {
        return (
          <div key={i} className="explore__card">
            <div className="explore__card__title">
              <h3 className="project__title">
                {/* <a href="projects/1234asdf">Project TItle: blah</a> */}
                <Link to={`/projects/${project._id}`}>
                  Project Title: {project.projectTitle}
                </Link>
              </h3>
            </div>
            {/* <div className="explore__card__content"> */}
            {/* <h4 className="project__author">
                Project Description: {project.projectDescription}
              </h4> */}
            {/* <button className="share-button"> share your project</button> */}
            {/* </div> */}
          </div>
        );
      });
    }

    return result;
  };

  return (
    <ProfileContainer>
      {/* <div className="profile-button"><a href="projectform">Create a Project</a></div> */}
      <Link to="/projectform" className="Link-btn">
        <button className="profile-button  content">
          Create a new project
        </button>
      </Link>
      {renderProjects()}
    </ProfileContainer>
  );
}
export default ProfileCard;
