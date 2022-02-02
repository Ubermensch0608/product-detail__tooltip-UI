import { useDispatch, useSelector } from "react-redux";

import { productActions } from "store";
import InfoButton from "layout/InfoButton";

import styles from "./InfoHolder.module.css";
import Tooltip from "./Tooltip";

const InfoHolder = ({ index }) => {
  const dispatch = useDispatch();
  const productInfo = useSelector((state) => state.productInfo.productInfo);
  const selectedRoomItem = useSelector(
    (state) => state.productInfo.selectedRoomItem
  );

  const ItemOpenHandler = (e) => {
    const selectedId = Number(e.target.id);

    if (selectedId !== selectedRoomItem) {
      dispatch(productActions.room(index));
      dispatch(productActions.slide(index));
    } else {
      dispatch(productActions.room(null));
      dispatch(productActions.slide(null));
    }
  };

  return (
    <div
      className={styles.info}
      style={{
        top: productInfo[index].pointX * 1.5951219512,
        left: productInfo[index].pointY * 1.6288513891,
      }}
    >
      {selectedRoomItem !== index && (
        <InfoButton id={index} type="info" onClick={ItemOpenHandler} />
      )}
      {selectedRoomItem === index && (
        <InfoButton id={index} type="close" onClick={ItemOpenHandler} />
      )}
      <Tooltip index={index} />
    </div>
  );
};

export default InfoHolder;
