import React from 'react';
import styled from 'styled-components';
import Projetos from '../Projetos/Projetos';
import Portfolio from '../Portfolio/Portfolio';
import Social from '../Social/Social';

const mockup = [
    {
        projetos: 'WeatherApp',
        link: 'https://clima-tempo-app.vercel.app/',
    },
    {
        projetos: 'TEAcolhemos',
        link: 'https://teacolhemos.vercel.app/',
    },
    {
        projetos: 'Health Track',
        link: 'https://health-track-app.vercel.app/',
    },
    {
        projetos: 'iFood Receitas',
        link: 'https://ifood-receitas.surge.sh/index-market.html',
    },
    {
        projetos: 'Mini-Projects',
        link: 'https://github.com/PedroLucasLopes/Front-End-Projects-for-Begginers',
    },
    {
        projetos: 'Consumin APIs',
        link: 'https://github.com/PedroLucasLopes/Consumin-APIs',
    },
    {
        projetos: 'PetShop',
        link: '',
    },
    {
        projetos: 'Quiz Game',
        link: 'https://jovemouidoso.netlify.app/',
    },
    {
        projetos: 'Utilities',
        link: 'utilities',
    },
]

const Global = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95vw;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`

const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  
    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `

const Aside = styled.aside`
  
`


const Footer = styled.footer`

`

const Main = () => {
    return (
        <Global>
            <Header>
                {mockup.map(({ projetos, link, font }, i) => {
                    return <Projetos project={projetos} link={link} font={font} key={i} />
                })}
            </Header>
            <Aside>
                <Social />
            </Aside>
            <Footer>
                <Portfolio />
            </Footer>
        </Global>
    )
}

export default Main
