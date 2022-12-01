import styled from "styled-components";

export const ProjectsS = styled.div`
  
  height: 300px;
  width: auto;
  max-width: 700px;
  margin: auto auto;
  margin-top: 50px;

  .title{
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  .listProjects{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    margin: auto;

  }
  
  a {
  text-decoration: none
  }
`