import type { ComponentChildren } from "preact";
import Row from "./Row";
import faviconUrl from "/favicon.webp?url";

interface Props {
  children: ComponentChildren;
}

export default function Notice({ children }: Props) {
  return (
    <Row className="p-2 rounded-lg shadow bg-zinc-50 items-center gap-2">
      <img className="size-6" src={faviconUrl} aria-label="notice-icon" />
      {children}
    </Row>
  );
}
