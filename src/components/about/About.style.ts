import styled from "styled-components";
import {colors} from "../../constant/style";

export const AboutS = styled.div`
  border-radius: 20px;
  height: auto;
  width: auto;
  max-width: 1005px;
  margin: auto;
  margin-top:50px;
  padding: 40px;
  text-align: justify;
  line-height: 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  
  h1{
    text-align: center;
  }
  
  p{
    color: ${colors.font};
  }
`