import "./PriceText.css"

type PriceTextProps = {
    price: number;
};

export function PriceText({price}: PriceTextProps){
    return (
        <p className="price-text">
            税込 {price.toLocaleString()}円
        </p>
    );
}