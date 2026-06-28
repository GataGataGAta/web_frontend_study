import "./StockBadge.tsx"

type StockBadgeProps = {
    inStock: boolean;
}

export function StockBadge({ inStock }: StockBadgeProps){
    return (
        <p
        className = {
            inStock
                ? "stock-badge stock-badge--available"
                : "stock-badge stock-badge--soldout"
        }>

            {inStock ? "在庫あり" : "在庫なし"}
        </p>
    )
}