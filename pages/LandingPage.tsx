'use client'
import MainHeader from "@/UI/Header";
import Download from "@/features/Landing/Download";
import Introduce from "@/features/Landing/Introduce";
import styled from "styled-components";

const LandingPage = () => {

    return (
        <LandingContainer>
            <MainHeader/>
            <ContentsContainer>
                <Download/>
                <Introduce/>
            </ContentsContainer>
        </LandingContainer>
    )
}

const ContentsContainer = styled.div`
    margin: 0 10%;  
`

const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export default LandingPage