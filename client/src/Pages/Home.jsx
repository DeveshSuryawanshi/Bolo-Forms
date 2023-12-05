import styled from "styled-components"

export default function Home() {
  return (
    <Container>
        <Heading>Welcome to the Bolo Forms</Heading>
    </Container>
  )
}

const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 70vh;
`

const Heading = styled.h1`
    font-size: 40px;
    font-weight: 700;
    background-color: #B794F4;
    width: max-content;
    padding: 20px;
    border-radius: 20px;
    color: white;
    border: solid black 5px;
`