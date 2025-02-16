import { ReactNode } from "react";

type Props = {
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...rest }: Props) {
  return <button {...rest}>{children}</button>;
}
