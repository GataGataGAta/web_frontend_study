import "./ProductCard.css";
import { PriceText } from "./PriceText";
import { StockBadge } from "./StockBadge";

type ProductCardProps = {
    name: string;
    productCode: string;
    price: number;
    inStock: boolean;
};

export function ProductCard({
    name,
    productCode,
    price,
    inStock,
}:ProductCardProps){
    return(
    <article className="product-card"> 
        <div className="product-card_image">No Image</div>

        <div className="product-card_body">
            <h2 className="product-card_name">{name}</h2>

            <p className="product-card_code"></p>

            <p className="product-card_code">品番:{productCode}</p>

            <PriceText price={price}/>
            
            <StockBadge inStock={inStock}/>
            
            <button className="product-card_button" disabled={!inStock}>
                カートに入れる
            </button>
        </div>
    </article>
    );
}