import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from './Context';
import useLocalStorage from '../hooks/useLocalStorage';
import {ReactComponent as FavoriteLogo} from '../../src/assets/favorite.svg';

const Button = styled.button`
  position: absolute;
  top: ${props => props.topPosition};
  right: ${props => props.rightPosition};

  &:hover svg > * {
    fill: ${props => props.favorite ? '#ffbd42' : '#FFA700'}
  }

  svg > * {
    fill: ${props => props.favorite ? '#FFA700' : '#B2B2B2'}
  }

  &:hover + div {
    display: block;
  }
`

const LoginToFavorite = styled.div`
  position: absolute;
  display: none;
  right: 0px;
  top: -20px;
  color: #FFFFFF;
  background-color: rgba(0, 0, 0, 0.7);

`

const Favorite = ({ id, topPosition, rightPosition }) => {
  const { loggedUser } = React.useContext(GlobalContext);
  const { getValue, setValue } = useLocalStorage();
  const [favorite, setFavorite] = React.useState(false);
  const user = loggedUser;

  function handleFavorite() {

    if (user) {
      if (user.favorites.some((s) => s === id)) {
        user.favorites = user.favorites.filter((f) => f !== id)
        setFavorite(false);
      } else {
        user.favorites.push(id);
        setFavorite(true);
      }
  
      const users = JSON.parse(getValue('radstore')).map((m) => {
        if (m.email === user.email) {
          return user;
        }
        return m;
      })
  
      setValue('radstoreLoggedUser', JSON.stringify(user));
      setValue('radstore', JSON.stringify(users));
    }
  }

  React.useEffect(() => {
    if (loggedUser && loggedUser.favorites.some((s) => s === id)) {
      setFavorite(true);
    }
  }, [id, loggedUser])


  return (
    <>
      <Button onClick={handleFavorite} favorite={favorite} topPosition={topPosition} rightPosition={rightPosition} ><FavoriteLogo /></Button>
      {!user && (<LoginToFavorite>Faça o login para favoritar</LoginToFavorite>)}
    </>
  )
}

export default Favorite