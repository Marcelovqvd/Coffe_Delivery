import { TextInput } from "../../components/Form/TextInput"
import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  Container,
  InfoContainer,
  PaymentContainer,
  PaymentHeading,
  PaymentOptions,
} from "./styles"

import { CurrencyDollar, MapPin } from "@phosphor-icons/react"

export default function Cart() {
  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>
        <form action="">
          <AddressContainer>
            <AddressHeading>
              <MapPin size={22} />
              <div>
                <span>Endereço de Entrega</span>

                <p>Informe o endereço onde deseja receber o seu pedido</p>
              </div>
            </AddressHeading>

            <AddressForm>
              <TextInput placeholder="CEP" type="number" containerProps={{ style: { gridArea: "cep" } }} />
              <TextInput />
              <TextInput />
              <TextInput />
              <TextInput />
              <TextInput />
              <TextInput />
            </AddressForm>
          </AddressContainer>

          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>

                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </PaymentHeading>
            <PaymentOptions>
              <div></div>
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>
    </Container>
  )
}
