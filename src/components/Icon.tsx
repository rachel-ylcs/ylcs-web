import clsx from "clsx";

interface Props {
  className: string;
  icon: string;
}

export default function Icon({ className, icon }: Props) {
  return <span className={clsx(className, icon)} />;
}
