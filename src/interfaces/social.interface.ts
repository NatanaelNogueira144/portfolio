import { IconProps } from "./icon-props.interface";

export interface ISocial {
    title: string;
    url: string;
    hoverColor: string;
    icon: React.ComponentType<IconProps>;
}