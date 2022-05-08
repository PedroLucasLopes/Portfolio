import React from 'react'
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
    flex-direction: column;
    flex-wrap: wrap;
    line-height: 0;
    margin-top: 3rem;
    animation: ${upper} .8s ease-out;
`

const Title = styled.p`
    font-size: 18rem;
    text-transform: uppercase;
    font-family: 'Inter', cursive;
    font-weight: 800;
    word-wrap: break-word;
    line-height: normal;
    text-align: center;
    width: 100%;
`

const Subtitle = styled.p`
    display: flex;
    justify-content: flex-end;
    margin-right: 8rem;
    margin-top: -16%;
    font-size: 2.3rem;
    font-family: 'Ms Madi', cursive;
`

const Link = styled.a`
    padding-left: .5rem;
    text-decoration: none;
    color: #323232;
    transition: all .4s;

    &:hover {
        font-size: 3rem;
        font-weight: bold;
    }
`

const Portfolio = () => {
    return (
        <Box>
            <Title>
                Portfolio
            </Title>
            <Subtitle>
                By
                <Link href="https://linkedin.com/in/pedro-lucas-lopes-paraguai" target='_blank' rel='noreferrer noopener'>
                    Pedro Lucas
                </Link>
            </Subtitle>
        </Box>
    )
}

export default Portfolio
