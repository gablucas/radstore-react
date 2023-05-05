import styled from "styled-components";

export const Container = styled.footer`
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-content: center;
  gap: 80px;
  margin-top: 180px;
  padding: 180px 40px 100px 40px;

  color: #FFFFFF;
  background: #000000;
  clip-path: polygon(0 21%, 100% 0%, 100% 100%, 0% 100%);

  form {
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: start;
    margin-top: 6px;
  }

  input {
    width: 100%;
    margin-top: 0px;
    padding: 10px 10px;
    background-color: #FFFFFF;
  }
  
  button {
    border: 1px solid #2B2B2B;
    padding: 0px 10px;
    font: var(--font1-14-m);
    background: ${props => props.email.length >= 1 ? '#FFA700' : '#C8C8C8'};
  }

  & > p {
    font: var(--font1-12-r);
    color: #C8C8C8;
    grid-column: 1/-1;
    justify-self: center;
    text-align: center;
  }

  div > p {
    color: #C8C8C8;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, auto);
    margin-top: 60px;
    padding-top: 40px;
    justify-items: center;
    gap: 40px 20px;
    clip-path: none;

    img,
    div:nth-of-type(4) {
      grid-column: 1/-1;
    }
  }

  @media (max-width: 425px) {
    grid-template-columns: auto auto;
    gap: 40px;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;

    div:nth-of-type(3) {
      grid-column: 1/-1;
    }

    & > p {
      font: var(--font1-10-r);
    }

    div > p {
      font: var(--font1-14-r);
    }

  }

  @media (max-width: 375px) {
    grid-template-columns: auto;
  }
`

export const Links = styled.div`
  h3 {
    font: var(--font2-18-sb);
    text-transform: uppercase;
  }

  ul {
    font: var(--font1-14-r);
    color: #C8C8C8;
  }

  li  {
    padding-top: 10px;
  }

  li:hover {
    color: #F7F7F7;
    cursor: pointer;
  }

  @media (max-width: 375px) {
    text-align: center;
  }
`

export const SocialMedia = styled.div`

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 12px;
  }

  a:hover svg > * {
    fill: #FFA700;
  }
`