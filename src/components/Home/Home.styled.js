import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const StyledContainer = styled.div`
margin: 0 auto;
    width: 280px;
    padding: 50px 15px 0; 
    @media screen and (min-width: 768px) {
        padding: 100px 15px 0; 
    width: 738px;  
}  
@media screen and (min-width: 1440px) {
    width: 1214px;  
}

`
export const StyledHeader = styled.h2`
color: #2a4994;
font-family: Manrope;
font-size: 28px;
font-style: normal;
font-weight: 800;
line-height: 1.5;  
text-align: center;
margin-bottom: 16px;
@media screen and (min-width: 768px) {
    font-size: 36px;
}  
@media screen and (min-width: 1440px) {
font-size: 44px;
font-style: normal;
font-weight: 800;
line-height: 1.5;  
}
`
export const StyledP = styled.p`
color: #2a4994;
font-family: Manrope;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 1.5; 
text-align:  center;
margin-bottom: 16px;
@media screen and (min-width: 1440px) {
font-size: 44px;
font-style: normal;
font-weight: 800;
line-height: 1.5;  
}
`
export const StyledParagraph = styled.p`
color: #121417;

font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.5; /* 150% */
text-align: center;
margin-bottom: 16px;
`

export const StyledCities = styled.p`
color: #4B0082;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 900;
line-height: 1.5; /* 150% */
margin-bottom: 16px;
@media screen and (min-width: 768px) {
    font-size: 16px;
    text-align: center;
}  
`
export const StyledUl = styled.ul`
display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`
export const StyledParag = styled.p`
color: #121417;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.5; /* 150% */
`

export const StyledBtn = styled(NavLink)`
padding: 12px 99px;
background-color: #3470FF;
border-radius: 12px;
border: none;
color: #fff;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 1.43; /* 142.857% */
cursor: pointer;
width: 100%;
display: block;
text-align: center;
text-decoration: none;
margin-top: 50px;
&:hover, :focus {
    background-color: #0B44CD;
  }
`