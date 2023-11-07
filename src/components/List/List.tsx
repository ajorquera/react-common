import type { ReactNode, FC } from 'react';
import { type BoxProps } from '../Box';

import Ul from './components/Ul';
import Li, { type Props as LiProps } from './components/Li';

export interface Item {
    label: ReactNode
    disabled?: boolean
    liProps?: LiProps
    items?: Item[]
    listProps?: Partial<Props>
}

export interface Props extends BoxProps {
    items: Item[]
    onClick?: (item: Item) => void
    liProps?: LiProps
}

/**
 * Creates a list of items
 *
 * @param items - The items to display in the list
 * @param onClick - The function to call when an item is clicked
 * @param liProps - The props to pass to the li element
 * @param props - The props to pass to the ul element
 */
const List: FC<Props> = ({ items, onClick, liProps, ...props }) => {
    return (
        <Ul {...props}>
            {items.map((item, key) => (
                <Li
                    clickable={Boolean(onClick)}
                    disabled={item.disabled}
                    key={key}
                    onClick={() => onClick && !item.items && onClick(item)}
                    {...item.liProps}
                    {...liProps}
                >
                    {item.label}
                    {item.items && <List items={item.items} {...item.listProps} onClick={onClick} />}
                </Li>
            ))}
        </Ul>
    );
};

export default List;
