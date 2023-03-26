import React from 'react';
import Banner from './Banner';
import Category from './Category';
import { Container } from './styles';


const Home = () => {
  return (
    <Container>
        <Banner />
        <Category />
    </Container>
  )
}

export default Home