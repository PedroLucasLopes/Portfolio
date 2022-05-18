import styled, { keyframes } from "styled-components";

const side = keyframes`
  from {
    opacity: 0;
    transform: translateX(-60px);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Box = styled.div`
  margin: 0 6rem;
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  animation: ${side} .8s ease-out;

  @media screen and (max-width: 768px) {
    margin-left: -3rem;
  }
`;

export const BoxIntern = styled.div`
  margin-left: 4rem;
  animation: ${side} .4s ease-out;

  @media screen and (max-width: 768px) {
    margin-left: -4rem;
  }
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  font-family: "Abril Fatface", cursive;
  transition: all 0.2s;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Icon = styled.img`
  width: 60px;

  @media screen and (max-width: 768px) {
    width: 30px;
  }
`;


export const Subtitle = styled.h2`
  font-size: 8rem;
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-family: "Ms Madi", cursive;

  @media screen and (max-width: 768px) {
    font-size: 5rem;
    width: 90vw;
  }
`;