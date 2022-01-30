import Tooltip from "./Tooltip";
import InfoButton from "layout/InfoButton";

import styles from "./InfoHolder.module.css";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "store";

const InfoHolder = (props) => {
  const dispatch = useDispatch();
  const isHide = useSelector((state) => state.productInfo.isHide);

  const hideIndex = {
    productNumber: props.index,
    isHide: false,
  };

  const openHandler = (e) => {
    dispatch(productActions.hide());
  };
  console.log(isHide);

  return (
    <div
      className={styles.info}
      style={{ top: props.pointX, left: props.pointY }}
    >
      <InfoButton onInfo={isHide} onClick={openHandler} />
      <Tooltip className={isHide && styles.hide} index={props.index} />
    </div>
  );
};

export default InfoHolder;
