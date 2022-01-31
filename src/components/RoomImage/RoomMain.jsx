import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "store";
import InfoHolder from "./InfoHolder";
import styles from "./RoomMain.module.css";

const RoomMain = (props) => {
  const dispatch = useDispatch();
  const productInfo = useSelector((state) => state.productInfo.productInfo);
  const isHide = useSelector((state) => state.productInfo.isHide);

  const productData = productInfo.map((data, i) => {
    return (
      <InfoHolder
        key={data.productId}
        index={i}
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
