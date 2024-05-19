import { formatCurrency } from "../util";
import { useAddItem } from "../hooks";

export default function Product(props:any) {

    const { addItem } = useAddItem();

    return (
        <div
            className="item"
            data-testid={`product-${props.data.id}`}
            key={props.id}
        >
            <img src={props.data.image} alt={props.data.name} className="product-image" />
            <div className="name_price-container">
                <div data-testid={`product-name-${props.data.id}`}>{props.data.name}</div>
                <div data-testid={`product-price-${props.data.id}`}>
                    {formatCurrency(props.data.price)}
                </div>
            </div>
            <div className="button-container">
                <button
                    className="button add-to-cart"
                    data-testid={`add-button-${props.data.id}`}
                    onClick={() => {
                        addItem(props.data);
                    }}
                >
                    Add
                </button>
            </div>
        </div>
    );
}