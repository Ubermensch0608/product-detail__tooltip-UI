import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { productActions } from "store/index";
import RoomHolder from "components/RoomImage/RoomHolder";
import SlideHolder from "components/Slide/SlideHolder";

import styles from "./Add.module.css";
// global css 적용 - 삭제 x

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProductInfo() {
      const response = await fetch(
        "https://cdn.ggumim.co.kr/test/image_product_link.json"
      );
      const productInfo = await response.json();

      dispatch(productActions.fetchInfo(productInfo.productList));
    }

    fetchProductInfo();
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <RoomHolder />
      <SlideHolder />
    </div>
  );
};

export default App;
