import styled from "styled-components";

interface LandingContentProps {
    children: React.ReactNode
    titleId: string
}
const LandingContent = ({children, titleId} : LandingContentProps) => {

    return (
        <LandingContentContainer id={titleId} className={"text-center"}>
            {children}
        </LandingContentContainer>
    )
}

const LandingContentContainer = styled.div`
    margin: 10% 0;
`
export default LandingContent;