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

  const openHandler = (e) => {
    if (isHide.productNumber === undefined) {
      dispatch(
        productActions.hide({
          productNumber: index,
          isHide: false,
        })
      );
    } else if (e.target.id != isHide.productNumber) {
      dispatch(
        productActions.hide({
          productNumber: index,
          isHide: false,
        })
      );
    } else {
      dispatch(
        productActions.hide({
          productNumber: index,
          isHide: !isHide.isHide,
        })
      );
    }
    if (selectedSlideItem !== index) {
      dispatch(productActions.select(index));
    } else {
      dispatch(productActions.select(null));
    }
  };

  return (
    <div className={styles.info} style={{ top: pointX, left: pointY }}>
      <InfoButton
        id={index}
        onInfo={index === isHide.productNumber && !isHide.isHide}
        onClick={openHandler}
      />
      <Tooltip index={index} />
    </div>
  );
};

export default InfoHolder;
