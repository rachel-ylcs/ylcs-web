import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  className?: string;
  children: ComponentChildren;
}

export default function Column({ className, children }: Props) {
  return <div className={clsx("flex flex-col", className)}>{children}</div>;
}
