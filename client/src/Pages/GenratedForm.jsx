import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import PreCategorize from "../Components/PreviewComponents/PreCategorize";
import PreCloze from "../Components/PreviewComponents/PreCloze";
import { PreComprehension } from "../Components/PreviewComponents/PreComprehension";

export default function GenratedForm() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    axios
      .get("https://bolo-forms-sn9f.onrender.com/form")
      .then((res) => {
        let temp = res.data[res.data.length - 1];
        setForms(temp.formData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(forms);

  return (
    <Container>
      <button>submit</button>
      {forms?.map((el, i) => {
        return el.questiontype === "Categorize" ? (
          <PreCategorizeContainer key={i}>
            <div className="header">
              <p>{i+1}.   Categorize the following</p>
              <p className="points">{el.points} Points</p>
            </div>
            <PreCategorize
              Categories={el.categories}
              questions={el.questions}
            />
          </PreCategorizeContainer>
        ) : el.questiontype === "Cloze"? (
          <PreClozeContainer>
            <div className="header">
            <p>{i+1}.  Fill in the blank</p>
              <p className="points">{el.points} Points</p>
            </div>
            <PreCloze key={i} breakpoints={el.breakpoints} description={el.description}/>
          </PreClozeContainer>
          ) : (
            <PreComprehensionContainer>
              <div className="header">
              <p>{i+1}. {el.question}</p>
                <p className="points">{el.points} Points</p>
              </div>
              <PreComprehension data={el}/>
            </PreComprehensionContainer>
        )
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 70%;
  /* border: solid lightgray 1px; */
  margin: 30px auto;
  border-radius: 10px;
`;

const PreCategorizeContainer = styled.div`
width: 90%;
margin: auto;
border: solid lightgray 1px;
margin: 10px auto;
border-radius: 10px;
padding: 10px 20px;

p{
  text-align: left;
  margin: 10px 0px 0px 0px;
  font-size: 20px;
}

.header{
  display: flex;
  justify-content: space-between;
}

.points{
  border: solid black 1px;
  padding: 5px 10px;
  border-radius: 10px;
}
`;

const PreClozeContainer = styled.div`
width: 90%;
margin: auto;
border: solid lightgray 1px;
margin: 10px auto;
border-radius: 10px;
padding: 10px 20px;
height: 250px;

.header{
  display: flex;
  justify-content: space-between;
}

p{
  text-align: left;
  margin: 10px 0px 0px 0px;
  font-size: 20px;
}
`

const PreComprehensionContainer = styled.div`
width: 90%;
margin: auto;
border: solid lightgray 1px;
margin: 10px auto;
border-radius: 10px;
padding: 10px 20px;
height: 250px;

.header{
  display: flex;
  justify-content: space-between;
}

p{
  text-align: left;
  margin: 10px 0px 0px 0px;
  font-size: 20px;
}
`
