import React, { useEffect, RefObject } from "react";
import "../styles/orders.css";
// import { getStatusOrder } from "../external/order";  // Da aggiungere!

interface SecondComponentProps {
    targetRef: RefObject<HTMLDivElement>; // Tipizza la prop targetRef
}

const Orders: React.FC<SecondComponentProps> = ({ targetRef }) => {

    var order_list = [
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
    ];    

    /*
    useEffect(() => {
        // fetch products from mock API
        (async () => {
            
          const order_list = await getProducts();
          setProducts(order_list);
          
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
                    <input type="submit" value="Show" id="order_button" />
                </form>
            </div>
            
            <div className="product-list scroller">
                <table>
                    <thead>
                        <tr>
                            <th> N° ordine </th>
                            <th>Pizza</th>
                            <th>Quantity</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order_list.length < 1 ? (
                            <tr>
                                <td colSpan={4} className="noItem">
                                    There are no orders.
                                </td>
                            </tr>
                        ) : (
                            order_list.map((order) => {
                                return (
                                    order.map((item, i) => {
                                        return(
                                            <tr className={i == 0 ? "table_rows" : ""}>
                                                {i == 0 ? <td id="id_order" rowSpan={order.length}> 2 </td> : null}
                                                <td> {item.name} </td>
                                                <td> {item.quantity} </td>
                                                <td> {item.state} </td>
                                                {/* TODO: Implementare la logica di attivazione del pulsante sottostante solo quando tutti gli elementi dell'ordine sono in stato di Pronto */}
                                                {i == 0 ? <td rowSpan={order.length}> <button disabled id="order_button"> Delivery </button> </td> : null}
                                            </tr>
                                        )
                                    })
                                )
                            })   
                        )} 
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders;

