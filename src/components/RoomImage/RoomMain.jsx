import InfoButton from "layout/InfoButton";

import styles from "./RoomMain.module.css";

const RoomMain = () => {
  return (
    <div className={styles.room}>
      <InfoButton onInfo={true} />
      <InfoButton onInfo={false} />
    </div>
  );
};

export default RoomMain;
