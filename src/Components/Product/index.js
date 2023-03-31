import React from 'react'
import { useParams } from 'react-router-dom'
import { AboutWrapper, ButtonWrapper, BuyButton, CartButton, Container, InfoWrapper, Installments, MeasureButton, Price } from './styles';
import { GlobalContext } from '../Context';

const Product = () => {
  const { setData, data, measures } = React.useContext(GlobalContext);
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://gablucas.github.io/jsonapi/radstore/produto/${id}.json`)
    .then(response => response.json())
    .then(json => setData(json[id]))
  }, [setData, id])


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
            <MeasureButton key={measure}>{measure}</MeasureButton>
          ))}
          </ul>
        </div>

        <ButtonWrapper>
          <BuyButton>COMPRAR</BuyButton>
          <CartButton>ADICIONAR AO CARRINHO</CartButton>
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