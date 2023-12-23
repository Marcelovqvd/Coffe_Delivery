import { Container, MainContainer, SuccessImage } from "./styles";

import illustration from "../../assets/success/Illustration.svg";

export default function Success() {
  return (
    <Container>
      <MainContainer>
        <header>
          <p>Uhu! Pedido confirmado</p>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </header>
        <main>
          <ul>
            <li>
              <img src="" alt="" />
              <p>
                Entrega em Rua João Daniel Martinelli, 102Farrapos - Porto
                Alegre, RS
              </p>
            </li>
            <li>
              <img src="" alt="" />
              <p>Previsão de entrega 20 min - 30 min </p>
            </li>
            <li>
              <img src="" alt="" />
              <p>Pagamento na entrega Cartão de Crédito</p>
            </li>
          </ul>
        </main>
      </MainContainer>
      <SuccessImage>
        <img src={illustration} alt="" />
      </SuccessImage>
    </Container>
  );
}
