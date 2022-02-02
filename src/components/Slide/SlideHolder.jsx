import { useDispatch, useSelector } from "react-redux";
import { productActions } from "store";
import Item from "./SlideItem";

import styles from "./SlideHolder.module.css";

const SlideHolder = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productInfo.productInfo);
  const selectedSlideItem = useSelector(
    (state) => state.productInfo.selectedSlideItem
  );

  const selectSlideItemHandler = (e) => {
    const slideItemId = Number(e.target.id);

    if (selectedSlideItem !== slideItemId) {
      dispatch(productActions.slide(slideItemId));
      dispatch(productActions.room(slideItemId));
    } else {
      dispatch(productActions.slide(null));
      dispatch(productActions.room(null));
    }
  };

  const ItemArr = productData.map((data, index) => {
    return (
      <Item
        key={data.productId}
        index={index}
        onSelectSlideItem={selectSlideItemHandler}
      />
    );
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.slide}>{ItemArr}</div>
    </div>
  );
};

export default SlideHolder;
