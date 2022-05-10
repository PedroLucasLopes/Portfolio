import React from 'react';
import styled, { keyframes } from 'styled-components';

import Github from './Img/github.png';
import Linkedin from './Img/linkedin.png';
import Gmail from './Img/gmail.png';

const side = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    } to {
        opacity: 1;
        transform: translateX(0);
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 30px;
    top: 35%;
    animation: ${side} .4s ease-out;

    @media screen and (max-width: 768px) {
    opacity: 0;
    left: 999999px;
  }
`

const Link = styled.a`
`

const Img = styled.img`
    width: 2rem;
    margin-bottom: 10px;
    transition: all .2s;
    
    &:hover {
        width: 2.5rem;
    }

    @media screen and (max-width: 768px) {
    margin-right: 12px;
  }
`

const Social = () => {
    return (
        <Box>
            <Link href="https://github.com/PedroLucasLopes" target='_blank' rel='noreferrer noopener'>
                <Img src={Github} alt="Logotipo Github" />
            </Link>
            <Link href="https://www.linkedin.com/in/pedro-lucas-lopes-paraguai/" target='_blank' rel='noreferrer noopener'>
                <Img src={Linkedin} alt="Logotipo Linkedin" />
            </Link>
            <Link href="mailto:pedrolopesparaguai@gmail.com" target='_blank' rel='noreferrer noopener'>
                <Img src={Gmail} alt="Logotipo Gmail" />
            </Link>
        </Box>
    )
}

export default Social;
