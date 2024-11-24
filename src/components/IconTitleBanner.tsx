import Row from "./Row";
import faviconUrl from "/favicon.webp?url";
import titleUrl from "/title.webp?url";

export default function IconTitleBanner() {
  return (
    <Row className="justify-between items-end">
      <img className="size-32" src={faviconUrl} aria-label="Logo" />
      <img className="size-28 h-auto" src={titleUrl} aria-label="Title" />
    </Row>
  );
}
