import {
  HeaderContainer,
  LocationStyle,
  Cart,
  LocationContainer,
} from "./styles";
import logo from "../../assets/logo.svg";
import mapCart from "../../assets/map_cart.svg";
import shopping_cart_yellow from "../../assets/shopping_cart_yellow.svg";

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logo} alt="logo" />
      </span>
      <LocationContainer>
        <LocationStyle>
          <img src={mapCart} alt="map" />
          <span>Porto Alegre, RS</span>
        </LocationStyle>
        <Cart>
          <img src={shopping_cart_yellow} alt="" />
        </Cart>
      </LocationContainer>
    </HeaderContainer>
  );
}
