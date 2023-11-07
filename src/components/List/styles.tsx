import { type FlattenInterpolation, css } from 'styled-components'
import { ifProp, theme } from 'styled-tools'

export interface DisabledProps {
  disabled?: boolean
}
export const getDisabled = ifProp<DisabledProps, FlattenInterpolation, undefined>('disabled', css`
    opacity: 0.5;
    pointer-events: none;
    font-style: italic;
`)

export interface HighlightProps {
  $highlight?: string
}
export const getHighlight = ifProp<HighlightProps, FlattenInterpolation>('$highlight', css<HighlightProps>`
    background-color: ${props => theme(`colors.${props.$highlight}`, props.$highlight)};
`)

export interface ClickableProps {
  clickable?: boolean
}
export const getClickable = ifProp<ClickableProps, FlattenInterpolation>('$clickable', 'cursor: pointer;')
