import * as React from "react";

interface AccountIconProps extends React.SVGProps<SVGSVGElement> {
  colors?: {
    fill?: string;
  };
}

const AccountIcon = ({ colors = { fill: "#fff" }, ...props }: AccountIconProps) => (
  <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_7_14)">
    <path d="M680 0H120C53.7258 0 0 53.7258 0 120V680C0 746.274 53.7258 800 120 800H680C746.274 800 800 746.274 800 680V120C800 53.7258 746.274 0 680 0Z" fill="#0077B5"/>
    <path d="M221.875 273.438C253.804 273.438 279.688 247.554 279.688 215.625C279.688 183.696 253.804 157.812 221.875 157.812C189.946 157.812 164.062 183.696 164.062 215.625C164.062 247.554 189.946 273.438 221.875 273.438Z" fill="white"/>
    <path d="M381.25 303.125V612.5ZM221.875 303.125V612.5Z" fill="white"/>
    <path d="M381.25 303.125V612.5M221.875 303.125V612.5" stroke="white" strokeWidth="103.125"/>
    <path d="M431.25 440.625C431.25 409.375 451.562 378.125 487.5 378.125C525 378.125 539.062 406.25 539.062 448.438V612.5H642.188V435.938C642.188 340.625 592.188 296.875 523.438 296.875C470.312 296.875 443.75 326.562 431.25 346.875" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_7_14">
    <rect width="800" height="800" fill="white"/>
    </clipPath>
    </defs>
</svg>


);

export default AccountIcon;
