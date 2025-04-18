import type { ComponentChildren } from "preact";

interface Props {
  onClick(): void;
  children: ComponentChildren;
}

export default function SecondaryButton({ onClick, children }: Props) {
  return (
    <button
      type="button"
      className="bg-[#FFA07A] text-white rounded px-2 py-1"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
