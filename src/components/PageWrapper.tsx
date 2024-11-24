import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  className?: string;
  children: ComponentChildren;
}

export default function PageWrapper({ className, children }: Props) {
  return <div className={clsx("max-w-3xl mx-auto", className)}>{children}</div>;
}
