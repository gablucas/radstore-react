import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AboutWrapper, ButtonWrapper, BuyButton, CartButton, Container, InfoWrapper, Installments, MeasureButton, Price } from './styles';
import { GlobalContext } from '../Context';
import useLogged from '../../hooks/useLogged';
import useLocalStorage from '../../hooks/useLocalStorage';

const Product = () => {
  const { setData, data, measures, setCartQuantity } = React.useContext(GlobalContext);
  const { getValue, setValue, pushValue } = useLocalStorage();
  const [selectedMeasure, setSelectedMeasure] = React.useState('');
  const [error, setError] = React.useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useLogged();

  React.useEffect(() => {
    fetch(`https://gablucas.github.io/jsonapi/radstore/data.json`)
    .then(response => response.json())
    .then(json => setData(json.find((p) => p.id === id)))
  }, [setData, id])

  function handleBuy(type) {
    if (!getValue('cart')) {
      setValue('cart', JSON.stringify([]))
    }

    if (!selectedMeasure) {
      setError('Selecione um tamanho')
    }

    if (selectedMeasure) {
      setError("")  
      pushValue('cart', id)
      setCartQuantity(JSON.parse(getValue('cart')).length)

      if (type === 'buy') {
        navigate('/cart')
      }

      if (type === 'cart') {
        setSelectedMeasure('');
      }
    }
  }


  if (data) return (
    <Container>
      <div>
        <img src={data.image} alt="" width="700" />
      </div>

      <InfoWrapper>
        <h1>{data.name}</h1>
        <Price>R$ {data.price}</Price>
        <Installments>ou 12x de R$ {Math.floor(parseInt(data.price) / 12)},00 sem juros</Installments>

        <div>
          <span>Escolha um tamanho</span>

          <ul>
          {measures[data.type]?.map((measure) => (
            <MeasureButton key={measure} onClick={() => setSelectedMeasure(measure)} selectedMeasure={selectedMeasure === measure} >{measure}</MeasureButton>
          ))}
          </ul>

          {error && <p>{error}</p>}
        </div>

        <ButtonWrapper>
          <BuyButton onClick={() => handleBuy('buy')}>COMPRAR</BuyButton>
          <CartButton onClick={() => handleBuy('cart')}>ADICIONAR AO CARRINHO</CartButton>
        </ButtonWrapper>

        <AboutWrapper>
          <span>Sobre</span>
          <p>{data.description}</p>
        </AboutWrapper>

        </InfoWrapper>
    </Container>
  )
}

export default Product