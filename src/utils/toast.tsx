import { default as ToastComponent } from "../components/Toast";
import { signal } from "@preact/signals";

interface ToastInfo {
  text: string;
  className: string;
}

const currentToast = signal<ToastInfo | null>(null);
let setTimeoutId: number | null = null;

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class Toast {
  private static toast(toastInfo: ToastInfo) {
    currentToast.value = toastInfo;

    if (setTimeoutId) {
      clearTimeout(setTimeoutId);
    }
    setTimeoutId = setTimeout(() => {
      currentToast.value = null;
    }, 3000);
  }

  static success(text: string) {
    Toast.toast({ text, className: "bg-green-600" });
  }

  static warn(text: string) {
    Toast.toast({ text, className: "bg-orange-700" });
  }

  static error(text: string) {
    Toast.toast({ text, className: "bg-red-600" });
  }
}

export function Toaster() {
  return (
    <div className="fixed left-[50%] top-[80%] -translate-[60%] pointer-events-none">
      {currentToast.value && (
        <ToastComponent className={currentToast.value.className}>
          {currentToast.value.text}
        </ToastComponent>
      )}
    </div>
  );
}
