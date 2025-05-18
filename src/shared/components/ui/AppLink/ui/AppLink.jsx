import clsx from "clsx";
import { Link } from "react-router-dom";

import s from "./AppLink.module.scss";

export function AppLink({ className, children, size, type, color, link }) {
  return (
    <Link
      to={link}
      className={clsx(s.link, s[size], s[type], s[color], className)}
    >
      {children}
    </Link>
  );
}
