import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  WORD: 'word',
};

const FillInTheBlank = () => {
  const [paragraph, setParagraph] = useState([
    'The quick ',
    { type: 'blank', id: 1 },
    ' fox jumps ',
    { type: 'blank', id: 2 },
    ' the lazy ',
    { type: 'blank', id: 3 },
    '.',
  ]);

  const [wordList, setWordList] = useState(['brown', 'over', 'dog']);
  const [score, setScore] = useState(0);

  const handleDrop = (word, index) => {
    const updatedParagraph = paragraph.map((part) => {
      if (part.type === 'blank' && part.id === index) {
        return word;
      } else {
        return part;
      }
    });

    setParagraph(updatedParagraph);
    setScore((prevScore) => prevScore + 1);

    // Remove the dropped word from the list
    const updatedWordList = wordList.filter((w) => w !== word);
    setWordList(updatedWordList);
  };

  const Word = ({ word, index }) => {
    const [, drag] = useDrag({
      type: ItemTypes.WORD,
      item: { word, index },
    });

    return (
      <div
        ref={drag}
        style={{ border: '1px solid black', padding: '10px', margin: '10px', cursor: 'move' }}
      >
        {word}
      </div>
    );
  };

  const BlankSpace = ({ index }) => {
    const [, drop] = useDrop({
      accept: ItemTypes.WORD,
      drop: (item) => handleDrop(item.word, index),
    });

    return (
      <div ref={drop} style={{ display: 'inline-block', border: '1px solid black' }}>
        _______
      </div>
    );
  };

  const renderParagraph = () => {
    return paragraph.map((part, index) => {
      if (part.type === 'blank') {
        return <BlankSpace key={index} index={part.id} />;
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h2>Scores: {score}</h2>
        <div>{renderParagraph()}</div>
        <div style={{ display: 'flex' }}>
          {wordList.map((word, index) => (
            <Word key={index} word={word} index={index} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default FillInTheBlank;
