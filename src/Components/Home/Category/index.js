import React from 'react';
import { Container } from './styles';
import MensIMG from '../../../assets/category/mens.jpg';
import WomensIMG from '../../../assets/category/womans.jpg';
import LongboardIMG from '../../../assets/category/longboard.jpg';
import SkateIMG from '../../../assets/category/skate.jpg';
import CategoryType from './CategoryType';

const Category = () => {
  return (
    <Container>
        <h2>Categorias</h2>

        <div>
          <CategoryType type='Homens' img={MensIMG} />
          <CategoryType type='Mulheres' img={WomensIMG} />
          <CategoryType type='Longboard' img={LongboardIMG} />
          <CategoryType type='Skate' img={SkateIMG} />
        </div>

    </Container>
  )
}

export default Category