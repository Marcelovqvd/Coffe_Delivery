import {
  HeaderContainer,
  HeaderImage,
  HeaderSubtitles,
  HeaderTexts,
} from "./styles";

import image_header_home from "../../assets/Home/image_header_home.svg";
import cart_icon from "../../assets/Home/cart_icon.svg";
import clock_icon from "../../assets/Home/clock_icon.svg";
import coffe_icon from "../../assets/Home/coffe_icon.svg";
import pack_icon from "../../assets/Home/pack_icon.svg";

export default function Home() {
  return (
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
  );
}
