import { CoffeeImg, Container, Control, Description, Order, Price, Tags, Title } from "./styles"

export default function Card() {
  return (
    <Container>
      <h1>Card</h1>
      <CoffeeImg />
      <Tags />
      <Title></Title>
      <Description></Description>
      <Control>
        <Price></Price>
        <Order>
          <button></button>
        </Order>
      </Control>
    </Container>
  )
}
