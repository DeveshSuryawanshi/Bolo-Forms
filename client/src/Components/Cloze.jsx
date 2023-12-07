import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { GrUnderline } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { IoMdSave } from "react-icons/io";

export default function Cloze() {

  const [selectedWord, setSelectedWord] = useState('');
  const [underlinedWords, setUnderlinedWords] = useState([]);
  const paragraphRef = useRef(null);
  const [peraInput, setPeraInput] = useState("");
  const [save, setSave] = useState(false);

  const handleSelectWord = () => {
    const paragraph = paragraphRef.current;
    
    if (paragraph) {
      const selection = window.getSelection();
      const selectedText = selection.toString().trim();

      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.style.textDecoration = 'underline';
      range.surroundContents(span);

      if(!underlinedWords.includes(selectedText)){
        setUnderlinedWords(prevWords => [...prevWords, selectedText]);
      }
 
      selection.removeAllRanges();
    }
  };

  const handleDelete = (index) =>{
    let temp = [...underlinedWords];
    let data = temp.filter((el,i)=> {
      if(i !== index){
        return el;
      }
    })
    setUnderlinedWords(data);
  }

  const handleSave = () =>{
    setSave((prev) => !prev);
  }

  return (
    <Container>
      <SaveButoonContainer>
        <IoMdSave size={30} onClick={handleSave}/>
      </SaveButoonContainer>
      <PeraWrapper>
        <Heading>Sentence</Heading>
        <Input type="text" disabled={save} onChange={(e)=> setPeraInput(e.target.value)} placeholder='Enter your question here...'/>
        <UnderLineButton disabled={save} onClick={handleSelectWord}><GrUnderline size={25}/></UnderLineButton>
        <Heading>Underline words here to convert them into blanks.</Heading>
        <Pera ref={paragraphRef} >
          {peraInput}
        </Pera>
      </PeraWrapper>
      <br/>
      <ShowSelectedWords>
        {
          underlinedWords.map((el,i) =>{
            return(
              <SelectedWord key={i}>
                <Word>{el}</Word>
                {
                  save == false&&<IoMdClose size={30} onClick={()=>handleDelete(i)}/>
                }
              </SelectedWord>
            )
          })
        }
      </ShowSelectedWords>
      <br/>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 92%;
  margin: auto;
`
const SaveButoonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`
const PeraWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin: auto;
`

const Heading = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`

const UnderLineButton = styled.button`
  background-color: #EDF2F7;
  padding: 5px 30px;
  border-radius: 10px;
  margin: 10px 0px;
`

const Input = styled.input`
  border: solid lightgray 1px;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  border-radius: 10px;
`
const Pera = styled.p`
  width: 100%;
  text-align: start;
  border: solid lightgray 1px;
  padding: 10px;
  border-radius: 10px;
`
const ShowSelectedWords = styled.div`
  width: 100%;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const SelectedWord = styled.div`
display: flex;
justify-content: center;
width: max-content;
align-items: center;
gap: 10px;
`

const Word = styled.p`
  padding: 10px;
  border: solid lightgray 1px;
  width: 200px;
  border-radius: 10px;
  text-align: left;
`
