import React from 'react'
import styled from 'styled-components'
import { useDrag } from 'react-dnd'

export const Item = ({data}) => {
    const [{isDragging},drag] = useDrag(()=>({
        type: "div",
        item : data,
        collect: (monitor)=> ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
  return (
    <Container ref={drag} style={{border: isDragging ?"solid black 2px" : "solid black 1px" }}>
        {data.item}
    </Container>
  )
}

const Container = styled.div`
    padding: 10px;
    border-radius: 5px;
    border: solid black 1px;
    width: max-content;
`
