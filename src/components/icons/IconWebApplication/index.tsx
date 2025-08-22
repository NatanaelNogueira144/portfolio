import { IconProps } from "../../../interfaces/icon-props.interface";

interface IconWebApplicationProps extends IconProps {}

export default function IconWebApplication({ color, size }: IconWebApplicationProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" color={color}>
            <g>
                <path fill="currentColor" d="M464,0H48C21.492,0,0,21.492,0,48v416c0,26.508,21.492,48,48,48h416c26.508,0,48-21.492,48-48V48   C512,21.492,490.508,0,464,0z M444.664,35c10.492,0,19,8.508,19,19s-8.508,19-19,19c-10.492,0-19-8.508-19-19   S434.172,35,444.664,35z M374.164,35c10.492,0,19,8.508,19,19s-8.508,19-19,19c-10.492,0-19-8.508-19-19S363.672,35,374.164,35z    M303.664,35c10.492,0,19,8.508,19,19s-8.508,19-19,19c-10.492,0-19-8.508-19-19S293.172,35,303.664,35z M472,464   c0,4.406-3.586,8-8,8H48c-4.414,0-8-3.594-8-8V104h432V464z" />
                <rect fill="currentColor" x="96" y="192" width="152" height="32" />
                <rect fill="currentColor" x="96" y="352" width="328" height="32" />
                <rect fill="currentColor" x="304" y="192" width="120" height="120" />
                <polygon fill="currentColor" points="229.042,304 248,304 248,272 96,272 96,304 213.042,304  " />
            </g>
        </svg>
    );
}