import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  className?: string;
  children: ComponentChildren;
}

export default function Row({ className, children }: Props) {
  return <div className={clsx("flex", className)}>{children}</div>;
}
