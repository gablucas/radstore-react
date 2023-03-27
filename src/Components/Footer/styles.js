import styled from "styled-components";

export const Container = styled.footer`
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-content: center;
  gap: 80px;
  padding-top: 200px;
  padding-bottom: 100px;
  padding-left: 40px;
  color: #FFFFFF;
  background: #000000;
  clip-path: polygon(0 21%, 100% 0%, 100% 100%, 0% 100%);

  form {
    display: flex;
    height: 40px;
    margin-top: 8px;
  }

  input {
    padding: 10px 10px;
    background-color: #FFFFFF;
    width: 300px;
  }
  
  button {
    padding: 10px 10px;
    font: var(--font1-14-m);
    background: ${props => props.email.length >= 1 ? '#FFA700' : '#C8C8C8'};
  }

  p {
    font: var(--font1-12-r);
    color: #C8C8C8;
  }

  & > p {
    grid-column: 1/-1;
    justify-self: center;
    text-align: center;
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