import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Container, FilterWrapper, ProductColor, ProductSize } from './styles'

const Filter = ({ data }) => {
  let uniqueColors = data?.map((product) => product.color)
  let colors = Array.from(new Set(uniqueColors?.map(JSON.stringify)), JSON.parse)
  const [searchParams, setSearchParams] = useSearchParams();
  

  function handleColor(color) {
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set('color', color)
    setSearchParams(updatedSearchParams.toString());
  }

  return (
    <Container>

      {/* TAMANHO DO PRODUTO */}
      <FilterWrapper>
        <span>Tamanho</span>
        
        <div>
          <ProductSize><span>PP</span></ProductSize>
          <ProductSize><span>P</span></ProductSize>
          <ProductSize><span>M</span></ProductSize>
          <ProductSize><span>G</span></ProductSize>
          <ProductSize><span>GG</span></ProductSize>
        </div>

      </FilterWrapper>

      {/* COR DO PRODUTO */}
      <FilterWrapper>
        <span>Cores</span>

        <div>
          {colors.map((color) => (
            <ProductColor key={color[0]} color={color[1]} colorName={color[0]} onClick={() => handleColor(color[0])} />
          ))}
        </div>

      </FilterWrapper>

      {/* PREÇO DO PRODUTO */}
      <FilterWrapper>
        <span>Preço</span>
      </FilterWrapper>

    </Container>
  )
}

export default Filter