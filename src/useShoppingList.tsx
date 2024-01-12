import { useState } from 'react';

export interface Item {
    name: string;
    price?: number;
    bought?: boolean;
}

export const useShoppingList = () => {
    const [items, setItems] = useState<Item[]>([
        {
            name: "oats",
            price: 2.32,
            bought: false
        },
        {
            name: "bananas",
            price: 1.50,
            bought: true
        },
        {
            name: "yoghurt",
            price: 5,
            bought: false
        },
        
        
    ]);

    const addItem = (item: Item) => {
        setItems([...items, { ...item, bought: false }]);
    };

    const removeItem = (index: number) => {
        const removedItem = items[index];
        if (removedItem.bought) {
            setItems(items.filter((_, i) => i !== index));
        } else {
            // Toggle the bought property
            setItems(items.map((i, idx) => idx === index ? { ...i, bought: true } : i));
        }
    };

    const calculateTotalPrice = () => {
        return items.reduce((total, item) => item.bought ? total : total + (item.price || 0), 0);
    };
       
    return { items, addItem, removeItem, calculateTotalPrice };
};
