import "./ItemCard.css"

const ItemCard = ({ children }) => {
    return (
        <div className="itemCard">
            {children}
        </div>
    )
}

export default ItemCard