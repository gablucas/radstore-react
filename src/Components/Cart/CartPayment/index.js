import React from 'react';
import { Title } from '../styles';
import { CardWrapper, PaymentWrapper } from './styles';
import { GlobalContext } from '../../Context';
import CreditCardForm from '../../CreditCardForm';
import useLogged from '../../../hooks/useLogged';
import Select from '../../Forms/Select';

const CartPayment = () => {
  const { selectedPayment, setSelectedPayment, setInstallments, selectedCard, setSelectedCard, loggedUser, total } = React.useContext(GlobalContext);
  const [altTab, setAltTab] = React.useState(false);
  useLogged();
  const installments = React.useRef([]);

  function handleSelectPayment(payment) {
    if (payment !== selectedPayment) {
      setSelectedPayment(payment);
    }
  }

  function handleSelectCard(card) {
    if (card !== selectedCard) {
      setSelectedCard(card);
    }
  }

  React.useEffect(() => {
    for (let i = 1; i <= 12; i++) {
      installments.current.push(`${i} ${i === 1 ? "parcela" : "parcelas"} de R$ ${Math.round(total / i)},00`)
    }
  }, [total])

  return (
    <div>
      <Title>SELECIONE UMA FORMA DE PAGAMENTO</Title>

      <div>
        <PaymentWrapper onClick={() => handleSelectPayment('boleto')} selectedPayment={selectedPayment === 'boleto'} >
          <h2>Boleto</h2>

          <div>
            <span>R$ {total},00 À VISTA</span>
            <span>Prazo de pagamento de 1 dia útil.</span>
            <p>O boleto bancário será exibido após a confirmação da compra e poderá ser impresso para pagamento em qualquer agência bancária, ou ter o número anotado para pagamento pelo telefone ou internet. O prazo de entrega passará a valer a partir do momento que o banco confirmar o pagamento do boleto. O processo poderá levar até 3 dias úteis. </p>
          </div>
        </PaymentWrapper>

        <PaymentWrapper onClick={() => handleSelectPayment('pix')} selectedPayment={selectedPayment === 'pix'} >
          <h2>Pix</h2>

          <div>
            <span>R$ {total},00 À VISTA</span>
            <span>Prazo de pagamento de 4 horas.</span>
            <p>O Pix é instantâneo, ao finalizar seu pedido, você verá o QR Code ou o código do Pix para efetuar o pagamento pelo aplicativo de sua instituição financeira.</p>
          </div>
        </PaymentWrapper>

        <PaymentWrapper onClick={() => handleSelectPayment('cartao')} selectedPayment={selectedPayment === 'cartao'} >
          {!altTab ? (
            <>
              <h2>Cartão de crédito</h2>

              <div>
              <Select saveValue={setInstallments} options={installments.current.map((m, index) => index)} initialValue='1' names={installments.current} />
                {loggedUser?.payment.map((m, index) => (
                  <CardWrapper key={index} onClick={() => handleSelectCard(m.cardnumber)} selectedCard={selectedCard === m.cardnumber} >
                    <span>{m.cardname}</span>
                    <span>Numero: {m.cardnumber}</span>
                    <span>Vencimento: {m.validity[0] + '/' + m.validity[1]}</span>
                  </CardWrapper>
                ))}
              <button onClick={() => setAltTab(true)}>+ Adicionar novo cartão</button>
              </div>
            </>
          ) : (
            <div>
              <h2>REGISTRAR NOVO CARTÃO</h2>
              <span>R$ 000,00 EM 00X</span>
              <CreditCardForm goback={() => setAltTab(false)} savePayment={() => setAltTab(false)}/>
            </div>
          )}

        </PaymentWrapper>
      </div>
    </div>
  )
}

export default CartPayment