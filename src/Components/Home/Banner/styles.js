import styled from "styled-components";

export const Container = styled.section`
    position: relative;

    p {
        position: absolute;
        font: var(--font2-48-b);
        color: #FFFFFF;

        top: 10%;
        left: 30%;
    }

    img {
      width: 100vw;
    }

    @media (max-width: 768px) {
      p {
        font: var(--font2-32-b);
        left: 30%;
      }
    }

    @media (max-width: 425px) {
      p {
        font: var(--font2-24-sb);
        left: 48%;
      }
    }
`