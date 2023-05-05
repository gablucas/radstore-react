import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  max-width: 1440px;
  display: grid;
  grid-template-columns: ${props => props.selectedPage !== 'pedido-realizado' ? '2fr minmax(100px, 400px)' : '800px'};
  justify-content: center;
  align-items: start;
  padding-left: 40px;
  padding-right: 40px;
  column-gap: 40px;

  @media (max-width: 1240px) {
    grid-template-columns: 1fr;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 425px) {
    grid-template-columns: minmax(200px, 1fr);
    padding-left: 10px;
    padding-right: 10px;
  }
`

export const BuySteps = styled.div`
  grid-column: 1/-1;
  display: flex;
  gap: 100px;
  padding: 20px;
  font: var(--font1-20-b);
  text-transform: uppercase;
  color: #C8C8C8;
  

  a:nth-child(1) {
    color: #000000;
  }

  a:nth-child(2) {
    color: ${props => props.selectedPage === 'entrega' && "#000000"};

    &::before {
      box-shadow:${props => props.selectedPage === 'entrega' && 'inset 80px 0px #000000'};
      transition: ${props => props.selectedPage === 'entrega' && "box-shadow 1s"};
    }
  }

  a:nth-child(2),
  a:nth-child(3) {
    color: ${props => props.selectedPage === 'pagamento' && "#000000"};

    &::before {
      box-shadow:${props => props.selectedPage === 'pagamento' && 'inset 80px 0px #000000'};
      transition: ${props => props.selectedPage === 'pagamento' && "box-shadow 1s"};
    }
  }
  
  a {
    position: relative;
  }

  a + a::before {
    content: "";
    height: 2px;
    width: 60px;
    background: #C8C8C8;
    

    position: absolute;
    top: 10px;
    left: -80px;
  }

  @media (max-width: 768px) {
    gap: 60px;
    font: var(--font1-18-b);

    a + a::before {
      width: 40px;
      left: -50px;
    }
  }

  @media (max-width: 425px) {
    gap: 20px;
    padding: 10px;
    font: var(--font1-14-b);

    a + a::before {
      width: 10px;
      top: 8px;
      left: -15px;
    }
  }
`

export const Title = styled.h1`
  padding-top: 20px;
  padding-bottom: 20px;
  font: var(--font2-16-m);
  text-transform: uppercase;
  border-top: 1px solid #C8C8C8;
  border-bottom: 1px solid #C8C8C8;

  @media (max-width: 768px) {
    padding-top: 12px;
    padding-bottom: 12px;
    font: var(--font2-16-m);
  }

  @media (max-width: 425px) {
    padding-top: 10px;
    padding-bottom: 10px;
    font: var(--font2-14-m);
  }
`