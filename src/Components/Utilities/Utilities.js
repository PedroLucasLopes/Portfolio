import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Titulo from '../Titulo/Titulo';
import Slider from '../Slider/Slider';

import bootstrap from '../Slider/img/bootstrap.png';
import angular from '../Slider/img/angular.png';
import go from '../Slider/img/go.png';
import html from '../Slider/img/html5.png';
import css from '../Slider/img/css3.png';
import docker from '../Slider/img/docker.png';
import java from '../Slider/img/java.png';
import javascript from '../Slider/img/javascript.png';
import nodejs from '../Slider/img/nodejs.png';
import python from '../Slider/img/python.png';
import raspberry from '../Slider/img/raspberry.png';
import react from '../Slider/img/react.png';
import sass from '../Slider/img/sass.png';
import swift from '../Slider/img/swift.png';
import vuejs from '../Slider/img/vuejs.png';
import Arrow from './img/arrow.png';

const Box = styled.div`
    margin: 0 6rem;
`

const BoxIntern = styled.div`
    margin-left: 4rem;
`

const Title = styled.h1`
    font-size: 4.5rem;
    font-family: 'Abril Fatface', cursive;
    transition: all .2s;
`

const Subtitle = styled.h2`
    font-size: 8rem;
    margin-top: -1rem;
    margin-bottom: 1rem;
    font-family: 'Ms Madi', cursive;
`

const BoxTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`

const Icon = styled.img`
    width: 60px;
`

const learning = [javascript, nodejs, react, html, css, sass, bootstrap];
const learn = [angular, vuejs, java, python, go, raspberry, swift, docker];

const Utilities = () => {
    return (
        <Box>
            <BoxTitle>
                <NavLink to='/'>
                    <Icon src={Arrow} alt="Voltar à página principal" />
                </NavLink>
                <Title>Utilities</Title>
            </BoxTitle>
            <BoxIntern>
                <Titulo frase='Qual a minha stack foco?' />
                <Subtitle>Front-end</Subtitle>
                <Titulo frase='Quais tecnologias eu estudo?' />
                <Slider technologies={learning} />
            </BoxIntern>
        </Box>
    )
}

export default Utilities;
