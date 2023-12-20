import {
  Container,
  OrderContainer,
  Title,
  ButtonsForm,
  PaymentContainer,
  SelectedCoffesContainer,
  OrderForm,
  FormTittle,
  InputsForm,
  TitleContainer,
  PaymentForm,
  SelectedContainer,
  CoffeCard,
  CoffeTittle,
  PaymentContainerButton,
} from "./styles";

import deliver_address from "../../assets/deliver_address.svg";
import money from "../../assets/money.svg";
import credit_card_Icon from "../../assets/credit_card_Icon.svg";
import debit_card_Icon from "../../assets/debit_card_Icon.svg";
import money_Icon from "../../assets/money_Icon.svg";
import trash from "../../assets/trash.svg";

import latte from "../../assets/coffes/Latte.svg";

export function Order() {
  return (
    <Container>
      <OrderContainer>
        <Title>Complete seu pedido</Title>

        <OrderForm>
          <form>
            <TitleContainer>
              <img src={deliver_address} alt="Endereço de entrega" />
              <FormTittle>
                <p>Endereço de entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </FormTittle>
            </TitleContainer>

            <InputsForm>
              <input type="text" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complement" />
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </InputsForm>
          </form>
        </OrderForm>

        <PaymentForm>
          <TitleContainer>
            <img src={money} alt="money icon" />
            <FormTittle>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </FormTittle>
          </TitleContainer>

          <ButtonsForm>
            <button>
              <img src={credit_card_Icon} alt="" />
              Cartão de crédito
            </button>
            <button>
              <img src={debit_card_Icon} alt="" />
              Cartão de dédito
            </button>
            <button>
              <img src={money_Icon} alt="" />
              Dinheiro
            </button>
          </ButtonsForm>
        </PaymentForm>
      </OrderContainer>

      <SelectedContainer>
        <Title>Cafés selecionados</Title>

        <SelectedCoffesContainer>
          <CoffeCard>
            <img src={latte} alt="" />
            <CoffeTittle>
              <span>Expresso Tradicional</span>
              <div>
                <input type="string" />
                <button>
                  <img src={trash} alt="" />
                  Remover
                </button>
              </div>
            </CoffeTittle>
            <span>R$ 9,90</span>
          </CoffeCard>
          <PaymentContainer>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
            <span>Entrega</span>
            <span>R$ 3,50</span>
            <p>total</p>
            <span>R$ 33,20</span>
          </PaymentContainer>
          <PaymentContainerButton>Confirmar Pedido</PaymentContainerButton>
        </SelectedCoffesContainer>
      </SelectedContainer>
    </Container>
  );
}