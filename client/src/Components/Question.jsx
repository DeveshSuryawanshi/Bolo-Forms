import styled from "styled-components";
import { LuCodesandbox } from "react-icons/lu";
import { BsQuestionSquare } from "react-icons/bs";
import { useState } from "react";
import Categorize from "./Categorize";
import Cloze from "./Cloze";
import Comprehension from "./Comprehension";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiSolidUpArrowSquare } from "react-icons/bi";

export default function Question({ question, getIdFromQuestion, getFromData}) {
  const [category, setCategory] = useState("");
  const [points, setPoints] = useState("");

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDelete = () =>{
    setCategory("");
    getIdFromQuestion(question);
  }

  const getQuestionData = (data) =>{
    let newData = {
      ...data,
      points
    }
    getFromData(newData, question);
  }

  return (
    <Container>
      <Nav>
        <QuestionWrapper>
          <LuCodesandbox size={35} />
          <QuestionNumber>Question {question+1}</QuestionNumber>
        </QuestionWrapper>

        <CataegoryWrapper>
          <Select value={category} onChange={handleCategory}>
            <option value="">Select Category</option>
            <option value="Categorize">Categorize</option>
            <option value="Cloze">Cloze</option>
            <option value="Comprehension">Comprehension</option>
          </Select>
          <BsQuestionSquare size={34} color="black" />
        </CataegoryWrapper>

        <PointsWrapper>
          <PointHeading>Points</PointHeading>
          <PointsInput type="number" onChange={(e) => setPoints(e.target.value)}/>
        </PointsWrapper>
      </Nav>
      <ButtonWrapper>
         <RiDeleteBin6Fill size={30} className="icon" spacing={30} onClick={handleDelete}/>
      </ButtonWrapper>
      {category === "Categorize" ? (
        <Categorize getQuestionData={getQuestionData} id={question}/>
      ) : category === "Cloze" ? (
        <Cloze getQuestionData={getQuestionData}/>
      ) : category === "Comprehension" ? (
        <Comprehension getQuestionData={getQuestionData}/>
      ) : (
        <SelectHeading>Select Category<BiSolidUpArrowSquare /></SelectHeading>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin: 35px 10px;
  border-radius: 5px;
  border: solid lightgray 1px;
  width: 95%;

  .icon:hover{
    cursor: pointer;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #b794f4;
  border-radius: 5px 5px 0px 0px;
`;

const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const QuestionNumber = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const CataegoryWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Select = styled.select`
  padding: 5px 10px;
  border: solid black 1px;
  border-radius: 5px;
  background-color: #b794f4;
`;

const PointsWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const PointHeading = styled.div`
  font-size: 18px;
`;

const PointsInput = styled.input`
  border-bottom: solid black 1px;
  padding-left: 5px;
  width: 80px;
  background-color: #b794f4;
`;

const SelectHeading = styled.h1`
  font-size: 20px;
  margin: 40px;
  font-weight: 600;
  background-color: #b794f4;
  padding: 10px 20px;
  width: max-content;
  margin: 40px auto;
  border-radius: 10px 0px 10px 0px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 91.5%;
  margin: 10px auto;
`