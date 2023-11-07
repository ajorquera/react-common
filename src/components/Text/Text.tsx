import styled from 'styled-components'
import { type TypographyProps, typography } from 'styled-system'

export interface Props extends TypographyProps { }
const Text = styled.span<Props>(typography)

export default Text
