import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  className?: string;
  href: string;
  children: ComponentChildren;
}

export default function Link({ className, href, children }: Props) {
  return (
    <a className={clsx("w-fit text-blue-700", className)} href={href}>
      {children}
    </a>
  );
}
