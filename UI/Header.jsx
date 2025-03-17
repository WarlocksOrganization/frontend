import styled from "styled-components";
import HeaderNavButton from "@/UI/buttons/nav/HeaderNavButton";
const MainHeader = () => {

    return (
        <MainHeaderContainer className={"flex flex-col"}>
            <FlexContainer>
                <LogoTitle>
                    <LogoContainer>
                        SMASH UP!
                    </LogoContainer>
                </LogoTitle>
                <NavBar>
                    <HeaderNavButton>
                        소개
                    </HeaderNavButton>
                    <HeaderNavButton>
                        다운로드
                    </HeaderNavButton>
                </NavBar>
            </FlexContainer>
        </MainHeaderContainer>

    )
}
const NavBar = styled.div`
    color: #ededed;
    font-size: 2em;
    
    font-family: "Bagel Fat One",serif;
    width: 30%;
    display: flex;
    justify-content: space-between;
`
const LogoTitle = styled.div``
const LogoContainer = styled.div`
    font-size: 5em;
    font-family: "Honk"
`
const MainHeaderContainer = styled.div`
    width: 100vw;
    height: 60vh;
    background-image: url("/header_image.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
`
const FlexContainer = styled.div`
    display: flex;
    border: 3px solid black;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
`

export default MainHeader;