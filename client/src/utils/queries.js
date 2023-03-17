import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      projects {
        _id
        projectTitle
        projectText
        createdAt
      }
    }
  }
`;

export const QUERY_PROJECT = gql`
  query getProjects {
    projects {
      _id
      projectTitle
      projectText
      projectAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_PROJECT = gql`
  query getSingleProject($projectId: ID!) {
    project(projectId: $projectId) {
      _id
      projectText
      projectAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      project {
        _id
        projectText
        projectAuthor
        createdAt
      }
    }
  }
`;
