import styled from 'styled-components'

import { Box, type BoxProps } from '../Box'
import { shadow, type ShadowProps } from 'styled-system'

export interface Props extends ShadowProps, BoxProps { }

const Card = styled(Box)<Props>(shadow)

Card.defaultProps = {
  boxShadow: '0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%)',
  bg: 'white',
  p: 3
}

export default Card
