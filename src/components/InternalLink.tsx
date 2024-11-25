import clsx from "clsx";
import type { ComponentChildren } from "preact";
import { Link } from "wouter-preact";

interface Props {
  className?: string;
  href: string;
  children: ComponentChildren;
}

export default function InternalLink({ className, href, children }: Props) {
  return (
    <Link
      className={clsx("w-fit text-[#4682B4] text-[15px]", className)}
      href={href}
    >
      {children}
    </Link>
  );
}
