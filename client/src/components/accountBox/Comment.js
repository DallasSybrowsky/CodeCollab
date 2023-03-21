import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ADD_COMMENT } from "../../utils/mutations";

import AuthService from "../../utils/auth";

const CommentContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
    padding: 1rem;
    width: 100%;
    max-width: 800px;
    padding: 1rem;
    border: 1px solid var(--color-dark-blue);
    border-radius: 0.5rem;
    background-color: var(--color-dark-blue);
    box-shadow: 0 0 0.5rem var(--color-dark-blue);
    margin: 1rem;
    padding: 1rem 2rem;
    transition: 0.2s ease-in-out;
  }

  h1 {
    color: var(--color-yellow);
    text-shadow: 0.1rem 0.1rem 0.25rem var(--color-bg);
    font-size: 1.5rem;
    font-family: montserrat;
  }
  textarea {
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: 1px solid var(--color-light-blue);
    border-radius: 0.5rem;
    background-color: var(--color-light-blue);
    box-shadow: 0 0 0.5rem var(--color-dark-blue);
    transition: 0.2s ease-in-out;
  }

  button {
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: 1px solid var(--color-light-blue);
    border-radius: 0.5rem;
    background-color: var(--color-light-blue);
    box-shadow: 0 0 0.5rem var(--color-dark-blue);
    transition: 0.2s ease-in-out;
  }
`;

function Comments({ projectId }) {
  const [commentText, setCommentText] = useState("");
  const [addComment, { error }] = useMutation(ADD_COMMENT);

  // this is the data from the join button
  const location = useLocation();

  function handleCommentChange(event) {
    const { name, value } = event.target;

    if (name === "commentText" && value.length <= 280) {
      setCommentText(value);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addComment({
        variables: {
          projectId,
          commentText,
          commentAuthor: AuthService.getUsername(),
        },
      });
      // Handle submitting the comment to the server or state management system
      console.log("Submitting comment:", commentText);
      setCommentText("");
    } catch (err) {
      console.error(err);
    }
  };

  console.log(location.state.projects);

  return (
    <CommentContainer>
      <div>
        <h1>Comments</h1>
        <h1>Join this discussion</h1>

        <div>{location.state.memberId}</div>
        <div>{location.state.projectId}</div>
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleSubmit}
        >
          <div className="col-12 col-lg-9">
            <textarea
              name="commentText"
              placeholder="Add your comment..."
              value={commentText}
              className="form-input w-100"
              style={{ lineHeight: "1.5", resize: "vertical" }}
              onChange={handleCommentChange}
            ></textarea>
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-primary btn-block py-3" type="submit">
              Add Comment
            </button>
          </div>
        </form>
      </div>
    </CommentContainer>
  );
}
export default Comments;

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiY29vbEBjb29sLmNvbSIsInVzZXJuYW1lIjoiY29vbCIsIl9pZCI6IjY0MTdiYTJhNzBmZDU1NTk3YTIyZWIzMSJ9LCJpYXQiOjE2Nzk0MjM5MjQsImV4cCI6MTY3OTQzMTEyNH0.Pc1ma5n2L0XW_psnepFzPtgDKx3ONANuBsQX1A2xhiw"
