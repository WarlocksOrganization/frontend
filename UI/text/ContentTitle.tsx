import {ReactNode} from "react";
import styled from "styled-components";

interface ContentTitleProps {
    children: ReactNode
}
const ContentTitle = ({children} : ContentTitleProps) => {

    return (
        <ContentTitleContainer className={"mb-3"}>
            {children}
        </ContentTitleContainer>
    )
}
const ContentTitleContainer = styled.h2`
    font-size: 2rem;
`
export default ContentTitle