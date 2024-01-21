import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const StyledHeader = styled.header`
width: 100%;
background-color: #3470FF;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px 0;
  ul {
    display: flex;
    gap: 28px;
    justify-content: space-between
  } 
  @media screen and (min-width: 768px) {
    padding: 24px 0;
    ul {
    display: flex;
    gap: 28px;
    justify-content: flex-start;
  } 
}
@media screen and (min-width: 1440px) {



  margin-bottom: 50px;
  
}
`
export const StyledNavLink = styled(NavLink)`
color: #fff;
text-decoration: none;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 1.43; /* 142.857% */
`
export const StyledContainer = styled.div`
margin: 0 auto;
      width: 280px;
      padding: 0 15px;
      @media screen and (min-width: 768px) {
        width: 738px;
}
 @media screen and (min-width: 1440px) {
      width: 1214px;   
 }
`