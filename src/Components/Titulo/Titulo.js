import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
    font-family: 'Inter', cursive;
    font-size: 1.6rem;
    font-weight: 500;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
  }
`;

const Titulo = ({ frase }) => {
    return (
        <Title>{frase}</Title>
    )
}

export default Titulo;
