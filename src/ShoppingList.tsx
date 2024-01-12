import React, { useState } from 'react';
import ShoppingItem from './ShoppingItem';
import { useShoppingList } from './useShoppingList';

export const ShoppingList: React.FC = () => {
 const { items, addItem, removeItem, calculateTotalPrice } = useShoppingList();
 const [newItemName, setNewItemName] = useState('');
 const [newItemPrice, setNewItemPrice] = useState<number | undefined>();

 const handleSubmit = (event: React.FormEvent) => {
   event.preventDefault();
   addItem({ name: newItemName, price: newItemPrice });
   setNewItemName('');
   setNewItemPrice(undefined);
 };

 return (
   <div className='shopping-list'>
     <form className='shopping-list-input' onSubmit={handleSubmit}>
       <input
         type="text"
         value={newItemName}
         onChange={e => setNewItemName(e.target.value)}
         placeholder="Item name..."
         required
       />
       <input
         type="number"
         step=".01"
         value={newItemPrice || ''}
         onChange={e => setNewItemPrice(Number(e.target.value))}
         placeholder="Price..."
       />
       <button type="submit">Add Item</button>
     </form>
     {items.map((item, index) => (
       <ShoppingItem
         key={index}
         item={item}
         onRemove={() => removeItem(index)}
       />
     ))}
     <p>Total Price: ${calculateTotalPrice()}</p>
   </div>
 );
};

export default ShoppingList;
