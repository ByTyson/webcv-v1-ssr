import styled from "styled-components";
import {colors} from "../../constant/style";

export const CardS = styled.div`
  
  height: auto;
  width: auto;
  max-width: 300px;
  background-color: ${colors.white};
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 46px -3px rgba(0,0,0,0.2);
  -webkit-box-shadow: 0 0 46px -3px rgba(0,0,0,0.2);
  -moz-box-shadow: 0 0 46px -3px rgba(0,0,0,0.2);
  border-radius: 10px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

  a {
    margin: auto;
  }
  
  .link{
    display: flex;
    width: 180px;
    margin: auto;
  }
  
  .separator{
    border-bottom: 0.1rem solid ${colors.separator};
    margin: 0 20px 30px 10px;
    padding-bottom: 20px;
  }
  
  h4{
    color: ${colors.font}
  }

  img{
    width: 120px;
    border-radius: 25%;
  }
`