import { IconProps } from "./icon-props.interface";

export interface IService {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<IconProps>;
    color: string;
    images: string[];
    cardImage: string;
}