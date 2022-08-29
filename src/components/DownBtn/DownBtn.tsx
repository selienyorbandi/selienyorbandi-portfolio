import styles from "./DownBtn.module.css";

function DownBtn({link} : {link : string}) : JSX.Element {
  return (
    <a href={link} className={styles.DownBtn}>
      <span></span>
    </a>
  );
}

export default DownBtn;
