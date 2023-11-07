export interface ILink {
    label: string;
    href?: string;
    active?: boolean;
    icon?: JSX.Element | string;
    external?: boolean;
    children?: ILink[];
}