import "./CartButton.css"

type CartButton = {
    disabled: boolean
};

export function CartButton({ disabled } : CartButton) {
    return (
        <button className="cart-button" disabled={disabled}>
            カートに入れる
        </button>
    )
}