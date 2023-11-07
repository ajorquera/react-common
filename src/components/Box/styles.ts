import { ifProp, theme, withProp } from 'styled-tools'
import { css } from 'styled-components'

export interface HoverProps {
  hoverBg?: string
  hoverBackgroundColor?: string
  hoverColor?: string
}
export const getHoverStyles = css`
    ${ifProp('hoverBg', css`
        &:hover {
            background-color: ${withProp('hoverBg', prop => theme(`colors.${prop}`, prop))};
        }
    `)}

    ${ifProp('hoverColor', css`
        &:hover {
            color: ${withProp('hoverColor', prop => theme(`colors.${prop}`, prop))};
        }
    `)}
`
