import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from './Context';
import useLocalStorage from '../hooks/useLocalStorage';
import {ReactComponent as FavoriteLogo} from '../../src/assets/favorite.svg';

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover svg > * {
    fill: ${props => props.favorite ? '#ffbd42' : '#FFA700'}
  }

  svg > * {
    fill: ${props => props.favorite ? '#FFA700' : '#B2B2B2'}
  }

`

const Favorite = ({ id }) => {
  const { loggedUser } = React.useContext(GlobalContext);
  const { getValue, setValue } = useLocalStorage();
  const [favorite, setFavorite] = React.useState(false);

  function handleFavorite() {
    const user = loggedUser;
    if (user.favorites.some((s) => s === id)) {
      user.favorites = user.favorites.filter((f) => f !== id)
      setFavorite(false);
    } else {
      user.favorites.push(id);
      setFavorite(true);
    }

    const users = JSON.parse(getValue('users')).map((m) => {
      if (m.email === user.email) {
        return user;
      }
      return m;
    })

    setValue('loggeduser', JSON.stringify(user));
    setValue('users', JSON.stringify(users));
  }

  React.useEffect(() => {
    if (loggedUser && loggedUser.favorites.some((s) => s === id)) {
      setFavorite(true);
    }
  }, [id, loggedUser])


  return (
    <Button onClick={handleFavorite} favorite={favorite} ><FavoriteLogo /></Button>
  )
}

export default Favorite