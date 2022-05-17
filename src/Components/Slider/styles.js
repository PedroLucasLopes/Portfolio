import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 2rem;
  width: 75%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }

  & ul {
    margin: 0 10rem;

    & li {
      list-style: none;

      @media screen and (max-width: 768px) {
        margin: 0 -15rem;
      }
    }
  }
`;
