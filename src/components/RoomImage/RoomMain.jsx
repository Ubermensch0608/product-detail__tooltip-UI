import { useEffect } from "react";
import { useSelector } from "react-redux";
import InfoHolder from "./InfoHolder";

import styles from "./RoomMain.module.css";

const RoomMain = () => {
  const productInfo = useSelector((state) => state.productInfo.productInfo);

  const productData = productInfo.map((data, index) => {
    return (
      <InfoHolder
        key={data.productId}
        index={index}
        pointX={data.pointX}
        pointY={data.pointY}
      />
    );
  });

  return (
    <div className={styles.room}>
      <img
        src="//cdn.ggumim.co.kr/cache/star/1000/2022011017094316oRcWeb8R.jpeg"
        alt="내 방 이미지"
      />
      {productData}
    </div>
  );
};

export default RoomMain;
