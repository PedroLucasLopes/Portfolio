import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import Error from './img/404.png';

const appear = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    } to {
        opacity: 1;
        transform: translateX(0);
    }
`

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 8px solid #323232;
    border-radius: 20px;
    width: 80vw;
    height: 70vh;
    margin: 5% auto;
    animation: ${appear} .4s ease-in-out;

    @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #323232;
  }
`

const Img = styled.img`
    width: 50%;
    height: 100%;
    border-radius: 14px 0 0 14px;

    @media screen and (max-width: 768px) {
    display: none;
  }
`

const InternBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
`

const Status = styled.p`
    font-size: 8rem;
    font-family: 'Inter', cursive;
    font-weight: bold;
    margin: 0;

    @media screen and (max-width: 768px) {
    font-size: 6rem;
  }
`

const Title = styled.h1`
    font-family: 'Ms Madi', cursive;

    @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Button = styled.button`
    width: 15rem;
    height: 5rem;
    font-size: 1.3rem;
    font-family: 'Inter', cursive;
    color: #f9f9f9;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all .2s;
    background-color: #323232;

    &:hover {
        box-shadow: 2px 2px 5px #32323261;
    }
`

const NotFound = () => {
    return (
        <Box>
            <Img src={Error} alt="" />
            <InternBox>
                <Status>404</Status>
                <Title>Ops... Parece que você se perdeu, não?</Title>
                <Link to='/'>
                    <Button>Caminho de volta</Button>
                </Link>
            </InternBox>
        </Box>
    )
}

export default NotFound;
