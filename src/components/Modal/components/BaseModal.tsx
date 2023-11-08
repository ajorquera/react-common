import React, { type FC, type ReactNode, useContext, useEffect } from 'react';

import Box from '../..//Box';
import Overlay from './Overlay';

import { context } from '../ModalProvider';
import Card, { type Props as CardProps } from './Card';

export interface Props extends CardProps {
    title: ReactNode
}

const BaseModal: FC<Props> = ({ children, title, ...props }) => {
    const { closeModal } = useContext(context);

    return (
        <div style={{ position: 'relative' }}>
            <Overlay onClick={closeModal} />
            <Card {...props}>

                <Box mt={3}>{children}</Box>
            </Card>
        </div>
    );
};

export default BaseModal;
