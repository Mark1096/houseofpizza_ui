import React, { useState } from "react";
import "../styles/orders.css";
import { IOrderStatusResponse, SecondComponentProps } from "../external/interfaces";
import axiosInstance from "../external/axiosInstance";

const Orders: React.FC<SecondComponentProps> = ({ targetRef }) => {
  const [orders, setOrders] = useState<IOrderStatusResponse>({
    content: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [order_id, setOrderId] = useState<string | null>(null);
  const allCompleted = orders.content.every((item) => item.status === "COMPLETED");

  const loadCart = async (orderId: string) => {
    setLoading(true);
    try {
      const res = await axiosInstance.get<IOrderStatusResponse>(`/houseofpizza/order/${orderId}/status`);
      setOrders(res.data || { content: [] });
      setOrderId(orderId || null);
    } catch (err) {
      setError("Failed to load cart data. Please try again.");
      alert(`The order number ${orderId} does not exists.`);
      window.location.reload();
    } finally {
      setLoading(false);
    }
  };
  
  const deleteOrder = async () => {
    try {
      await axiosInstance.delete<IOrderStatusResponse>(
        `/houseofpizza/order/${order_id}`); 
      alert(`The order number ${order_id} has been successfully retired.`);
    }
    catch (err) {
      setError("Failed to delete order.");
    }
    window.location.reload();
  }

  return (
    <div className="order" data-testid="order" ref={targetRef}>
      <div className="header">Orders</div>
      <div className="order_container">
        <form 
          action="" 
          method="GET"
          onSubmit={(e) => {
            e.preventDefault();
            const orderNumber = (
              document.getElementById("order_number") as HTMLInputElement
            ).value;
        
            if (!orderNumber || isNaN(Number(orderNumber))) {
              setError("Please enter a valid order number.");
              return;
            }
            
            loadCart(orderNumber);
          }}
        >
          <label>Enter your order number:</label>
          <div className={"form_container"}>
            <input
              type="number"
              id="order_number"
              min="1"
              required
            />
            <button
              className="action getStatus"
              aria-label="Get order"
              id = "order_button"
              type="submit"
            > 
              Show 
            </button>
          </div>
        </form>
      </div>

      { orders.content.length > 0 && (
        <div className="table-container scroller">
          <table>
            <thead>
              <tr>
                <th>Pizza</th>
                <th>Status</th>
                <th className="order-price">Price</th>
              </tr>
            </thead>
            <tbody>
              { orders?.content.map((order, index) => {
                  return (
                    <tr className={index === 0 ? "table_rows" : ""}>
                      <td> {order.product.name} </td>
                      <td> {order.status} </td>
                      <td className="order-price"> {order.product.price + " €"} </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
          
          <button 
            disabled = {!allCompleted}
            aria-label="Withdraw order" 
            onClick={() => { deleteOrder() }}
          > 
            Get order
          </button>

        </div>
        )}
    </div>
  );
};

export default Orders;
