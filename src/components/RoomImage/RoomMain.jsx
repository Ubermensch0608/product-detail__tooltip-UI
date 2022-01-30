import InfoButton from "layout/InfoButton";
import { useSelector } from "react-redux";

import styles from "./RoomMain.module.css";
import Tooltip from "./Tooltip";

const RoomMain = () => {
  const productInfo = useSelector((state) => state.productInfo.productInfo);

  console.log(productInfo);
  return (
    <div className={styles.room}>
      <InfoButton onInfo={true} />
      <InfoButton onInfo={false} />
      <Tooltip></Tooltip>
    </div>
  );
};

export default RoomMain;
