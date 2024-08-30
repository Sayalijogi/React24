import {useState} from "react";
import Logo from './Logo';
import Form from './Form';

export default function App(){

  const [items,setItems] = useState([])

  //handler to add items
  function handleAddItems(item){
    setItems((items)=>[...items,item])
  }

  //handler to delete item
  function handleDeleteItem(id){
    setItems((items)=>items.filter((item)=>item.id != id))
  }

  //to check which item is packed and unpacked / to check and uncheck the item
  function handleToggleItem(id){
    setItems((items)=>
    items.map((item)=>
    item.id === id ? {...item,packed:!item.packed}:item
  ));
  }

  //handler to delete all the items
  function handleClearList(){
    const confirmed = window.confirm("Are you want to delete the alert ?")
    if(confirmed){
      setItems([]);
    }
  }

  return(
    <div className="app">
      <Logo></Logo>
      <Form onAddItems ={handleAddItems}></Form>
      <PackingList
      items = {items}
      onDeleteItem = {handleDeleteItem}
      onToggleItem = {handleToggleItem}
      onClearList = {handleClearList}>
      </PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}

