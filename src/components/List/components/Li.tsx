import styled from 'styled-components'

import { type BoxProps, Box } from '../../Box'
import { getClickable, getDisabled, getHighlight, type HighlightProps, type ClickableProps, type DisabledProps } from '../styles'

export interface Props extends BoxProps, HighlightProps, ClickableProps, DisabledProps, Omit<React.HTMLAttributes<HTMLLIElement>, 'color'> {
  disabled?: boolean
}

const Li = styled(Box).attrs<any>(props => ({ $clickable: props.clickable, clickable: undefined }))(getDisabled, getClickable, getHighlight)

Li.defaultProps = {
  as: 'li'
}

export default Li
