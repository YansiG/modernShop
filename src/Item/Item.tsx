import "./Item.css"

interface ItemProps {
    data: {
        thumbnail: string;
        title: string;
        description: string;
        price: number;
        // Add other properties as needed
    };
}

function Item(props: ItemProps) {

    function addToCart() {
        alert("Кнопка добавления");
    }

    return (
        <div className="item">
            <img src={props.data.thumbnail} alt="item photo" className='imgg' />
            <p>Название - {props.data.title}</p>
            <p>Описание - {props.data.description}</p>
            <p>Цена - {props.data.price}$</p>
            <a href="#" className="button" onClick={addToCart}>В корзину</a>
        </div>
    );
}

export default Item;
