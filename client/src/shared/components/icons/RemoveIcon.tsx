import type IconProps from "../../types/IconProps";

export default function RemoveIcon({ fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill={fill}
    >
      <path d="M200-440v-80h560v80H200Z" />
    </svg>
  );
}
