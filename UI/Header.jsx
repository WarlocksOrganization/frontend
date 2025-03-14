import styled from "styled-components";
const MainHeader = ({children}) => {

    return (
        <MainHeaderContainer className={"flex flex-col"}>
            <FlexContainer>
                <LogoTitle>
                    <LogoContainer>
                        SMASH UP!
                    </LogoContainer>
                </LogoTitle>
                <NavBar>
                    <IntroContainer>
                        소개
                    </IntroContainer>
                    <DownloadContainer>
                        다운로드
                    </DownloadContainer>
                </NavBar>
            </FlexContainer>
        <Temp>klasdjflkajsdfkl</Temp>
        </MainHeaderContainer>

    )
}
const NavBar = styled.div`
    color: #ededed;
    font-size: 2em;
    
    font-family: "Bagel Fat One";
    width: 30%;
    display: flex;
    justify-content: space-between;
`
const LogoTitle = styled.div``
const Temp = styled.h1`
`
const LogoContainer = styled.div`
    font-size: 5em;
    font-family: "Honk"
`
const IntroContainer = styled.div`
    background: darkgrey;
    
`
const DownloadContainer = styled.div`
    background: darkgrey;
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
    border: 3px solid;
    margin: 0 5%;
    justify-content: space-between;
    align-items: center;
`

export default MainHeader;