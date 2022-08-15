import { Image } from "../../models/Image.model";

import styles from "./IconsList.module.css";

function IconsList({ icons }: { icons: Image[] }): JSX.Element {
  return (
    <ul className={styles.IconsList}>
      {icons.map(icon => {
        return (
          <li key={icon.id}>
            <img src={icon.imgSrc} alt={icon.alt} width="50px" height="50px" />
            <p>{icon.title}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default IconsList;
