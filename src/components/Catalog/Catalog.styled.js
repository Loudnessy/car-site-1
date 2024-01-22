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
    &:hover,
    :focus {
      background-color: #0b44cd;
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
  @media screen and (min-width: 1440px) {
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
export const StyledBtnLoadMore = styled.button`
  color: #3470ff;
  background-color: transparent;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  text-align: center;
  &:hover,
  :focus {
    color: #0b44cd;
  }
`;
export const StyledLoadMoreDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  @media screen and (min-width: 1440px) {
    margin-top: 100px;
  }
`;
export const StyledDivForm = styled.div`
  display: flex;
`;
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
  @media screen and (min-width: 1440px) {
    padding: 14px 18px 14px 18px;
    width: 224px;
    &::placeholder {
      font-size: 18px;
    }
  }
`;
export const StyledDivBrandInput = styled.div`
  position: relative;
`;
export const StyledArrowSvg = styled.svg`
  position: absolute;
  left: 216px;
  top: 8px;
  @media screen and (min-width: 768px) {
    left: 676px;
  }
  @media screen and (min-width: 1440px) {
    top: 14px;
    left: 186px;
  }
`;
export const StyledBrandsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  overflow-y: auto;
  position: absolute;
  background-color: #fff;
  z-index: 1;
  padding: 14px 8px 14px 18px;
  max-height: 324px;
  &::-webkit-scrollbar-thumb {
    background-color: rgba(18, 20, 23, 0.05);
    border-radius: 10px;
  }
  &::-webkit-scrollbar {
    width: 8px;
    height: 130px;
  }
  li {
    color: rgba(18, 20, 23, 0.2);
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25; /* 125% */
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    top: 52px;
    width: 224px;
    max-height: 272px;
  }
`;
export const StyledPriceInput = styled(Field)`
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
  &::placeholder {
    color: #121417;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    line-height: 1.11;
    opacity: 1;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    padding: 14px 18px;
    width: 125px;
    font-size: 18px;
    height: 48px;
  }
`;
export const StyledPriceList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  overflow-y: auto;
  position: absolute;
  background-color: #fff;
  z-index: 1;
  padding: 14px 8px 14px 18px;
  max-height: 324px;
  &::-webkit-scrollbar-thumb {
    background-color: rgba(18, 20, 23, 0.05);
    border-radius: 10px;
  }
  &::-webkit-scrollbar {
    width: 8px;
    height: 130px;
  }
  li {
    color: rgba(18, 20, 23, 0.2);
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25; /* 125% */
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    top: 52px;
    width: 125px;
    max-height: 188px;
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
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    display: block;
    padding: 14px 0 14px 24px;
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

export const StyledSection = styled.section`
  padding-bottom: 50px;
  padding-top: 25px;
  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 150px;
    padding-top: 50px;
  }
`;
export const StyledInputTo = styled(Field)`
  padding: 14px 0 14px 24px;
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
  @media screen and (min-width: 1440px) {
    width: 160px;
    border-radius: 0px 14px 14px 0px;
  }
`;
export const StyledMileageDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
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
  @media screen and (min-width: 768px) {
    left: 242px;
  }
  @media screen and (min-width: 1440px) {
    left: 242px;
  }
`;
export const StyledCard = styled.div`
  width: 100%;
  height: 426px;
  position: relative;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 274px;
  }
  @media screen and (min-width: 1440px) {
    width: 274px;
  }
`;
export const StyledUl = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px 29px;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
  @media screen and (min-width: 1440px) {
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
export const StyledTagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
  /* margin-bottom: 28px; */
  li {
    display: flex;
    gap: 6px;
    height: 18px;
  }
`;
export const StyledDivTgsBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
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
  margin-top: auto;
  &:hover,
  :focus {
    background-color: #0b44cd;
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
  padding: 16px 16px 40px;
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
  max-height: 248px;
  border-radius: 14px;
  @media screen and (min-width: 768px) {
    height: 190px;
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
    color: #3470ff;
  }
`;
export const StyledModalTagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0 6px;
  @media screen and (min-width: 1440px) {
    gap: 4px 6px;
    margin-bottom: 8px;
  }
`;
export const StyledModalTag = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5; /* 150% */
`;

export const StyledModalTagsListItem = styled.li`
  display: flex;
  gap: 6px;
`;
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
`;
export const StyledModalParagraph = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43; /* 142.857% */
  margin-top: 8px;
  @media screen and (min-width: 768px) {
    margin-top: 12px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 24px;
  }
`;
export const StyledModalCondList = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  flex-wrap: wrap;
`;
export const StyledModalCondListItem = styled.li`
  padding: 0 6px;
  border-radius: 5px;
  background-color: #f9f9f9;
  @media screen and (min-width: 768px) {
    padding: 7px 14px;
    border-radius: 35px;
  }
  @media screen and (min-width: 1440px) {
    padding: 7px 14px;
    border-radius: 35px;
  }
`;
export const StyledModalCondParagr = styled.p`
  color: #363535;
  font-family: Montserrat;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5; /* 150% */
  span {
    color: #3470ff;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: -0.24px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 12px;
    span {
      font-size: 12px;
    }
  }
`;
export const StyledModalBtn = styled.a`
  padding: 12px 50px;
  border-radius: 12px;
  background-color: #3470ff;
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
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
