import React from 'react';
import styled, { keyframes } from 'styled-components';

const upper = keyframes`
    from {
        transform: translateY(100px);
        opacity: 0;
    } to {
        transform: translateX(0);
        opacity: 1;
    }
`;

const Box = styled.div`
    display: flex;
    padding: 0 2rem;
    line-height: 2%;
    margin-right: -50px;
    margin-bottom: -10px;
    animation: ${upper} .4s ease-out;

    &:nth-child(odd) {
        font-family: 'Abril Fatface', cursive;
    }

    &:nth-child(even) {
        font-family: 'Ms Madi', cursive;
    }

    @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.p`
    font-size: 3rem;
    margin-right: .8rem;
    font-weight: bold;
    transition: all .2s;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        bottom: -36px;
        left: 0;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        background-color: #323232;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }

    &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }

    @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    display: flex;
    word-wrap: break-word;
    line-height: 1;

    &:hover {
        font-size: 2.5rem;
    }
  }
`;

const Link = styled.a`
    text-decoration: none;
    color: #323232;
`

const And = styled.p`
    font-size: 1.5rem;
    font-family: 'Ms Madi', cursive;

    @media screen and (max-width: 768px) {
    opacity: 0;
  }
`

const Portfolio = ({ project, link, font }) => {
    return (
        <Box>
            <Title font={font}>
                <Link href={link}>
                    {project}
                </Link>
            </Title>
            <And>and</And>
        </Box>
    )
}

export default Portfolio;
