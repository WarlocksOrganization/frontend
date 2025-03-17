import {ReactNode} from "react";
import styled from "styled-components";

interface ContentTitleProps {
    children: ReactNode
}
const ContentTitle = ({children} : ContentTitleProps) => {

    return (
        <ContentTitleContainer>
            {children}
        </ContentTitleContainer>
    )
}
const ContentTitleContainer = styled.h2`
    font-size: 2rem;
`
export default ContentTitle