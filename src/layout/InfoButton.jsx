import styles from "./InfoButton.module.css";
import info_button from "assets/info_button.png";
import close_button from "assets/x_button.png";

const InfoButton = (props) => {
  return (
    <div className={styles.button} onClick={props.onClick}>
      {props.onInfo && <img id={props.id} src={info_button} alt="info" />}
      {!props.onInfo && <img id={props.id} src={close_button} alt="close" />}
    </div>
  );
};

export default InfoButton;
