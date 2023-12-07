import styled from "styled-components"
import { IoMdSave } from "react-icons/io";
import { useState } from "react";

export default function Comprehension() {
  const [save, setSave] = useState(false);

  const handleSave = () =>{
    setSave((prev) => !prev);
  }

  return (
    <Container>
      <SaveButoonContainer>
        <IoMdSave size={30} onClick={handleSave}/>
      </SaveButoonContainer>
      <Header>
        <Caption>
          Read the text below and answer the question based on it.
        </Caption>
        <QuestionInput disabled={save} type="text" placeholder="Enter the caption here"/>
      </Header>
      <br />
      <OptionsContainer>
        <OptionInput type="text" disabled={save} placeholder="Enter Option 1"/>
        <OptionInput type="text" disabled={save} placeholder="Enter Option 2"/>
        <OptionInput type="text" disabled={save} placeholder="Enter Option 3"/>
        <OptionInput type="text" disabled={save} placeholder="Enter Option 4"/>
      </OptionsContainer>
      <br />

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
const Header = styled.div`
  width: 100%;
`
const Caption = styled.div`
  padding: 10px;
  border: solid lightgray 1px;
  border-radius:  10px;
  margin-bottom: 10px;
  text-align: start;
`
const QuestionInput = styled.input`
  height: 40px;
  border: solid lightgray 1px;
  border-radius:  10px;
  width: 100%;
  padding-left: 10px;
`

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const OptionInput = styled.input`
  border: solid lightgray 1px;
  width: 250px;
  border-radius: 5px;
  height: 35px;
  padding-left:  10px;
`