import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
    className?: string;
    children: ComponentChildren
}

export default function Text({className, children}: Props) {
    return <p className={clsx("text-[15px]", className)}>{children}</p>
}