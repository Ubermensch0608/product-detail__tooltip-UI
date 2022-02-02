import { useSelector } from "react-redux";

export const ReUseableFn = (props) => {
  const productInfo = useSelector((state) => state.productInfo.productInfo);

  productInfo.map((item) => {
    return <div>{props.children}</div>;
  });
};
