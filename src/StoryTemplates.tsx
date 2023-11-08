import { type FC } from 'react';
import Flex from './components/Flex';
import { ModalProvider } from './components/Modal';

// disable eslint for next line
// eslint-disable-next-line react/display-name
export const MultipleComponentsTemplate = (Component: FC<any>, commonProps = {}) => ({ items }: any) => (
    <Flex flexWrap="wrap" gap={20} >
        {items?.map((item: any, index: number) => (
            <div key={index}>
                <Component {...commonProps} {...item} />
            </div>
        ))}
    </Flex>
);

export const ModalComponentTemplate = (Modal: FC<any>, props = {}) => (args) => (
    <ModalProvider>
        <Modal {...props} {...args} />
    </ModalProvider>
);
