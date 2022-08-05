import styles from "./Header.module.css";

interface Props {
  top?: string | undefined;
  bottom?: string | undefined;
  isMain?: boolean;
}

function Header({ top = undefined, bottom = undefined, isMain = false }: Props): JSX.Element {
  return (
    <header className={`${styles.Header} ${isMain && styles.Header__Main}`}>
      {isMain ? (
        <h1>
          {top && <span>{top}</span>}
          {bottom && bottom}
        </h1>
      ) : (
        <h2>
          {top && <span>{top}</span>}
          {bottom && bottom}
        </h2>
      )}
    </header>
  );
}

export default Header;
