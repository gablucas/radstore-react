import styled from "styled-components";

export const Container = styled.section`

`

export const BuySteps = styled.div`
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
`