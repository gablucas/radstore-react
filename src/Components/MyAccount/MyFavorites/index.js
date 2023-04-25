import React from 'react'
import { useQuery } from 'react-query';
import { api } from '../../../services/api';
import { GlobalContext } from '../../Context';
import { Container, Product } from './styles';
import Favorite from '../../Favorite';

const MyFavorites = () => {
  const { loggedUser } = React.useContext(GlobalContext);

  const { data } = useQuery('products', async() => {
    const { data } = await api.get('data.json');
    return data;
  })

  if (loggedUser && data)
  return (
    <Container>
      <h1>Meus favoritos</h1>

      <div>
        {loggedUser.favorites.map((m) => (
          <Product key={m}>
            <Favorite id={m} />
            <img src={data.find((f) => f.id === m).image} alt="" />
            <span>{data.find((f) => f.id === m).name}</span>
            <span>{data.find((f) => f.id === m).price}</span>
          </Product>
        ))}
      </div>
    </Container>
  )
}

export default MyFavorites;