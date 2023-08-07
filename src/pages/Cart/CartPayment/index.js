import React from 'react';
import { GlobalContext } from '../../../components/Context';
import { Title } from '../styles';
import { CardWrapper, PaymentWrapper } from './styles';
import CreditCardForm from '../../../components/CreditCardForm';
import Select from '../../../components/Forms/Select';

const CartPayment = () => {
  const { loggedUser, checkout, setCheckout} = React.useContext(GlobalContext);
  const [altTab, setAltTab] = React.useState(false);
  const installments = React.useRef([]);

  function handleSelectPayment(type) {
    if (type !== checkout.payment.type) {
      setCheckout(checkout => ({...checkout, payment: {...checkout.payment, type}}));
    }
  }

  function handleSelectCard(card) {
    if (card !== checkout.payment.card) {
      setCheckout(checkout => ({...checkout, payment: {...checkout.payment, card}}));
    }
  }

  // Callback do componente Select
  function saveInstallments(installments) {
    setCheckout(checkout => ({...checkout, payment: {...checkout.payment, installments}}))
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
        <PaymentWrapper onClick={() => handleSelectPayment('Boleto')} selectedPayment={checkout.payment.type === 'Boleto'} >
          <h2>Boleto</h2>

          <div>
            <span>R$ {checkout.payment.subtotal + checkout.payment.shipping},00 À VISTA</span>
            <span>Prazo de pagamento de 1 dia útil.</span>
            <p>O boleto bancário será exibido após a confirmação da compra e poderá ser impresso para pagamento em qualquer agência bancária, ou ter o número anotado para pagamento pelo telefone ou internet. O prazo de entrega passará a valer a partir do momento que o banco confirmar o pagamento do boleto. O processo poderá levar até 3 dias úteis. </p>
          </div>
        </PaymentWrapper>

        <PaymentWrapper onClick={() => handleSelectPayment('Pix')} selectedPayment={checkout.payment.type === 'Pix'} >
          <h2>Pix</h2>

          <div>
            <span>R$ {checkout.payment.subtotal + checkout.payment.shipping},00 À VISTA</span>
            <span>Prazo de pagamento de 4 horas.</span>
            <p>O Pix é instantâneo, ao finalizar seu pedido, você verá o QR Code ou o código do Pix para efetuar o pagamento pelo aplicativo de sua instituição financeira.</p>
          </div>
        </PaymentWrapper>

        <PaymentWrapper onClick={() => handleSelectPayment('Cartão')} selectedPayment={checkout.payment.type === 'Cartão'} >
          {!altTab ? (
            <>
              <h2>Cartão de crédito</h2>

              <div>
                {loggedUser?.payment.map((m, index) => (
                  <CardWrapper key={index} onClick={() => handleSelectCard(m.cardnumber)} selectedCard={checkout.payment.card === m.cardnumber} >
                    <span>{m.cardname}</span>
                    <span>Numero: {m.cardnumber}</span>
                    <span>Vencimento: {m.validity[0] + '/' + m.validity[1]}</span>
                    {checkout.payment.card === m.cardnumber && <Select saveValue={saveInstallments} options={installments.current} />}
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