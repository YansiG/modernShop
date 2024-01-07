import { Button, createTheme, ThemeProvider } from '@mui/material';
import "./Item.css"

const itemColor = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                outlined: {
                    color: 'white',
                    borderColor: 'gray',
                    '&:active': {
                        color: 'white',
                        borderColor: 'black',
                    },
                    '&:hover': {
                        color: 'white',
                        borderColor: 'black',
                    }
                },
            },
        },
    },
});

interface ItemProps {
    data: {
        thumbnail: string;
        title: string;
        description: string;
        price: number;
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
            <ThemeProvider theme={itemColor}>
                <Button variant="outlined" onClick={addToCart}>
                    В корзину
                </Button>
            </ThemeProvider>
        </div>
    );
}

export default Item;
