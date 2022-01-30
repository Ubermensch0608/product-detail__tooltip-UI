import Tooltip from "./Tooltip";
import InfoButton from "layout/InfoButton";

import styles from "./InfoHolder.module.css";

const InfoHolder = (props) => {
  return (
    <div
      className={styles.info}
      style={{ top: props.pointX, left: props.pointY }}
    >
      <InfoButton onInfo={true} />
      <Tooltip index={props.index} />
    </div>
  );
};

export default InfoHolder;
