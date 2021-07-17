import { useParams } from 'react-router-dom';

function Item() { 
    const { itemId } = useParams();

    return(
        <div>
            <h2>Item, ID: {itemId}</h2>
        </div>
    );

}

export default Item;
