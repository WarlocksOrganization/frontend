import styled from "styled-components";
import {ReactNode} from "react";

interface HeaderNavButtonProps {
    children: ReactNode
}

const HeaderNavButton = ({children}: HeaderNavButtonProps ) => {

    return (
        <HeaderNavButtonContainer>
            {children}
        </HeaderNavButtonContainer>
    );
}

const HeaderNavButtonContainer = styled.div`
        
`
export default HeaderNavButton;