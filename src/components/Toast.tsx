import type { ComponentChildren } from "preact";
import Text from "./Text";
import cuteRachelUrl from "/cute-rachel.webp?url";
import clsx from "clsx";
import { motion } from "motion/react";

interface Props {
  className?: string;
  children: ComponentChildren;
}

export default function Toast({ className, children }: Props) {
  return (
    <motion.div
      className="flex w-fit items-end"
      animate={[{ y: "20%" }, { opacity: 0, transition: { delay: 1.8 } }]}
    >
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
    </motion.div>
  );
}
