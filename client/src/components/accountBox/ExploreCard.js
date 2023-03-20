
import styled from "styled-components";
import { QUERY_PROJECTS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { Link } from "react-router-dom";

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
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];

  console.log(data);

  return (
    <ExploreContainer>
      {projects.map((projects) => (
        <div key={projects._id} className="explore__card">
          <div className="explore__card__title">
            <h3 className="project__title">
              <Link to={'/projects/' + projects._id} >
                Project Title: {projects.projectTitle}
              </Link>
            </h3>
          </div>
          <div className="explore__card__content">
            <h4 className="project__author">
              Project Author: {projects.projectAuthor}
            </h4>
          </div>
        </div>
      ))}
    </ExploreContainer>
  );
}

export default ExploreCard;

