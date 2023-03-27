import React from 'react';
import { Container } from './styles';
import MensIMG from '../../../assets/category/mens.jpg';
import WomensIMG from '../../../assets/category/womans.jpg';
import KidsIMG from '../../../assets/category/kids.jpg';
import LongboardIMG from '../../../assets/category/longboard.jpg';
import SkateIMG from '../../../assets/category/skate.jpg';
import BmxIMG from '../../../assets/category/bmx.jpg';
import CategoryType from './CategoryType';


const Category = () => {
  return (
    <Container>
        <h2>Categoria</h2>

        <div>
          <CategoryType type='Homens' img={MensIMG} />
          <CategoryType type='Mulheres' img={WomensIMG} />
          <CategoryType type='Kids' img={KidsIMG} />
          <CategoryType type='Longboard' img={LongboardIMG} />
          <CategoryType type='Skate' img={SkateIMG} />
          <CategoryType type='BMX' img={BmxIMG} />
        </div>

    </Container>
  )
}

export default Category