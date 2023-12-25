import { CoffeeImg, Container, Control, Description, Order, Price, Tags, Title } from "./styles"
import { useState } from "react"
import { CheckFat, ShoppingCart } from "@phosphor-icons/react"
import { useTheme } from "styled-components"

type Props = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export default function Card({ coffee }: Props) {
  const [isItemAdded, setIsItemAdded] = useState(false)
  const theme = useTheme()

  return (
    <Container>
      <CoffeeImg src={coffee.image} alt={coffee.title} />
      <Tags>
        {coffee.tags.map(tag => {
          return <span key={tag}>{tag}</span>
        })}
      </Tags>
      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>
      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>
        <Order>
          <button disabled={isItemAdded} $itemAdded={isItemAdded}>
            {isItemAdded ? (
              <CheckFat weight="fill" size={22} color={theme.colors["base-card"]} />
            ) : (
              <ShoppingCart size={22} color={theme.colors["base-card"]} />
            )}
          </button>
        </Order>
      </Control>
    </Container>
  )
}
