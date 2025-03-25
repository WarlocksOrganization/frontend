import styled from "styled-components";

const ShortIntroSection = () => {
    return (
        <Container>
            <TextSection>
                <Title> Smash Up</Title>
                <p>쉽고, 재미있게, 다함께 즐길 수 있는 배틀로얄 게임입니다. </p>
            </TextSection>

            <ImageSection>

                Image
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
`

const ImageSection = styled.div`
    
`


export default ShortIntroSection
