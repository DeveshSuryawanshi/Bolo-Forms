import React, { useEffect, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  ITEM: 'item',
};

const PreCategorize = ({Categories, questions}) => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Category 1', items: [] },
    { id: 2, name: 'Category 2', items: [] },
    { id: 3, name: 'Category 3', items: [] },
  ]);

  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', category: "Category 1" },
    { id: 2, name: 'Item 2', category: "Category 2" },
    { id: 3, name: 'Item 3', category: 'Category 3' },
  ]);

  useEffect(()=>{
    const newCate = Categories.map((el,i)=>{
        return {
            id: i+1,
            name: el,
            items: []
        }
    })

    const newItmes = questions.map((el,i)=>{
        return {
            id: i+1,
            name: el.item,
            category: el.belongesto
        }
    })

    setCategories(newCate);
    setItems(newItmes);
  },[Categories,questions])

  const [score, setScore] = useState(0);

  const handleDrop = (item, category) => {
    const updatedCategories = categories.map((cat) => {
      if (cat.name === category) {
        const updatedItems = [...cat.items, item];
        if (item.category === category) {
          setScore((prevScore) => prevScore + 1);
        }
        return {
          ...cat,
          items: updatedItems,
        };
      }
      return cat;
    });

    const updatedItems = items.filter((i) => i.id !== item.id);

    setCategories(updatedCategories);
    setItems(updatedItems);
  };

  const CategoryContainer = ({ category }) => {
    const [{ isOver }, drop] = useDrop({
      accept: ItemTypes.ITEM,
      drop: (item) => handleDrop(item, category.name),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    });

    return (
      <div
        ref={drop}
        className='m-2'
        // style={{
        //   margin: '10px',
        // //   backgroundColor: isOver ? 'lightgreen' : 'white',
        // }}
      >
        <h3 className='bg-amber-100 rounded-md mb-3 py-1 text-lg font-medium'>{category.name}</h3>
        <div className='w-32 h-48 border-2 bg-red-200 rounded-md'>
        {category.items.map((item) => (
          <div className='border-2 rounded-md bg-slate-50 p-2 m-3' key={item.id}>{item.name}</div>
        ))}
        </div>
      </div>
    );
  };

  const DraggableItem = ({ item }) => {
    const [, drag] = useDrag({
      type: ItemTypes.ITEM,
      item,
    });

    return (
      <div
        ref={drag}
        style={{ cursor: 'move' }}
        className='border-2 rounded-md bg-slate-50 p-2 m-3'
      >
        {item.name}
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='flex flex-col items-center p-5'>
        {/* <h2>Scores: {score}</h2>     */}

        <div className='flex'>
          {items.map((item) => (
            <DraggableItem key={item.id} item={item} />
          ))}
        </div>
        <div className='flex' >
          {categories.map((category) => (
            <CategoryContainer key={category.id} category={category} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default PreCategorize;
