import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Tooltip from "./Tooltip";
import InfoButton from "layout/InfoButton";
import { productActions } from "store";

import styles from "./InfoHolder.module.css";

const InfoHolder = ({ index, pointX, pointY }) => {
  const dispatch = useDispatch();
  const isHide = useSelector((state) => state.productInfo.isHide);
  const selectedSlideItem = useSelector(
    (state) => state.productInfo.selectedItem
  );
  const [btnId, setBtnId] = useState(10);

  const openHandler = (e) => {
    setBtnId(e.target.id);

    if (selectedSlideItem !== index) {
      dispatch(productActions.hide(index));
    } else {
      dispatch(productActions.hide(null));
    }

    slideItemHandler();
  };

  const slideItemHandler = () => {
    if (selectedSlideItem !== index) {
      dispatch(productActions.select(index));
    } else {
      dispatch(productActions.select(null));
    }
  };

  return (
    <div className={styles.info} style={{ top: pointX, left: pointY }}>
      {btnId != isHide && (
        <InfoButton id={index} type="info" onClick={openHandler} />
      )}
      {btnId == isHide && (
        <InfoButton id={index} type="close" onClick={openHandler} />
      )}
      <Tooltip index={index} />
    </div>
  );
};

export default InfoHolder;
