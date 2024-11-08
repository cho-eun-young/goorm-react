import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div>
      <h1>카트가 비어 있습니다.</h1>
      <p>상품을 넣어주세요</p>
      <Link to={"/"}>계속 쇼핑하기</Link>
    </div>
  );
};

export default CartEmpty;
