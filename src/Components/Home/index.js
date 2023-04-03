import React from 'react';
import Banner from './Banner';
import Category from './Category';
import useLogged from '../../hooks/useLogged'

const Home = () => {
  useLogged();


  return (
    <>
        <Banner />
        <Category />
    </>
  )
}

export default Home