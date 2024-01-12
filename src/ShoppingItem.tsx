import React from 'react';
import { Item } from './useShoppingList';

interface ShoppingItemProps {
    item: Item;
    onRemove: () => void;
}

const ShoppingItem: React.FC<ShoppingItemProps> = ({ item, onRemove }) => {

    return (
        <div className='shopping-item'>
            <span className="info" style={{ textDecoration: item.bought ? 'line-through' : 'none' }}>
                <span>
                    {item.name}
                </span>
                {item.price && <span>${item.price}</span>}
            </span>

            <button onClick={onRemove}>
                {item.bought ? 'Remove' : 'Mark as Bought'}
            </button>
        </div>
    );
};

export default ShoppingItem;
