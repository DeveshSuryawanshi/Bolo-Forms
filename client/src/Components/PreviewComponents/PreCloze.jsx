import React, { useEffect, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  WORD: 'word',
};

const PreCloze = ({breakpoints, description}) => {
  const [paragraph, setParagraph] = useState([
    'The quick ',
    { type: 'blank', id: 1, answer: 'brown' },
    ' fox jumps ',
    { type: 'blank', id: 2, answer: 'over' },
    ' the lazy ',
    { type: 'blank', id: 3, answer: 'dog' },
    '.',
  ]);

  const [wordList, setWordList] = useState(['brown', 'over', 'dog']);
  const [score, setScore] = useState(0);

  useEffect(()=>{
    let newPara = description.split(" ");
    let temp = 0;
    let newData = newPara.map((el, i) =>{
        if(breakpoints.includes(el)){
            temp++
            return {
                type: 'blank',
                id: temp,
                answer: el
            }
        }else{
            return el;
        }
    })

    setParagraph(newData);
  },[])

  const handleDrop = (word, index) => {
    const updatedParagraph = paragraph.map((part) => {
      if (part.type === 'blank' && part.id === index) {
        if (part.answer === word) {
          setScore((prevScore) => prevScore + 1);
        }
        return word;
      } else {
        return part;
      }
    });

    setParagraph(updatedParagraph);

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
        className='border-2 rounded-md bg-purple-400 p-2 m-3'
        style={{ border: '1px solid black', padding: '10px', margin: '10px', cursor: 'move' }}
      >
        {word}
      </div>
    );
  };

  const BlankSpace = ({ index, answer }) => {
    const [, drop] = useDrop({
      accept: ItemTypes.WORD,
      drop: (item) => handleDrop(item.word, index),
    });

    return (
      <div ref={drop} className='border-2 rounded-md bg-slate-50 p-2 m-3' style={{ display: 'inline-block', border: '1px solid black' }}>
        ______
      </div>
    );
  };

  const renderParagraph = () => {
    return paragraph.map((part, index) => {
      if (part.type === 'blank') {
        return <BlankSpace key={index} index={part.id} answer={part.answer} />;
      } else {
        return <span className='m-1' key={index}>{part}</span>;
      }
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='flex h-40 flex-col'>
        {/* <h2>Scores: {score}</h2> */}
        <div className='h-24' style={{ display: 'flex' }}>
          {wordList.map((word, index) => (
            <Word key={index} word={word} index={index} />
          ))}
        </div>
        <div className='border-2 rounded-md bg-slate-50 p-2 m-3 h-24 flex items-center justify-center'>{renderParagraph()}</div>
      </div>
    </DndProvider>
  );
};

export default PreCloze;
