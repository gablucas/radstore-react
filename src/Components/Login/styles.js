import styled from "styled-components";
import LoginBG from '../../assets/BGLogin.jpg';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 300px;
  padding-top: 40px;
  background: url(${LoginBG}) center no-repeat;
  height: 1000px;

  h2 {
    font: var(--font2-24-b);
    text-align: center;
    padding: 8px 10px;
    color: #FFFFFF;
    background-color: #000000;
  }

  form {
    margin-top: 20px; 
  }

  form > div {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  label {
    font: var(--font1-18-sb);
    color: #FFFFFF;
  }

  input {
    width: 300px;
    height: 46px;
    margin-top: 6px;
    padding-left: 8px;
    font: var(--font1-16-r);
    border: 1px solid #2B2B2B;
    background-color: #F7F7F7;
  }

  &::before {
    content: "";
    display: block;
    width: 10px;
    height: 100px;
    position: absolute;
    top: 100px; 
    left: 10px;
  }
`

export const ButtonAccount = styled.button`
  font: var(--font1-16-sb);
  width: 300px;
  height: 50px;
  margin-top: 20px;
  color: #FFFFFF;
  background-color: #2B2B2B;
  transition: filter .3s;

  &:hover {
    filter: brightness(1.4);
  }
`

export const LoginWrapper = styled.div`
  justify-self: end;


  &::after {
    content: "";
    display: block;
    height: 640px;
    width: 1px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 4px #FFFFFF;

    position: absolute;
    top: 162px;
    left: 50%;
  }
`

export const RegisterWrapper = styled.div`
  justify-self: start;
`
