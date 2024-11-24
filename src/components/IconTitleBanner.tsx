import faviconUrl from "/favicon.webp?url";
import titleUrl from "/title.webp?url";

export default function IconTitleBanner() {
  return (
    <div className="flex gap-2 justify-between items-center">
      <img className="size-32" src={faviconUrl} aria-label="Logo" />
      <img className="size-28 h-auto" src={titleUrl} aria-label="Title" />
    </div>
  );
}
