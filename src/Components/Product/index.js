import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AboutWrapper, ButtonWrapper, BuyButton, CartButton, Container, ImageWrapper, InfoWrapper, Installments, MeasureButton, Price } from './styles';
import { GlobalContext } from '../Context';
import useLocalStorage from '../../hooks/useLocalStorage';
import Favorite from '../Favorite';
import Image from '../Helper/Image';

const Product = () => {
  const { products, setCart } = React.useContext(GlobalContext);
  const { getValue, setValue, pushValue } = useLocalStorage();
  const [product, setProduct] = React.useState();
  const [selectedMeasure, setSelectedMeasure] = React.useState('');
  const [error, setError] = React.useState("");
  const { id } = useParams();
  const navigate = useNavigate();


  React.useEffect(() => {
    setProduct(products.find((p) => p.id === id));
  }, [setProduct, products, id])

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
      
      setCart(JSON.parse(getValue('cart')));

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