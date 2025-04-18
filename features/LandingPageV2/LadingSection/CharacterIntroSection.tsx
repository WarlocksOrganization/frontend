import { useState } from "react";
import { styled } from "styled-components";
import CharacterSection from "@/features/LandingPageV2/LadingSection/CharacterIntroSection/CharacterSection";
import { characterConfigs } from "@/features/LandingPageV2/LadingSection/CharacterIntroSection/CharacterConfigs";
import {useCurrentCharacter} from "@/stores/currentCharacter";

type CharacterIntroSectionProps = {
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
};

// const CharacterIntroSection = () => {
//     const [selectedIndex, setSelectedIndex] = useState(0);


const CharacterIntroSection = ({ selectedIndex, setSelectedIndex }: CharacterIntroSectionProps) => {
    // const [selectedIndex, setSelectedIndex] = useState(0);
    const {setCurrentCharacter} = useCurrentCharacter()

  return (
    <Section id={"character"}>
      <h1 style={{
        textAlign: "center",
        fontSize: "3em",
        color: "white",
        textShadow: `
          -2px -2px 0 black,
            2px -2px 0 black,
          -2px  2px 0 black,
            2px  2px 0 black
        `
      }}>캐릭터 설명</h1>
      <RowWrapper>
        <ButtonContainer>
            {characterConfigs.map((char, idx) => (
            <Button
                key={char.id}
                $isCurrent={selectedIndex === idx}
                $color={char.color}
                onClick={() => {
                    setSelectedIndex(idx)
                    setCurrentCharacter(char.id)
                }}
            >
                <CharacterIcon src={char.src}></CharacterIcon>
            </Button>
            ))}
        </ButtonContainer>
        <ContentWrapper>
            {characterConfigs.map(
                ((it, key) => <CharacterSection
                    key = {key}
                    {...it} />
                ))
            }
        </ContentWrapper>
      </RowWrapper>
    </Section>
  );
};
const Section = styled.section`
  height: 100vh;
  min-height: 500px;
  max-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3em;
  overflow: hidden;
`;
const RowWrapper = styled.div`
  display: flex;
    width: 100%;
    padding: 4vw;
  flex-direction: row;
`;
const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 10%;
  flex-direction: column;
  justify-content: center;
`;

const CharacterIcon = styled.img`
width: 4.5rem;
height: 4.5rem;
aspect-ratio: 1 / 1;
object-fit: contain;
margin-right: 1rem;
border-radius: 50%;
`;
const Button = styled.div<{ $isCurrent: boolean; $color: string }>`
  font-size: 1.3em;
  padding: 1vh 2vh;
  margin: 1vh;
  border-radius: 3vh;
  cursor: pointer;

  ${({ $isCurrent, $color }) =>
    $isCurrent
      ? `background-color: ${$color};
        text-shadow: none;`
      : `background-color: transparent;
        text-shadow:
            -1px -1px 0 black,
            1px -1px 0 black,
            -1px  1px 0 black,
            1px  1px 0 black;`}

  &:hover {
    ${({ $isCurrent }) =>
      !$isCurrent &&
      `
      background-color: #2E2739;
      color: white;
    `}
transition: background-color 0.5s;
`;

export default CharacterIntroSection;
