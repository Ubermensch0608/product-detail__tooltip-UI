import { useDispatch, useSelector } from "react-redux";
import { productActions } from "store";
import Item from "./Item";
import styles from "./SlideHolder.module.css";

const SlideHolder = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productInfo.productInfo);

  const ItemArr = productData.map((data, index) => {
    const selectItemHandler = () => {
      dispatch(productActions.select(index));
    };

    return (
      <Item
        key={data.productId}
        imageUrl={data.imageUrl}
        discountRate={data.discountRate}
        onClick={selectItemHandler}
        index={index}
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
