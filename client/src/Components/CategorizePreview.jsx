import React, { useState } from 'react'
import styled from 'styled-components'
import { Item } from './Item'
import { useDrop } from 'react-dnd'

export default function CategorizePreview({data}) {
 
    const [board1, setBoard1] = useState([]);
    const [board2, setBoard2] = useState([]);
    
    const [{isOver},drop] = useDrop(()=>({
        accept: "div",
        drop: (item) => addItemToBoard(item._id),
        collect: (monitor)=> ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const [{isOver2},drop2] = useDrop(()=>({
        accept: "div",
        drop: (item) => addItemToBoard2(item),
        collect: (monitor)=> ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const addItemToBoard = (item) =>{
        const itemList = data.questions.filter((el,i) => item._id === el._id);
        if(item.belongesto === data.categories[0]){
            setBoard1((board) => [...board,itemList[0]])
        }
    }

    const addItemToBoard2 = (id) =>{
        const itemList = data.questions.filter((el,i) => id === el._id);
        setBoard2((board) => [...board,itemList[0]])
    }

  return (
    <Container>
        <QuestionWrapper>
            <Question>{data.description}</Question>
            <Points>{data.points} Points</Points>
        </QuestionWrapper>
        <Itmes>
            {
                data.questions.map((el,i) =>{
                    return(
                        <>
                          <Item key={i} data={el}/>
                        </>
                    )
                })
            }
        </Itmes>
        <BoardsContainer>

        <Boards ref={drop}>
            {
                board1?.map((el,i) =>{
                    return(
                        <>
                          <Item key={i} data={el}/>
                        </>
                    )
                })
            }
        </Boards>
        <Boards ref={drop2}>
            {
                board2?.map((el,i) =>{
                    return(
                        <>
                          <Item key={i} data={el}/>
                        </>
                    )
                })
            }
        </Boards>
        </BoardsContainer>
    </Container>
  )
}

const Container = styled.div`
    width: 95%;
    /* height: 200px; */
    margin: 10px auto;
    border: solid lightgray 1px;
    border-radius: 20px;
`
const QuestionWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    margin: 10px auto;
    justify-content: space-between;
`

const Question = styled.p`
    margin: 10px 0px;
    font-size: 17px;
    font-weight: 600;
`

const Points = styled.p`
  border: solid black 1px;
  padding: 5px 10px;
  border-radius: 50px;
`

const Itmes = styled.div`
    display: flex;
    width: 80%;
    gap: 5px;
    margin: 5px auto;
`
const BoardsContainer = styled.div`
    display: flex;
`

const Boards = styled.div`
    width: 20%;
    border: solid lightgray 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px;
    margin: 20px auto;
    border-radius: 10px;
`