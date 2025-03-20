"use client"
import MainHeader from "@/UI/Header";
import Download from "@/features/Landing/Download";
import Introduce from "@/features/Landing/Introduce";
import styled from "styled-components";
import JobDescription from "@/features/Landing/JobDescription";

const LandingPage = () => {

    return (
        <LandingContainer>
            <MainHeader/>
            <ContentsContainer>
                <Introduce/>
                <Download/>
                <JobDescription/>
            </ContentsContainer>
        </LandingContainer>
    )
}

const ContentsContainer = styled.div`
    margin: 0 10%;  
    width: 100%;
`

const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export default LandingPage