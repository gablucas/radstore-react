import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const skeleton = keyframes`
  from {
    background-position: 0px;
  }

  to {
    background-position: -200%;
  }
`

const Container = styled.div`
  display: grid;

  div {
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(90deg, #EEE 0px, #FFF 50%, #EEE 100%);
    background-color: #EEE;
    background-size: 200%;
    animation: ${skeleton} 1.5s linear infinite;
  }
`

const Img = styled.img`
  grid-area: 1/1;
  display: block;
  opacity: ${props => props.opacity};
  transition: .2s;
`

const Image = ({ url, width }) => {
  const [skeleton, setSkeleton] = React.useState(true);
  const opacity = useRef(0);

  function handleLoad() {
    setSkeleton(false);
    opacity.current = 1;
  }

  return (
    <Container>
      {skeleton && <div></div>}
      <Img onLoad={handleLoad} src={url} alt="" opacity={opacity.current} width={width} />
    </Container>
  )
}

export default Image