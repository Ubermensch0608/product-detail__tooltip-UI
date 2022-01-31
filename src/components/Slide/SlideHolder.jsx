import { useDispatch, useSelector } from "react-redux";
import { productActions } from "store";
import Item from "./Item";
import styles from "./SlideHolder.module.css";

const SlideHolder = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productInfo.productInfo);
  const isHide = useSelector((state) => state.productInfo.isHide);

  const ItemArr = productData.map((data, index) => {
    const selectItemHandler = () => {
      if (isHide !== index) {
        dispatch(productActions.hide(index));
      } else {
        dispatch(productActions.hide(null));
      }

      if (isHide !== index) {
        dispatch(productActions.select(index));
      } else {
        dispatch(productActions.select(null));
      }
    };

    return (
      <Item
        key={data.productId}
        index={index}
        onClick={selectItemHandler}
        imageUrl={data.imageUrl}
        discountRate={data.discountRate}
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
