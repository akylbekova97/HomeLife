import s from "./Loader.module.scss";

export function Loader({ size = 50 }) {
  return <div className={s.loader} style={{ width: size, height: size }}></div>;
}
