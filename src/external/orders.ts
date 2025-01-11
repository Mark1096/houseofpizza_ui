import axios from "axios";
import {IOrderStatusResponse} from "../external/interfaces";

// TODO : Evaluate if remove it (see orders.tsx)
export const getStatusOrder = async (orderId : number) => {
    try {
        return await axios.get<IOrderStatusResponse>("http://localhost:4001/houseofpizza/pizza/order/status/{"+orderId+"}");
      } catch (err) {
        if (err instanceof Error)
          throw new Error("Error in fetching order status: " + err.message);
        return [];
    }
}