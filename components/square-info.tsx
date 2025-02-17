import { ISvg } from "@/interfaces/svg.interface";

export function SquareInfo({ ...props }: ISvg) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20 25H20.0167H20Z" fill="currecntColor" />
      <path
        d="M20 25H20.0167"
        stroke="CurrentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.01889 17.3388L17.3388 9.01895C18.8086 7.54927 21.1913 7.54927 22.6611 9.01895L30.981 17.3388C32.4508 18.8087 32.4508 21.1913 30.981 22.6612L22.6611 30.981C21.1913 32.4509 18.8086 32.4509 17.3388 30.981L9.01889 22.6612C7.54921 21.1913 7.54921 18.8087 9.01889 17.3388Z"
        stroke="red"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 14.5833V20.4166V14.5833Z" fill="currentColor" />
      <path
        d="M20 14.5833V20.4166"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
