import { Card } from '../../Card';
import styled from 'styled-components';

const CustomCard = styled(Card)`
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 101;
    transform: translate(-50%, -50%);
    overflow-x: auto;
`;

export default CustomCard;
