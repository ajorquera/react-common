import styled from 'styled-components';
import { type FlexProps, flex, type styleFn } from 'styled-system';

export interface Props extends FlexProps {
    gap?: number
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
}
const getGap: styleFn = (props: Props) => ({ gap: props.gap });

const Flex = styled.div<Props>(flex, getGap, { display: 'flex' });

export default Flex;
