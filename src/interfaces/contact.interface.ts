import { IconProps } from "./icon-props.interface";

export interface IContact {
    title: string;
    subtitle: string;
    url: string;
    icon: React.ComponentType<IconProps>;
    iconColor: string;
}