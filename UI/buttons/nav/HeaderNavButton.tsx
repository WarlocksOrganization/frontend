import styled from "styled-components";
import {ReactNode} from "react";
import Link from "next/link";

interface HeaderNavButtonProps {
    children: ReactNode
    toId: string
}

const HeaderNavButton = ({children, toId}: HeaderNavButtonProps ) => {

    return (
        <Link href={toId} >
            <HeaderNavButtonContainer>
                {children}
            </HeaderNavButtonContainer>
        </Link>
    );
}

const HeaderNavButtonContainer = styled.div`
        
`
export default HeaderNavButton;