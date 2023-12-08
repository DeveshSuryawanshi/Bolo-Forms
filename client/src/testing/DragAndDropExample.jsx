import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  ITEM: 'item',
};

const DragAndDropExample = () => {
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
        style={{
          border: '1px solid black',
          padding: '10px',
          margin: '10px',
          backgroundColor: isOver ? 'lightgreen' : 'white',
        }}
      >
        <h3>{category.name}</h3>
        {category.items.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
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
        style={{ border: '1px solid black', padding: '10px', margin: '10px', cursor: 'move' }}
      >
        {item.name}
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h2>Scores: {score}</h2>
        <div style={{ display: 'flex' }}>
          {categories.map((category) => (
            <CategoryContainer key={category.id} category={category} />
          ))}
        </div>
        <div style={{ display: 'flex' }}>
          {items.map((item) => (
            <DraggableItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default DragAndDropExample;
