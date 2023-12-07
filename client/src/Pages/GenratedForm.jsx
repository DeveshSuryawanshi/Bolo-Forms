import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components";
import CategorizePreview from "../Components/CategorizePreview";

export default function GenratedForm() {
    const [forms, setForms] = useState([]); 

    useEffect(() =>{
        axios.get("https://bolo-forms-sn9f.onrender.com/form")
         .then((res) =>{
           let data = res.data[res.data.length-1];
           let temp = data.formdata;
          setForms(temp);  
         })
         .catch((error)=>{
            console.log(error);
         })
    },[])

    console.log(forms);

  return (
    <Container>
      {
        forms?.map((el,i) =>{
          return (
            // <h1>{el.data.description}</h1>
            el.data.questiontype === "Categorize"? <h1>Categorize</h1> : <h1>Not found</h1>
          )
        })
      }
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    max-width: 70%;
    border: solid lightgray 1px;
    margin: 30px auto;
    border-radius: 10px;
`