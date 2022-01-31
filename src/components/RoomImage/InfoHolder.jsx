import Tooltip from "./Tooltip";
import InfoButton from "layout/InfoButton";

import styles from "./InfoHolder.module.css";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "store";
import { useEffect } from "react";

const InfoHolder = (props) => {
  const dispatch = useDispatch();
  const isHide = useSelector((state) => state.productInfo.isHide);

  const openHandler = (e) => {
    dispatch(
      productActions.hide({
        productNumber: props.index,
        isHide: !isHide.isHide,
      })
    );
  };

  console.log(isHide);

  return (
    <div
      className={styles.info}
      style={{ top: props.pointX, left: props.pointY }}
    >
      <InfoButton id={props.index} onInfo={true} onClick={openHandler} />
      <Tooltip index={props.index} />
    </div>
  );
};

export default InfoHolder;
