import styled from "styled-components";
import HeaderNavButton from "@/UI/buttons/nav/HeaderNavButton";
const MainHeader = () => {

    return (
        <MainHeaderContainer className={"flex flex-col "}>
            <FlexContainer>
                <LogoTitle>
                    <LogoContainer>
                        SMASH UP!
                    </LogoContainer>
                </LogoTitle>
                <NavBar>
                    <HeaderNavButton toId={"#intro"}>
                        소개
                    </HeaderNavButton>
                    <HeaderNavButton toId={"#download"}>
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
    
    width: 30%;
    display: flex;
    justify-content: space-between;
`
const LogoTitle = styled.div``
const LogoContainer = styled.div`
    font-size: 5em;
`
const MainHeaderContainer = styled.div`
    //width: calc(100vw - (100vw - 100%));
    width: 100%;
    height: 60vh;
    background-image: url("/header_image.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
`
const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
`

export default MainHeader;