import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AboutWrapper, ButtonWrapper, BuyButton, CartButton, Container, ImageWrapper, InfoWrapper, Installments, MeasureButton, Price } from './styles';
import { GlobalContext } from '../../components/Context';
import useLocalStorage from '../../hooks/useLocalStorage';
import Favorite from '../../components/Favorite';
import Image from '../../components/Helper/Image';

const Product = () => {
  const { setCart } = React.useContext(GlobalContext);
  const { products } = useContext(GlobalContext);
  const { getValue, setValue, pushValue } = useLocalStorage();
  const [selectedMeasure, setSelectedMeasure] = React.useState('');
  const [error, setError] = React.useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products ? products.find((p) => p.id === id) : undefined;
  
  function handleBuy(type) {
    if (!getValue('radstoreCart')) {
      setValue('radstoreCart', JSON.stringify([]))
    }

    if (!selectedMeasure) {
      setError('Selecione um tamanho')
    }

    if (selectedMeasure) {
      setError("")

      let cart = JSON.parse(getValue('radstoreCart'));
      if (cart.find((f) => f.id === id && f.measure === selectedMeasure)) {
        cart = cart.map((m) => {
          if (m.id === id && m.measure === selectedMeasure) {
            return {...m, quantity: m.quantity + 1};
          }

          return m;
        })

        setValue('radstoreCart', JSON.stringify(cart));

      } else {
        pushValue('radstoreCart', {id, measure: selectedMeasure, quantity: 1});
      }
      
      setCart(JSON.parse(getValue('radstoreCart')));

      if (type === 'buy') {
        navigate('/carrinho')
      }

      if (type === 'cart') {
        setSelectedMeasure('');
      }
    }
  }

  if (product) return (
    <Container>
      <ImageWrapper>
        <Favorite id={id} topPosition='20px' rightPosition='20px' />
        <Image url={product.image} />
      </ImageWrapper>

      <InfoWrapper>
        <h1>{product.name}</h1>
        <Price>R$ {product.price}</Price>
        <Installments>ou 12x de R$ {Math.floor(parseInt(product.price) / 12)},00 sem juros</Installments>

        <div>
          <span>Escolha um tamanho</span>

          <ul>
          {product.sizes.map((measure) => (
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
          <p>{product.description}</p>
        </AboutWrapper>

        </InfoWrapper>
    </Container>
  )
}

export default Product