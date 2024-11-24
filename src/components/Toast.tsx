import type { ComponentChildren } from "preact";
import Row from "./Row";
import Text from "./Text";
import cuteRachelUrl from "/cute-rachel.webp?url";
import clsx from "clsx";

interface Props {
  className?: string;
  children: ComponentChildren;
}

export default function Toast({ className, children }: Props) {
  return (
    <Row className="w-fit items-end">
      <img
        className="w-12 h-auto translate-x-[50%]"
        src={cuteRachelUrl}
        aria-label="toast-cute-rachel"
      />
      <div
        className={clsx(
          "rounded-lg shadow pl-8 pr-4 py-3 h-fit min-h-20",
          className,
        )}
      >
        <Text className="text-white">{children}</Text>
      </div>
    </Row>
  );
}
