import InfoButton from "layout/InfoButton";
import { useSelector } from "react-redux";
import Tooltip from "./Tooltip";

const InfoHolder = () => {
  const productInfo = useSelector((state) => state.productInfo.productInfo);

  const productData = productInfo.map((data) => {
    return (
      <Tooltip
        key={data.productId}
        productId={data.productId}
        imageUrl={data.imageUrl}
        productName={data.productName}
        outside={data.outside.toString()}
        discountRate={data.discountRate}
        priceDiscount={data.priceDiscount}
        priceOriginal={data.priceOriginal}
        pointX={data.pointX}
        pointY={data.pointY}
      />
    );
  });
  return (
    <div>
      <InfoButton onInfo={true} />
      <ul>{productData}</ul>
    </div>
  );
};

export default InfoHolder;
