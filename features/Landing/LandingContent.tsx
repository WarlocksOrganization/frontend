import styled from "styled-components";

interface LandingContentProps {
    children: React.ReactNode
}
const LandingContent = ({children} : LandingContentProps) => {


    return (
        <LandingContentContainer>
            {children}
        </LandingContentContainer>
    )
}

const LandingContentContainer = styled.div`
    margin: 40% 0;
`

export default LandingContent;