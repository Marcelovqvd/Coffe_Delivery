import { HTMLAttributes, InputHTMLAttributes, LegacyRef, forwardRef } from "react"

import { FieldError } from "react-hook-form"
import { Box, Container } from "./styles"

type Props = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  containerProps?: HTMLAttributes<HTMLDivElement>
  error?: FieldError
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
