import styled, {keyframes} from "styled-components";

const FlowSection = () => {
    const logoUrls = [
        "/logo/cpp.png",
        "/logo/elasticsearch.png",
        "/logo/figma.png",
        "/logo/java.png",
        "/logo/kibana.png",
        "/logo/kotlin.jpg",
        "/logo/logstash.webp",
        "/logo/mirror.webp",
        "/logo/mongo.png",
        "/logo/PostgreSQL.png",
        "/logo/spring.png",
        "/logo/unity.png",
    ]

    return (
        <FlowBox>
            <FlowWrap>
                <Flow>
                    {logoUrls.map((item, key) =>
                        <img src={item} alt={item} key={key}/>
                    )}
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
        transform: translate3d(70%, 0, 0);
    }
    
    100% {
        transform: translate3d(-210%, 0, 0);
    }
`

const FlowBox = styled.div`
    width: 100%;
    height: 100px;
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
    font-size: clamp(15px, 3vw, 8rem);
    animation: ${flow} 100s linear infinite;
    
    span {
        display: inline-block;
        font-weight: 600;
        padding: 0 3vw;
    }
    
    img {
        padding: 0 3vw;
        display: inline-block;
        height: 6vh;
    }
`

export default FlowSection