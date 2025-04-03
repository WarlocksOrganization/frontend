import { useState } from "react";
import {styled } from "styled-components";
import ArcherSection from "@/features/LandingPageV2/LadingSection/CharacterIntroSection/ArcherSection";
import ClericSection from "@/features/LandingPageV2/LadingSection/CharacterIntroSection/ClericSection";
import MagicianSection from "@/features/LandingPageV2/LadingSection/CharacterIntroSection/MagicianSection";
import NecroSection from "@/features/LandingPageV2/LadingSection/CharacterIntroSection/NecroSection";
import WarriorSection from "@/features/LandingPageV2/LadingSection/CharacterIntroSection/WarriorSection";

const characterComponents = [
  { id: "archer", label: "궁수", src: "/job/archer.png", color: "greenyellow", component: <ArcherSection /> },
  { id: "warrior", label: "전사", src: "/job/warrior.png", color: "#DCAD67", component: <WarriorSection /> },
  { id: "magician", label: "마법사", src: "/job/mage.png", color: "deepskyblue", component: <MagicianSection /> },
  { id: "necro", label: "네크로맨서", src: "/job/necromancer.png", color: "#9D71BD", component: <NecroSection /> },
  { id: "cleric", label: "성직자", src: "/job/priest.png", color: "yellow", component: <ClericSection /> },
];

const CharacterIntroSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Section id={"character"}>
      <h1 style={{ textAlign: "center", fontSize: "3em" }}>캐릭터 설명</h1>
      <RowWrapper>
        <ButtonContainer>
            {characterComponents.map((char, idx) => (
            <Button
                key={char.id}
                $isCurrent={selectedIndex === idx}
                $color={char.color}
                onClick={() => setSelectedIndex(idx)}
            >
                <CharacterIcon src={char.src}></CharacterIcon>
            </Button>
            ))}
        </ButtonContainer>
        <ContentWrapper>{characterComponents[selectedIndex].component}</ContentWrapper>
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
      ? `background-color: ${$color};`
      : `background-color: transparent;`}

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
