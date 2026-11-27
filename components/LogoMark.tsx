import type { FC, SVGProps } from "react";

export const LogoMark: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    fillRule="evenodd"
    clipRule="evenodd"
    aria-hidden="true"
    {...props}
  >
    <path d="M 38,100 L 0,100 L 0,0 L 17.649,0 A 39.5,39.5 0 0 0 30.826,52.845 L 48.453,64.038 A 19.5,19.5 0 0 1 38,100 Z" />
    <path d="M 52,0 A 48,50 0 0 1 75.205,93.769 A 39.5,39.5 0 0 0 59.174,47.155 L 41.547,35.962 A 19.5,19.5 0 0 1 52,0 Z" />
  </svg>
);
