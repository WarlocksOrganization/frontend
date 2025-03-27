import styled, {keyframes} from "styled-components";

const FlowSection = () => {


    return (
        <FlowBox>
            <FlowWrap>
                <Flow>
                    <span> 구본관 </span>
                    <span> 김성일 </span>
                    <span> 김승우 </span>
                    <span> 이승록 </span>
                    <span> 전상혁 </span>
                    <span> 손정찬 </span>
                </Flow>
            </FlowWrap>
        </FlowBox>
    )
}

const flow = keyframes`
    0% {
        transform: translate3d(110%, 0, 0);
    }
    
    100% {
        transform: translate3d(-110%, 0, 0);
    }
`

const FlowBox = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
`

const FlowWrap = styled.div`
    display: flex;
    top:0;
    left: 0;
    align-items: center;
    width: 100%;
    height: 100%;
    white-space: nowrap;
`

const Flow = styled.div`
    font-size: clamp(15px, 5vw, 8rem);
    animation: ${flow} 8s linear infinite;
    
    span {
        display: inline-block;
        font-weight: 600;
        padding:0 20px;
    }
`

export default FlowSection