import styled from "styled-components";
import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import {useState} from "react";
import {white} from "next/dist/lib/picocolors";

const ShortIntroSection = () => {

    const [isHover, setIsHover] = useState(false)

    return (
        <Container>
            <TextSection>
                <Title> Smash Up</Title>
                <p> 남녀노소 누구나 쉽고, 재미있게, 다함께 즐길 수 있는 배틀로얄 게임입니다. </p>
                <Link href={"download"}> { isHover ?
                    <DownloadLink
                        $isHover={isHover}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        🎮 지금 바로 플레이!
                    </DownloadLink> :
                    <DownloadLink
                        $isHover={isHover}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        지금 바로 플레이!
                    </DownloadLink>
                    } </Link>
            </TextSection>

            <ImageSection>
                <DotLottieReact
                    src="https://lottie.host/9ddc8333-7936-4785-9d52-262d233e976e/ur6ft0oYP5.lottie"
                    loop
                    autoplay
                />
                {/*<DotLottieReact*/}
                {/*    src="https://lottie.host/d089336e-1ddf-4777-a6b0-02cd4195e029/RQCmqACby5.lottie"*/}
                {/*    loop*/}
                {/*    autoplay*/}
                {/*/>*/}
            </ImageSection>
        </Container>
    )
}

const Title = styled.h2`
    font-size: 3em;
`
const Description = styled.p`
    
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 3vw;
`

const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    
    p {
        font-size: 1.5em;
    }
`

const ImageSection = styled.div`
    
`

const DownloadLink = styled.div<{$isHover: boolean}>`
    border: ${({$isHover}) =>
        $isHover? '1px solid red' : '1px solid black'
};
    border-radius: ${({$isHover}) =>  
        $isHover? '0px' : '1.5vh'
    };
     
    margin: 2vh 0; 
    padding: 1vh 2vh;
    font-size: 1.2em;
    width: fit-content;
    color: ${({$isHover}) =>  
        $isHover? "red" : 'white'
    };
    
    background-color: ${({$isHover}) =>  
        $isHover? "white" : 'black'
    };
    
    
    
    transition: border-radius 0.2s, border 0.2s, color 0.2s, background-color 0.2s;
`

export default ShortIntroSection
