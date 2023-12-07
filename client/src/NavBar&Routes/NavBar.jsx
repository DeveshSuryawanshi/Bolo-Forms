import { Link } from "react-router-dom"
import styled from "styled-components"

export default function NavBar() {
  return (
    <Container>
        <LogoWrapper>
            Bolo Forms
        </LogoWrapper>
        <LinksWrapper>
            <Link className="link" to={"/"}>Home</Link>
            <Link className="link" to={"/createform"}>CreateFrom</Link>
        </LinksWrapper>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #6B46C1;
`

const LogoWrapper = styled.div`
    color: white;
    font-size: 25px;
    font-weight: 800;
`

const LinksWrapper = styled.div`

.link{
    margin: 0px 20px;
    color: white;
    font-size: 16px;
    letter-spacing: 0.5px;
}
`

