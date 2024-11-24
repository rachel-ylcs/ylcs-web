import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
  className?: string;
  href: string;
  children: ComponentChildren;
}

export default function Link({ className, href, children }: Props) {
  return (
    <a className={clsx("w-fit text-[#4682B4] text-[15px]", className)} href={href}>
      {children}
    </a>
  );
}
