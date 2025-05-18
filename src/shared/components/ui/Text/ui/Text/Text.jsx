import clsx from "clsx";

import s from "./Text.module.scss";

export function Text({ className, children, size }) {
  return <p className={clsx(s.text, s[size], className)}>{children}</p>;
}
