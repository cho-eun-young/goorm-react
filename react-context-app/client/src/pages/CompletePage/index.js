import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { OrderContext } from "../../context/OrderContext";

const CompletePage = ({ setStep }) => {
  const [orderData] = useContext(OrderContext);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    completeOrder(orderData);
  }, [orderData]);

  const completeOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/order",
        orderData
      );
      console.log(response);
      setOrderHistory(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const orderTable = orderHistory.map((item) => (
    <tr key={item.orderNumber}>
      <td>{item.orderNumber}</td>
      <td>{item.orderNumber}</td>
    </tr>
  ));

  const handleClick = () => {
    setStep(0);
  };

  return (
    <div>
      <h2>주문이 성공했습니다.</h2>
      <h3>지금까지 모든 주문</h3>
      <table>
        <tbody>
          <tr>
            <th>number</th>
            <th>price</th>
          </tr>
          {orderTable}
        </tbody>
      </table>
      <br />
      <button onClick={handleClick}>첫 페이지로</button>
    </div>
  );
};

export default CompletePage;
