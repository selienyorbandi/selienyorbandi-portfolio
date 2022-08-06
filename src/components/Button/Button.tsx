import { FormattedMessage } from "react-intl";
import styles from "./Button.module.css";

interface BtnProps {
  textId: string;
  defaultText: string;
  topColor?: string;
  bottomColor?: string;
  onClickFn?: () => void | undefined;
  btnType?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

function Button({
  textId,
  defaultText,
  topColor = "#002D3E",
  bottomColor = "#005364",
  onClickFn,
  btnType = "button",
  disabled = false,
}: BtnProps): JSX.Element {
  return (
    <button
      type={btnType}
      onClick={onClickFn ? onClickFn : undefined}
      className={styles.Button}
      style={{
        backgroundColor: `${bottomColor}`,
        boxShadow: `inset 0px 34px 0px -15px ${topColor}`,
        border: `1px solid ${topColor}`,
      }}
      disabled={disabled}>
      {<FormattedMessage id={textId} defaultMessage={defaultText} />}
    </button>
  );
}

export default Button;
