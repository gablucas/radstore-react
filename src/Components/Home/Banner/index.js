import React from 'react';
import { Container } from './styles';
import BannerIMG from '../../../assets/Banner.png';

const Banner = () => {
  return (
    <Container>
      <p>MOVIDOS PELA ADRENALINA,<br />
      SUPERE SEUS LIMITES,<br />
      SEJA RADICAL!</p>
      <img src={BannerIMG} alt="" />
    </Container>
  )
}

export default Banner