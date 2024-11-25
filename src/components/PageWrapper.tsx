import clsx from "clsx";
import type { ComponentChildren } from "preact";
import { useLocation } from "wouter-preact";
import Navbar from "./Navbar";

const showNavbarPages = ["/world", "/message", "/discovery", "/rachel-fan"];

interface Props {
  className?: string;
  children: ComponentChildren;
}

export default function PageWrapper({ className, children }: Props) {
  const [location] = useLocation();

  return (
    <>
      <div className={clsx("max-w-3xl mx-auto", className)}>{children}</div>

      {showNavbarPages.includes(location) && <Navbar />}
    </>
  );
}
