import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./styles";
import Titulo from "../Titulo/Titulo";
import Slider from "../Slider/Slider";
const learning = [
  "javascript",
  "nodejs",
  "react",
  "html5",
  "css3",
  "sass",
  "bootstrap",
];
const learn = [
  "angular",
  "vuejs",
  "java",
  "python",
  "go",
  "raspberry",
  "swift",
  "docker",
];
const Utilities = () => {
  return (
    <S.Box>
      <S.BoxTitle>
        <NavLink to="/">
          <S.Icon
            src={`./assets/img/arrow.png`}
            alt="Voltar à página principal"
          />
        </NavLink>
        <S.Title>Utilities</S.Title>
      </S.BoxTitle>
      <S.BoxIntern>
        <Titulo frase="Qual a minha stack foco?" />
        <S.Subtitle>Front-end</S.Subtitle>
        <Titulo frase="Quais tecnologias eu estudo?" />
        <Slider technologies={learning} />
        <Titulo frase="Quais eu tenho interesse em estudar futuramente?" />
        <Slider technologies={learn} />
      </S.BoxIntern>
    </S.Box>
  );
};

export default Utilities;
