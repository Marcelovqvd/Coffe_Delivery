import { HTMLAttributes, InputHTMLAttributes, LegacyRef, forwardRef } from "react"

import { Box, Container } from "./styles"

type Props = InputHTMLAttributes<HTMLInputElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>
}

export const TextInput = forwardRef(function TextInput(
  { containerProps, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <Box {...containerProps}>
      <Container>
        <input type="text" ref={ref} {...rest} />
      </Container>
    </Box>
  )
})
