import styled from "styled-components";

export const Container = styled.header`
  padding: 10px 40px;
`

export const Links = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: var(--font1-16-sb);

  ul, div {
    display: flex;
  }

  li a {
    padding: 20px;
  }

  li a:hover {
    color: rgba(0, 0, 0, .6);
  }

`