import styled from 'styled-components'
import { type ColorProps, type LayoutProps, type SpaceProps, border, type BorderProps, color, layout, space } from 'styled-system'
import { getHoverStyles, type HoverProps } from './styles'
import { type PropsWithChildren } from 'react'

export interface Props extends SpaceProps, BorderProps, LayoutProps, ColorProps, HoverProps, PropsWithChildren {
}

export const Box = styled.div<Props>(space, layout, color, border, getHoverStyles)

export const Heading = styled(Box)({ as: 'span' })

export default Box
