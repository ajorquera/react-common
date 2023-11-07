import styled from 'styled-components';
import Box, { type BoxProps } from '../../Box';

export interface Props extends BoxProps { }

const Ul = styled(Box)<Props>({
    listStyle: 'none'
});

Ul.defaultProps = {
    as: 'ul',
    mt: 0,
    marginBottom: 0,
    paddingLeft: 0
};

export default Ul;
