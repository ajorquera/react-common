import React, { FC, ReactNode } from 'react';
import Box, { BoxProps } from '../Box';

import styled from 'styled-components';
import List, { type Props as ListProps } from '../List';

const ContainerStyle = styled(Box)`
    height: 100vh;
    transition: 0.5s;
    display: inline-block;
    position: fixed;
`;

export interface Props extends ListProps {
    header?: ReactNode
    containerProps?: BoxProps
}

/**
 * Sidebar component
 *
 */
const Sidebar: FC<Props> = ({ containerProps, header, ...props }) => {
    return (
        <ContainerStyle {...containerProps}>
            {header}
            <List {...props} />
        </ContainerStyle >
    );
};

export default Sidebar;