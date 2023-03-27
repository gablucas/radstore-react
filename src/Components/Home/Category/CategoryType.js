import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  max-height: 400px;
  max-width: 400px;

  img {
    transition: scale .6s;
  }

  &:hover img {
    scale: 1.1;
    
  }

  h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font: var(--font2-32-bl);
    text-transform: uppercase;
    color: #FFFFFF;
    z-index: 999;
  }
`

const CategoryType = ({ type, img }) => {
  return (
    <Container>
      <h3>{type}</h3>
      <img src={img} alt="" />
    </Container>
  )
}

export default CategoryType