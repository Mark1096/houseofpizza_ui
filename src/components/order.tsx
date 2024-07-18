import React, { RefObject } from "react";
import "../styles/order.css";
import { getStatusOrder } from "../external/order";

interface SecondComponentProps {
    targetRef: RefObject<HTMLDivElement>;
}

const Order: React.FC<SecondComponentProps> = ({ targetRef }) => {
    return (
        <div className="order" data-testid="order" ref={targetRef}>
            <div className="header">Orders</div>
            <div className="form_container">
                <form action="" method="GET">
                    <label>Enter your order number:</label><br/>
                    <input type="number" name="order_number" id="order_number" min="1" required />
                    <input type="submit" value="Show" id="order_button" />
                </form>
            </div>
        </div>
    )
}

export default Order;
