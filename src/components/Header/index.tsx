import { Aside, Container } from "./styles";
import { Link } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

import logo from "../../../public/images/logo.svg";

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Rio Preto, SP</span>
        </div>

        <Link to={"/"}>
          <ShoppingCart size={22} weight="fill" color="#C47F17" />
        </Link>
      </Aside>
    </Container>
  );
}
