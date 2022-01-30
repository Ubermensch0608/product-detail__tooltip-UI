import InfoButton from "layout/InfoButton";

import styles from "./RoomMain.module.css";
import Tooltip from "./Tooltip";

const RoomMain = () => {
  return (
    <div className={styles.room}>
      <InfoButton onInfo={true} />
      <InfoButton onInfo={false} />
      <Tooltip>sdf</Tooltip>
    </div>
  );
};

export default RoomMain;
