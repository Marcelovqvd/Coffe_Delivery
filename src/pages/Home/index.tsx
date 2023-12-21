import {
  Coffe,
  Container,
  HeaderContainer,
  HeaderImage,
  HeaderSubtitles,
  HeaderTexts,
  MenuCoffesContainer,
} from "./styles";

import image_header_home from "../../assets/Home/image_header_home.svg";
import cart_icon from "../../assets/Home/cart_icon.svg";
import clock_icon from "../../assets/Home/clock_icon.svg";
import coffe_icon from "../../assets/Home/coffe_icon.svg";
import pack_icon from "../../assets/Home/pack_icon.svg";
import expresso_tradicional from "../../assets/coffes/expresso_tradicional.svg";
import shopping_cart from "../../assets/shopping_cart.svg";

export default function Home() {
  return (
    <Container>
      <HeaderContainer>
        <HeaderTexts>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <HeaderSubtitles>
            <img src={cart_icon} alt="cart" />
            <span>Compra simples e segura</span>
            <img src={clock_icon} alt="clock" />
            <span>Entrega rápida e rastreada</span>
            <img src={coffe_icon} alt="coffe" />
            <span>O café chega fresquinho até você</span>
            <img src={pack_icon} alt="pack" />
            <span>Embalagem mantém o café intacto</span>
          </HeaderSubtitles>
        </HeaderTexts>
        <HeaderImage>
          <img src={image_header_home} alt="coffe" />
        </HeaderImage>
      </HeaderContainer>
      <MenuCoffesContainer>
        <header>
          <p>Nossos cafés</p>
        </header>
        <main>
          <Coffe>
            <header>
              <img src={expresso_tradicional} alt="" />
              <small>tradicional</small>
            </header>
            <main>
              <p>Expresso Tradicional</p>
              <span>
                O tradicional café feito com água quente e grãos moídos
              </span>
            </main>
            <footer>
              <span>
                R$<span>9,90</span>
              </span>
              <span>+ 1 +</span>
              <img src={shopping_cart} alt="" />
            </footer>
          </Coffe>
        </main>
      </MenuCoffesContainer>
    </Container>
  );
}
