import type { ComponentChildren } from "preact";

interface Props {
  onClick(): void;
  children: ComponentChildren;
}

export default function PrimaryButton({ onClick, children }: Props) {
  return (
    <button type="button" className="bg-[#4682B4] text-white rounded h-8" onClick={onClick}>
      {children}
    </button>
  );
}
