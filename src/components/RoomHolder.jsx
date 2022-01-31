import RoomMain from "./RoomImage/RoomMain";
import SlideHolder from "./Slide/SlideHolder";

import styles from "./RoomHolder.module.css";

const RoomHolder = () => {
  return (
    <div className={styles.main}>
      <RoomMain />
      <SlideHolder />
    </div>
  );
};

export default RoomHolder;
