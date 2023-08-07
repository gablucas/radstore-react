import React from 'react';
import { Container } from './styles';
import BannerIMG from '../../../assets/Banner.png';
import BannerIMG_768 from '../../../assets/Banner_768.png';
import BannerIMG_425 from '../../../assets/Banner_425.png';

const Banner = () => {
  return (
    <Container>
      <p>MOVIDOS PELA ADRENALINA,<br />
      SUPERE SEUS LIMITES,<br />
      SEJA RADICAL!</p>

      <picture>
        <source media="(max-width: 425px)" srcSet={BannerIMG_425} />
        <source media="(max-width: 768px)" srcSet={BannerIMG_768} />
        <img src={BannerIMG} alt="" />
      </picture>
    </Container>
  )
}

export default Banner