import type { Signal } from "@preact/signals";
import Column from "./Column";

interface Props {
  id: string;
  type: "text" | "value" | "password";
  label: string;
  value: Signal;
}

export default function Input({ id, type, label, value }: Props) {
  return (
    <Column className="gap-1">
      <p id={`${id}-label`} className="text-sm">
        {label}
      </p>
      <input
        id={`${id}-input`}
        type={type}
        className="border-1.5 rounded h-8 outline-none px-2 focus:border-green-700"
        aria-labelledby={`${id}-label`}
        value={value.value}
      />
    </Column>
  );
}
