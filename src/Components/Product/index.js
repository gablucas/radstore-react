import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AboutWrapper, ButtonWrapper, BuyButton, CartButton, Container, InfoWrapper, Installments, MeasureButton, Price } from './styles';
import { GlobalContext } from '../Context';
import useLogged from '../../hooks/useLogged';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useQuery } from 'react-query';
import { api } from '../../services/api';

const Product = () => {
  const { measures, setCartQuantity } = React.useContext(GlobalContext);
  const { getValue, setValue, pushValue } = useLocalStorage();
  const [product, setProduct] = React.useState();
  const [selectedMeasure, setSelectedMeasure] = React.useState('');
  const [error, setError] = React.useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useLogged();

  const query = useQuery('products', async () => {
    const { data } = await api.get('data.json');

    setProduct(data.find((p) => p.id === id));
  })


  function handleBuy(type) {
    if (!getValue('cart')) {
      setValue('cart', JSON.stringify([]))
    }

    if (!selectedMeasure) {
      setError('Selecione um tamanho')
    }

    if (selectedMeasure) {
      setError("")

      let cart = JSON.parse(getValue('cart'));
      if (cart.find((f) => f.id === id && f.measure === selectedMeasure)) {
        cart = cart.map((m) => {
          if (m.id === id && m.measure === selectedMeasure) {
            return {...m, quantity: m.quantity + 1};
          }

          return m;
        })

        setValue('cart', JSON.stringify(cart));
        
      } else {
        pushValue('cart', {id, measure: selectedMeasure, quantity: 1});
      }

      setCartQuantity(JSON.parse(getValue('cart')).length)

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
      <div>
        <img src={product.image} alt="" width="700" />
      </div>

      <InfoWrapper>
        <h1>{product.name}</h1>
        <Price>R$ {product.price}</Price>
        <Installments>ou 12x de R$ {Math.floor(parseInt(product.price) / 12)},00 sem juros</Installments>

        <div>
          <span>Escolha um tamanho</span>

          <ul>
          {measures[product.type]?.map((measure) => (
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