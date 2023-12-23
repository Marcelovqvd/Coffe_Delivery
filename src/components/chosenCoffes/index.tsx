import { Title } from "../../pages/Order/styles";
import {
  SelectedContainer,
  SelectedCoffesContainer,
  CoffeCard,
  CoffeTittle,
  PaymentContainer,
  PaymentContainerButton,
} from "./styles";

import trash from "../../assets/trash.svg";
import latte from "../../assets/coffes/Latte.svg";

export default function ChosenCoffes() {
  return (
    <SelectedContainer>
      <Title>Cafés selecionados</Title>

      <SelectedCoffesContainer>
        <CoffeCard>
          <img src={trash} alt="" />
          <CoffeTittle>
            <span>Expresso Tradicional</span>
            <div>
              <input type="string" />
              <button>
                <img src={latte} alt="" />
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
  );
}
