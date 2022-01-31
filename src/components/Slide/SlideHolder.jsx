import { useDispatch, useSelector } from "react-redux";
import { productActions } from "store";
import Item from "./Item";
import styles from "./SlideHolder.module.css";

const SlideHolder = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productInfo.productInfo);
  const isHide = useSelector((state) => state.productInfo.isHide);

  const ItemArr = productData.map((data, index) => {
    const selectItemHandler = (e) => {
      if (isHide.productNumber === undefined) {
        dispatch(
          productActions.hide({
            productNumber: index,
            isHide: false,
          })
        );
      } else if (index !== isHide.productNumber) {
        dispatch(
          productActions.hide({
            productNumber: index,
            isHide: false,
          })
        );
      } else {
        console.log(e.target.id);
        dispatch(
          productActions.hide({
            productNumber: index,
            isHide: !isHide.isHide,
          })
        );
      }

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
