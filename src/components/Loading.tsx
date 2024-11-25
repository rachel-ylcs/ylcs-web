import clsx from "clsx";
import faviconUrl from "/favicon.webp?url";
import Icon from "./Icon";

interface Props {
  className?: string;
}

export default function Loading({ className }: Props) {
  return (
    <>
      <img
        className={clsx("size-18", className)}
        src={faviconUrl}
        aria-label="Loading Image"
      />
      <Icon
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 text-[#4682B4]"
        icon="i-line-md-loading-loop"
      />
    </>
  );
}
