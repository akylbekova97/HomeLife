import clsx from "clsx";

import s from "./Title.module.scss";

export function Title({ className, children, size }) {
  return <p className={clsx(s.title, s[size], className)}>{children}</p>;
}
