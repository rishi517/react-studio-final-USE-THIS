// TODO: create a component that displays a single bakery item

function BakeryItem(props) {

    return (<div className="bakery-item">
        <p>Item Name: {props.name} Price: {props.price}</p>
        <img src={props.image} alt={props.name} />
        <p>{props.description}</p>
        <button onClick={() => {
            props.setCart([...props.cart, props.name]);
            props.setTotal(props.total + props.price);
        }}>Add to Cart</button>
    </div>);

}

export default BakeryItem;