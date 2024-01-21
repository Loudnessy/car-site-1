import { Field, Form } from 'formik';
import ReactModal from 'react-modal';
import styled from 'styled-components';
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
`;

export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
gap: 18px;
button {
    width: 100%;
    padding: 14px 44px;
    border-radius: 12px;
    border: none;
    background-color: #3470ff;
    color: #ffff;
    cursor: pointer;
    color: #fff;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.43; /* 142.857% */
    &:hover, :focus {
    background-color: #0B44CD;
  }
  }  
label {
    color: #8a8a89;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    line-height: 1.28; /* 128.571% */
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
@media screen and (min-width: 1440px){
  flex-direction: row;
  gap: 18px;
  justify-content: center;
  align-items: flex-end;
  label {
    color: #8a8a89;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    line-height: 1.28; /* 128.571% */
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  button {
    width: 136px;
  }  
}
`;
export const StyledDivForm = styled.div`
display: flex;
`
export const StyledBrandInput = styled(Field)`
padding: 8px 16px 8px 16px;
border-radius: 14px;
background-color: #f7f7fb;
border: none;
outline: none;
color: #121417;
font-family: Manrope;
font-size: 18px;
font-style: normal;
line-height: 1.11;
cursor: pointer;
width: 100%;
&::placeholder {
    color: #121417;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    line-height: 1.11;
    opacity: 1;
  } 
@media screen and (min-width: 1440px){
 padding: 14px 18px 14px 18px;
  width: 224px;
  &::placeholder {
    font-size: 18px;
  } 
} 
`;
export const StyledSelect = styled(Field)`
padding: 8px 16px 8px 16px;
  border-radius: 14px;
  background-color: #f7f7fb;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  line-height: 1.11;
  @media screen and (min-width: 768px){
    
  }
  @media screen and (min-width: 1440px){
    padding: 14px 18px 14px 18px;
  width: 125px;
  font-size: 18px;
  height: 48px;
  }
`;

export const StyledInputFrom = styled(Field)`
  display: block;
  padding: 14px 93px 14px 24px;
  width: 100%;
  border-radius: 14px 0px 0px 14px;
  background-color: #f7f7fb;
  border: none;
  outline: none;
  cursor: pointer;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  line-height: 1.11;
  &::placeholder {
    color: #121417;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    line-height: 1.11;
    opacity: 1;
  }
  @media screen and (min-width: 768px){
    
  }
  @media screen and (min-width: 1440px){
  display: block;
  padding: 14px 93px 14px 24px;
  width: 160px;
  border-radius: 14px 0px 0px 14px;
  background-color: #f7f7fb;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border: none;
  outline: none;
  cursor: pointer;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  line-height: 1.11;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  &::placeholder {
    color: #121417;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    line-height: 1.11;
    opacity: 1;
  }
  }
`;

export const StyledInputTo = styled(Field)`
  padding: 14px 93px 14px 24px;
  width: 100%;
  border-radius: 14px 0 0 14px;
  background-color: #f7f7fb;
  border: none;
  outline: none;
  cursor: pointer;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  line-height: 1.11;
  &::placeholder {
    color: #121417;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    line-height: 1.11;
    opacity: 1;
  }
  @media screen and (min-width: 1440px){
  width: 160px;
  border-radius: 0px 14px 14px 0px;
  }
`;
export const StyledMileageDiv = styled.div`
     display: flex;
     flex-direction: column;
     gap: 18px;
  @media screen and (min-width: 768px){
    
  }
  @media screen and (min-width: 1440px){
    flex-direction: row;
     gap: 0;
  }
`;

export const StyledImg = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
`;

export const StyledBtn = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  width: 18px;
  height: 18px;
  padding: 0;
  left: 218px;
  top: 14px;
  cursor: pointer;
  @media screen and (min-width: 768px){
    left: 242px;
  }
  @media screen and (min-width: 1440px){
    left: 242px;
  }
`;
export const StyledCard = styled.div`
  width: 100%;
  height: 426px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px){
    width: 274px;
  }
  @media screen and (min-width: 1440px){
    width: 274px;
  }
`;
export const StyledUl = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px 29px;
  @media screen and (min-width: 768px){
    justify-content: space-around;
  }
  @media screen and (min-width: 1440px){
    justify-content: flex-start;
  }
`;

export const StyledCardNameDiv = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  p {
    color: #121417;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    line-height: 1.5; /* 150% */
  }
  span {
    color: #3470ff;
  }
`;

export const StyledTags = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5; /* 150% */
  margin-bottom: 28px;
`;

export const StyledCardBtn = styled.button`
  border-radius: 12px;
  background-color: #3470ff;
  padding: 12px 99px;
  border: none;
  cursor: pointer;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43; /* 142.857% */
  &:hover, :focus {
    background-color: #0B44CD;
  }
`;

export const StyledModal = styled(ReactModal)`
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  padding: 16px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 541px;
  height: 100%;
  }
  @media screen and (min-width: 1440px) {
  width: 541px;
  height: 752px;
  }
`;
export const StyledModalButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  display: block;
  margin-left: auto;
  padding: 0;
  cursor: pointer;
`;

export const StyledModalImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  @media screen and (min-width: 768px) {
    height: 200px;
  }
  @media screen and (min-width: 1440px) {
    width: 469px;
    height: 248px;
  }
`;
export const StyledModalContainer = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    
  }
  @media screen and (min-width: 1440px) {
    width: 494px;
  }
`;
export const StyledModalHeader = styled.h2`
color: #121417;
font-family: Manrope;
font-size: 18px;
font-style: normal;
line-height: 1.33; /* 133.333% */
margin-top: 14px;
margin-bottom: 8px;
span {
  color: #3470FF;
}
`
export const StyledModalTagsList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 0 6px;
@media screen and (min-width: 1440px) {
  gap: 4px 6px;
}
`
export const StyledModalTag = styled.p`
color: rgba(18, 20, 23, 0.50);
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 1.5; /* 150% */
`

export const StyledModalTagsListItem = styled.li`
display: flex;
gap: 6px;
`
export const StyledModalCarDesc = styled.p`
color: #121417;
font-family: Manrope;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 1.43; /* 142.857% */
margin-top: 8px;
@media screen and (min-width: 768px) {
  margin-top: 14px;
}
@media screen and (min-width: 1440px) {
  margin-top: 14px;
  font-size: 14px;
}
`
export const StyledModalParagraph = styled.p`
color: #121417;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 1.43; /* 142.857% */
margin-top: 8px;
@media screen and (min-width: 768px) {
  margin-top: 24px;
}
@media screen and (min-width: 1440px) {
  margin-top: 24px;
}
`
export const StyledModalCondList = styled.ul`
display: flex;
gap: 8px;
margin-top: 8px;
@media screen and (min-width: 768px) {
  flex-wrap: wrap;
}
`
export const StyledModalCondListItem = styled.li`
padding: 7px 14px;
border-radius: 35px;
background-color: #F9F9F9;
`
export const StyledModalCondParagr = styled.p`
color: #363535;
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 1.5; /* 150% */
`
export const StyledModalBtn = styled.a`
padding: 12px 50px;
border-radius: 12px;
background-color: #3470FF;
color: #fff;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 1.43; /* 142.857% */
border: none;
cursor: pointer;
position: absolute;
bottom: 40px;
text-decoration: none;
&:hover, &:focus {
    background-color: #0B44CD;
  }
`

