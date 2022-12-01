import styled from "styled-components";
import { colors } from "../../constant/style";

export const HobbyCardS = styled.div`
  height: 200px;
  width: 150px;
  min-width: 150px;
  margin: 10px;
  border: 0.1rem solid ${colors.separator};
  border-radius: 10px;
  text-align: center;
  
  div{
    padding: 10px;
    margin-top: 20%;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
  
  p{
    color: ${colors.font};
    font-size: small;
  }
`