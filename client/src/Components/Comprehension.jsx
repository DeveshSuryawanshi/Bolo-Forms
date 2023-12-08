import styled from "styled-components";
import { IoMdSave } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";

export default function Comprehension({getQuestionData}) {
  const [save, setSave] = useState(false);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleSave = () => {
    setSave((prev) => !prev);
    let newData = {
      questiontype : "Comprehension",
      options: [option1, option2, option3, option4],
      answer : correctAnswer,
      question
    }
    getQuestionData(newData);
  };

  const handleCorrectAnswer = (e) =>{
    let ans = e.target.value;
    setCorrectAnswer(ans);
  }

  return (
    <Container>
      <SaveButoonContainer>
        {save ? (
          <FaEdit size={30} onClick={handleSave} />
        ) : (
          <IoMdSave size={30} onClick={handleSave} />
        )}
      </SaveButoonContainer>
      <Header>
        <Caption>
          Read the text below and answer the question based on it.
        </Caption>
        <QuestionInput
          disabled={save}
          type="text"
          placeholder="Enter the caption here"
          onChange={(e)=> setQuestion(e.target.value)}
        />
      </Header>
      <br />
      <OptionsContainer>
        <Wrapper>
          <CorrectAns type="radio" name="correctanswer" onChange={handleCorrectAnswer} value={option1} />
          <OptionInput
            type="text"
            disabled={save}
            placeholder="Enter Option 1"
            onChange={(e)=> setOption1(e.target.value)}
          />
        </Wrapper>
        <Wrapper>
          <CorrectAns type="radio" name="correctanswer" onChange={handleCorrectAnswer} value={option2} />
          <OptionInput
            type="text"
            disabled={save}
            placeholder="Enter Option 2"
            onChange={(e)=> setOption2(e.target.value)}
          />
        </Wrapper>
        <Wrapper>
          <CorrectAns type="radio" name="correctanswer" onChange={handleCorrectAnswer} value={option3} />
          <OptionInput
            type="text"
            disabled={save}
            placeholder="Enter Option 3"
            onChange={(e)=> setOption3(e.target.value)}
          />
        </Wrapper>
        <Wrapper>
          <CorrectAns type="radio" name="correctanswer" onChange={handleCorrectAnswer} value={option4} />
          <OptionInput
            type="text"
            disabled={save}
            placeholder="Enter Option 4"
            onChange={(e)=> setOption4(e.target.value)}
          />
        </Wrapper>
      </OptionsContainer>
      <br />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 92%;
  margin: auto;
`;
const SaveButoonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
const Header = styled.div`
  width: 100%;
`;
const Caption = styled.div`
  padding: 10px;
  border: solid lightgray 1px;
  border-radius: 10px;
  margin-bottom: 10px;
  text-align: start;
  margin-top: 10px;
`;
const QuestionInput = styled.input`
  height: 40px;
  border: solid lightgray 1px;
  border-radius: 10px;
  width: 100%;
  padding-left: 10px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`

const OptionInput = styled.input`
  border: solid lightgray 1px;
  width: 250px;
  border-radius: 5px;
  height: 35px;
  padding-left: 10px;
`;

const CorrectAns = styled.input`
 margin: 2px;
`;
