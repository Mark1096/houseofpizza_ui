import React, { useEffect, RefObject, useState } from "react";
import "../styles/orders.css";
import {IOrderStatusResponse} from "../external/interfaces"
import axios from "axios";

interface SecondComponentProps {
    targetRef: RefObject<HTMLDivElement>;
}

const Orders: React.FC<SecondComponentProps> = ({ targetRef }) => {
    const [orders, setOrders] = useState<IOrderStatusResponse>({
        content: [],
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadCart = async (orderId: string) => {
        setLoading(true);
        try {
            const res = await axios.get<IOrderStatusResponse>("http://localhost:4001/houseofpizza/pizza/order/status/{"+orderId+"}");
            setOrders(res.data || { content: [] });
        } catch (err) {
            setError("Failed to load cart data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    /*var orders = [
        [
            {
                name: "Margherita",
                quantity: 4,
                state: "In lavorazione"
            },
            {
                name: "Diavola",
                quantity: 2,
                state: "In coda"
            },
            {
                name: "Capricciosa",
                quantity: 1,
                state: "Pronta"
            },
            {
                name: "Vegetariana",
                quantity: 3,
                state: "In lavorazione"
            },
            {
                name: "Salsiccia & Friarielli",
                quantity: 1,
                state: "Pronta"
            }
        ],
        [
            {
                name: "Vegetariana",
                quantity: 3,
                state: "In lavorazione"
            },
            {
                name: "Salsiccia & Friarielli",
                quantity: 1,
                state: "Pronta"
            },{
                name: "Vegetariana",
                quantity: 3,
                state: "In lavorazione"
            },
            {
                name: "Salsiccia & Friarielli",
                quantity: 1,
                state: "Pronta"
            }
        ]
    ];*/

    /*
    useEffect(() => {
        // fetch products from mock API
        (async () => {
            
          const orders = await getProducts();
          setProducts(orders);
          
        })();
      }, []);
      */

    return (
        <div className="order" data-testid="order" ref={targetRef}>
            <div className="header">Orders</div>
            <div className="form_container">
                <form action="" method="GET">
                    <label>Enter your order number:</label><br/>
                    <input type="number" name="order_number" id="order_number" min="1" required />
                    <button
                      className="action getStatus"
                      aria-label="Get order"
                      onClick={() => {
                        const orderNumber = (document.getElementById("order_number") as HTMLInputElement).value;
                        if (!orderNumber || isNaN(Number(orderNumber))) {
                            setError("Please enter a valid order number.");
                            return;
                        }
                        return loadCart(orderNumber)
                    }}
                    />

                </form>
            </div>
            
            <div className="product-list scroller">
                <table>
                    <thead>
                        <tr>
                            <th> N° order </th>
                            <th>Pizza</th>
                            <th>Quantity</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.content.length < 1 ? (
                            <tr>
                                <td colSpan={4} className="noItem">
                                    There are no orders.
                                </td>
                            </tr>
                        ) : (
                            orders?.content.map((order, index) => {
                                return (
                                    <tr className={index == 0 ? "table_rows" : ""}>
                                        {/*index == 0 ? <td id="id_order" rowSpan={order.length}> 2 </td> : null*/}
                                        <td> {order.product.name} </td>
                                        <td> {order.status} </td>
                                        {/* TODO: Implementare la logica di attivazione del pulsante sottostante solo quando tutti gli elementi dell'ordine sono in stato di Pronto */}
                                        {/*index == 0 ? <td rowSpan={order.length}> <button disabled id="order_button"> Delivery </button> </td> : null*/}
                                    </tr>
                                )
                            }
                        ))} 
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders;

