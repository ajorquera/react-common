import styled from 'styled-components'
import { type BoxProps, Box } from '../../Box'

export interface Props extends BoxProps { }

const Ul = styled(Box)<Props>({
  listStyle: 'none',
  marginTop: 0,
  marginBottom: 0,
  paddingLeft: 0
})

Ul.defaultProps = {
  as: 'ul'
}

export default Ul
