import styled from "styled-components";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";

export default function Home() {
  return (
    <Container>
      <Heading>Welcome to the Bolo Forms</Heading>
      <Link to={"/createform"}>
        <Wrapper>
          <Pera>Create Form</Pera>
          <CiSquarePlus size={40} color="#4A5568"/>
        </Wrapper>
      </Link>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 70vh;
`;

const Heading = styled.h1`
  font-size: 40px;
  font-weight: 700;
  background-color: #b794f4;
  width: max-content;
  padding: 20px;
  border-radius: 20px;
  color: white;
`;

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100px;
  background-color: #e9d8fd;
  margin: 20px;
  border-radius: 10px;
  border: black 1px dashed;
`;

const Pera = styled.p`
  font-size: 25px;
  color: #4A5568;
`