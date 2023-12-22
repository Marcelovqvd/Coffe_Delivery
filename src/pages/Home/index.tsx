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
    appears: 0,
  },
  {
    name: "Latte",
    type: "com Leite ",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    photo: latte,
    appears: 0,
  },
];

type Type = "tradicional" | "com Leite ";

interface Coffe {
  name: string;
  type: Type;
  description: string;
  price: number;
  photo: string;
  appears: number;
}

export default function Home() {
  const [orderNumber, setOrderNumber] = useState(0);
  const [coffeList, setCoffeList] = useState<Coffe[] | undefined>([]);

  function handleCoffeClick(params: any) {
    const chosenCoffeName = params.currentTarget.name;
    const currentCoffe = list.find((item) => item.name === chosenCoffeName);

    setOrderNumber((currentCoffe.appears += 1));
    setCoffeList([...coffeList, currentCoffe]);
  }

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
          <ul>
            {list.map((item) => {
              return (
                <li>
                  <Coffe>
                    <header>
                      <img src={item.photo} alt="" />
                      <small>{item.type}</small>
                    </header>
                    <main>
                      <p>{item.name}</p>
                      <span>{item.description}</span>
                    </main>
                    <footer>
                      <span>
                        R$<span>{item.price}</span>
                      </span>
                      <input
                        type="button"
                        value="-"
                        name={item.name}
                        onClick={handleCoffeClick}
                      />
                      {item.appears}
                      <input
                        type="button"
                        value="+"
                        name={item.name}
                        onClick={handleCoffeClick}
                      />
                      <img src={shopping_cart} alt="" />
                    </footer>
                  </Coffe>
                </li>
              );
            })}
          </ul>
        </main>
      </MenuCoffesContainer>
    </Container>
  );
}
