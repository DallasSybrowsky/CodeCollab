import React from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// import CommentForm from "./CommentForm";

import { QUERY_SINGLE_PROJECT } from "../../utils/queries";
import styled from "styled-components";
import { Link } from "react-router-dom";


const SinglePostContainer = styled.div`
.single-post-container {
  border: 1px solid #4dc4d2;
  border-radius: 5px;
  padding: 4rem;
  margin: 4rem;
  background-color: 
  
    display: flex;
    flex-direction: column;
    height: 100%;
  }


  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffc442;
  }

  h3 {
    font-size: 1rem;
    font-weight: bold;
    color: #4dc4d2;
    font-style: italic;
  }

  p {
    font-size: 2rem;
    color: #ffc442;
  }
  .blockquote-container {
    flex: 1; /* set to 1 to fill remaining space */
    border: 1px solid #ffc442;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
    background-color: #175d8f;
    overflow: auto;
  }
  
  blockquote {
    font-size: 1rem;
    color: #ffc442;
    border: none;
    padding: 0.5rem;
    overflow: auto;
    max-height: 100%;
    white-space: pre-wrap;
    padding: 1rem;
  }
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  



  
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-family: "Courier Prime", monospace;
  color: #4dc4d2;
  width: 200px;
  color: #175d8f;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  padding-top: 7px;
  transition: 0.5s;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background: #ffc442;
  margin-top: 20px;
  margin-bottom: 25px;

  box-shadow: 0px 7px 0px 0px #cf920d;
}
button:hover {
  box-shadow: none;
  transform: translateY(5px);
  transition: all 0.1s linear;
  
}
button:focus {
  outline: none;
  
}
.link-button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  text-decoration: none;
  font-family: "Courier Prime", monospace;
  

}


   





`;


const SingleProject = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { projectId } = useParams();
  console.log('hello world')
  console.log(projectId);
  const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
    // pass URL parameter
    variables: { projectId: projectId },
  });

  console.log(data);
  const project = data?.project || {};

  console.log(project);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <SinglePostContainer>
   
    <div className="my-3 single-post-container">
      <h2 className="card-header bg-dark text-light p-2 m-0">
        {project.projectTitle} <br />
      </h2>
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {project.projectAuthor} <br />
        <span style={{ fontSize: "1rem" }}>
          created this project on {project.createdAt} GMT.
        </span>
      </h3>
      <div className="bg-light py-4 blockquote-container">
        <blockquote
          className="p-4"
          style={{
            fontSize: "1.5rem",
            fontStyle: "italic",
            
            lineHeight: "1.5",
            overflow: "auto",
          }}
        >
          {project.projectDescription}
        </blockquote>
        
      </div>
     
    </div>
    <Link  className="link-button-wrapper" to="/projectform">
        <button className="profile-button  content">
          Join project
        </button>
      </Link>
   </ SinglePostContainer>
    
  );
};

export default SingleProject;