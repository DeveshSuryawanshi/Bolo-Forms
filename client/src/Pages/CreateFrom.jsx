import { useState } from "react";
import styled from "styled-components";
import { CiCirclePlus } from "react-icons/ci";
import Question from "../Components/Question";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function CreateFrom() {
  const [forms, setForms] = useState([]);
  const Navto = useNavigate()

  const handleAddNewQuestion = () => {
    setForms([...forms, { id: forms.length + 1, data: {} }]);
  };

  const getIdFromQuestion = (id) =>{
    setForms(forms.filter((el,i) => i !== id));
  }

  const getFromData = (data,i) =>{
    forms[i].data = data; 
  }

  const handleGenrateForm = () =>{

    axios.post("https://bolo-forms-sn9f.onrender.com/form/create",{formdata: forms})
     .then((res) =>{
      toast.success("Generated Successfully Redirecting...",{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(()=>{
        Navto("/genratedfrom")
      },4000)
     })
     .catch((error) =>{
      toast.error("Something went wronge...",{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
     })
  }

  return (
    <Container>
      <GenrateBtnWrapper>
        {
          forms.length !==0 &&(<GenrateButton onClick={handleGenrateForm}> Genrate From </GenrateButton>)
        }
      </GenrateBtnWrapper>
      <FromsContainer>
        {forms.map((form,i) => {
          return (
              <Question key={i} question={i} getIdFromQuestion={getIdFromQuestion} getFromData={getFromData}/>
          )
        })}
      </FromsContainer>
      <AddFormWrapper onClick={handleAddNewQuestion}>
        <CiCirclePlus size={30} />
        <AddText>Add Question</AddText>
      </AddFormWrapper>
      <ToastContainer/>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  max-width: 80%;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 20px;
`;

const FromsContainer = styled.div``;

const AddFormWrapper = styled.div`
  display: flex;
  width: max-content;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px auto;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #edf2f7;
  }
`;

const AddText = styled.p`
  font-weight: 600;
`;

const GenrateBtnWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 98%;
  margin: auto;
`

const GenrateButton = styled.button`
padding: 10px 20px;
background-color: #b794f4;
border-radius: 10px;
color: white;
font-weight: 400;
border: solid lightgray 1px;
 
 &:hover{
  background-color: #edf2f7;
  cursor: pointer;
  color: black;
 }
`