import React from 'react';
import { Title } from '../styles';
import { CardWrapper, PaymentWrapper } from './styles';
import { GlobalContext } from '../../Context';
import CreditCardForm from '../../CreditCardForm';

import Select from '../../Forms/Select';

const CartPayment = () => {
  const { loggedUser, checkout, setCheckout} = React.useContext(GlobalContext);
  const [altTab, setAltTab] = React.useState(false);
  const installments = React.useRef([]);

  function handleSelectPayment(payment) {
    if (payment !== checkout.payment.type) {
      setCheckout(checkout => ({...checkout, payment: {type: payment, subtotal: checkout.payment.subtotal, shipping: checkout.payment.shipping}}));
    }
  }

  function handleSelectCard(card) {
    if (card !== checkout.payment.card) {
      setCheckout(checkout => ({...checkout, payment: {...checkout.payment, card}}));
    }
  }

  function saveInstallments(value) {
    setCheckout(checkout => ({...checkout.payment, installments: value}))
  }

  React.useEffect(() => {
    for (let i = 1; i <= 12; i++) {
      installments.current.push(`${i} ${i === 1 ? "parcela" : "parcelas"} de R$ ${Math.round((checkout.payment.subtotal + checkout.payment.shipping) / i)},00`);
    }
  }, [checkout.payment.subtotal, checkout.payment.shipping])

  return (
    <div>
      <Title>SELECIONE UMA FORMA DE PAGAMENTO</Title>

      <div>
        <PaymentWrapper onClick={() => handleSelectPayment('boleto')} selectedPayment={checkout.payment.type === 'boleto'} >
          <h2>Boleto</h2>

          <div>
            <span>R$ {checkout.payment.subtotal + checkout.payment.shipping},00 À VISTA</span>
            <span>Prazo de pagamento de 1 dia útil.</span>
            <p>O boleto bancário será exibido após a confirmação da compra e poderá ser impresso para pagamento em qualquer agência bancária, ou ter o número anotado para pagamento pelo telefone ou internet. O prazo de entrega passará a valer a partir do momento que o banco confirmar o pagamento do boleto. O processo poderá levar até 3 dias úteis. </p>
          </div>
        </PaymentWrapper>

        <PaymentWrapper onClick={() => handleSelectPayment('pix')} selectedPayment={checkout.payment.type === 'pix'} >
          <h2>Pix</h2>

          <div>
            <span>R$ {checkout.payment.subtotal + checkout.payment.shipping},00 À VISTA</span>
            <span>Prazo de pagamento de 4 horas.</span>
            <p>O Pix é instantâneo, ao finalizar seu pedido, você verá o QR Code ou o código do Pix para efetuar o pagamento pelo aplicativo de sua instituição financeira.</p>
          </div>
        </PaymentWrapper>

        <PaymentWrapper onClick={() => handleSelectPayment('cartao')} selectedPayment={checkout.payment.type === 'cartao'} >
          {!altTab ? (
            <>
              <h2>Cartão de crédito</h2>

              <div>
                {loggedUser?.payment.map((m, index) => (
                  <CardWrapper key={index} onClick={() => handleSelectCard(m.cardnumber)} selectedCard={checkout.payment.card === m.cardnumber} >
                    <span>{m.cardname}</span>
                    <span>Numero: {m.cardnumber}</span>
                    <span>Vencimento: {m.validity[0] + '/' + m.validity[1]}</span>
                    {checkout.payment.card === m.cardnumber && <Select saveValue={saveInstallments} options={installments.current.map((m, index) => index)} initialValue='1' names={installments.current} />}
                  </CardWrapper>
                ))}
              <button onClick={() => setAltTab(true)}>+ Adicionar novo cartão</button>
              </div>
            </>
          ) : (
            <div>
              <h2>REGISTRAR NOVO CARTÃO</h2>
              <CreditCardForm goback={() => setAltTab(false)} savePayment={() => setAltTab(false)}/>
            </div>
          )}

        </PaymentWrapper>
      </div>
    </div>
  )
}

export default CartPayment