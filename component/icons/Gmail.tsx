import * as React from "react";

interface AccountIconProps extends React.SVGProps<SVGSVGElement> {
  colors?: {
    fill?: string;
  };
}

const AccountIcon = ({ colors = { fill: "#fff" }, ...props }: AccountIconProps) => (
  <svg width="100%" height="100%" viewBox="0 0 689 684" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_9_31)">
    <path d="M585.65 0H103.35C46.2714 0 0 45.9356 0 102.6V581.4C0 638.064 46.2714 684 103.35 684H585.65C642.729 684 689 638.064 689 581.4V102.6C689 45.9356 642.729 0 585.65 0Z" fill="white"/>
    <path d="M212.621 522.352V332.648L102.273 248.484V482.273C102.273 508.992 115.73 522.352 142.645 522.352" fill="#4285F4"/>
    <path d="M207.238 331.312L344.5 434.18L481.762 331.312V200.391L344.5 303.258L207.238 200.391" fill="#EA4335"/>
    <path d="M476.379 522.352V332.648L586.727 248.484V482.273C586.727 508.992 573.27 522.352 546.355 522.352" fill="#34A853"/>
    <path d="M102.273 251.156L212.621 335.32V204.398L172.25 173.672C135.916 145.617 102.273 173.672 102.273 208.406" fill="#C5221F"/>
    <path d="M586.727 251.156L476.379 335.32V204.398L516.75 173.672C553.084 145.617 586.727 173.672 586.727 208.406" fill="#FBBC04"/>
    </g>
    <defs>
    <clipPath id="clip0_9_31">
    <rect width="689" height="684" fill="white"/>
    </clipPath>
    </defs>
</svg>

);

export default AccountIcon;
