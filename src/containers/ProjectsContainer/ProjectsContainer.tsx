import { FormattedMessage, useIntl } from "react-intl";
import Header from "../../components/Header/Header";
import styles from "./ProjectsContainer.module.css";

function ProjectsContainer() {
  const intl = useIntl();

  return (
    <section className={styles.Projects}>
      <Header bottom={intl.formatMessage({ id: "projects.title" })} />
      <p className={styles.Projects__Instructions}>
        <FormattedMessage id={"projects.instructions"} defaultMessage="Click on each project for more details"/>
      </p>
    </section>
  );
}

export default ProjectsContainer;
