import { useSelector } from "react-redux";
import Item from "./Item";
import styles from "./SlideHolder.module.css";

const SlideHolder = () => {
  const productData = useSelector((state) => state.productInfo.productInfo);
  console.log(productData);
  const ItemArr = productData.map((data, i) => {
    return (
      <Item
        key={data.productId}
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
