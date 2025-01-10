import axios from "axios";

export const getStatusOrder = async () => {
    try {
        const res = await axios.get("http://localhost:4001/houseofpizza/pizza/order/status/{order}");    // Sostituire {order} con il numero dell'ordine del quale si richiede lo stato
        // TODO: manage res.data!
      } catch (err) {
        if (err instanceof Error)
          throw new Error("Error in fetching order status: " + err.message);
        return [];
    }
}