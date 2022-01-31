import { useDispatch, useSelector } from "react-redux";

import Tooltip from "./Tooltip";
import InfoButton from "layout/InfoButton";
import { productActions } from "store";

import styles from "./InfoHolder.module.css";

const InfoHolder = (props) => {
  const dispatch = useDispatch();
  const isHide = useSelector((state) => state.productInfo.isHide);

  const openHandler = (e) => {
    if (isHide.productNumber === undefined) {
      dispatch(
        productActions.hide({
          productNumber: props.index,
          isHide: false,
        })
      );
    } else if (e.target.id != isHide.productNumber) {
      dispatch(
        productActions.hide({
          productNumber: props.index,
          isHide: false,
        })
      );
    } else {
      console.log(e.target.id);
      dispatch(
        productActions.hide({
          productNumber: props.index,
          isHide: !isHide.isHide,
        })
      );
    }
  };

  console.log(isHide);

  return (
    <div
      className={styles.info}
      style={{ top: props.pointX, left: props.pointY }}
    >
      <InfoButton
        id={props.index}
        onInfo={props.index === isHide.productNumber && !isHide.isHide}
        onClick={openHandler}
      />
      <Tooltip index={props.index} />
    </div>
  );
};

export default InfoHolder;
