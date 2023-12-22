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
import latte from "../../assets/coffes/Latte.svg";
import shopping_cart from "../../assets/shopping_cart.svg";
import { useState } from "react";

const list: Coffe[] = [
  {
    name: "Expresso Tradicional",
    type: "tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    photo: expresso_tradicional,
  },
  {
    name: "Latte",
    type: "com Leite ",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    photo: latte,
  },
];

type Type = "tradicional" | "com Leite ";

interface Coffe {
  name: string;
  type: Type;
  description: string;
  price: number;
  photo: string;
}

export default function Home() {
  const [orderNumber, setOrderNumber] = useState(0);
  const [list, setList] = useState<Coffe[]>([]);

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
              <button>-</button>
              {orderNumber}
              <button>+</button>
              <img src={shopping_cart} alt="" />
            </footer>
          </Coffe>
          <Coffe>
            <header>
              <img src={latte} alt="" />
              <small>com leite</small>
            </header>
            <main>
              <p>latte</p>
              <span>
                Uma dose de café expresso com o dobro de leite e espuma cremosa
              </span>
            </main>
            <footer>
              <span>
                R$<span>9,90</span>
              </span>
              <button>-</button>
              {orderNumber}
              <button>+</button>
              <img src={shopping_cart} alt="" />
            </footer>
          </Coffe>
        </main>
      </MenuCoffesContainer>
    </Container>
  );
}
