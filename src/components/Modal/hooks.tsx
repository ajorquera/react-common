import { type FC, useCallback, useContext } from 'react';
import { context } from './ModalProvider';

interface HookProps {
    open: (props?: Record<string, any>) => void
    close: () => void
    isOpenModal: boolean
}

export const useModal = (Modal: FC<any>, opts?: any): HookProps => {
    const { openModal, closeModal, isOpenModal } = useContext(context);

    const open = useCallback((props) => openModal(Modal, { ...opts, ...props }), [Modal, opts]);

    return { open, close: closeModal, isOpenModal };
};
