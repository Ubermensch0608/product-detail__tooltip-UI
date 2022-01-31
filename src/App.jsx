import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";

import RoomMain from "components/RoomImage/RoomMain";
import SlideHolder from "components/Slide/SlideHolder";
import { productActions } from "store";

// global css 적용 - 삭제 x
import globalStyle from "utils/global-style.css";
import RoomHolder from "components/RoomHolder";

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
  }, []);

  return <RoomHolder />;
};

export default App;
