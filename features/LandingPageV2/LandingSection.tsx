'use client'
import ShortIntroSection from "@/features/LandingPageV2/LadingSection/ShortIntroSection";
import GameIntroSection from "@/features/LandingPageV2/LadingSection/GameIntroSection";
import CharacterIntroSection from "@/features/LandingPageV2/LadingSection/CharacterIntroSection";
import DownloadSection from "@/features/LandingPageV2/LadingSection/DownloadSection";
import FlowSection from "@/features/LandingPageV2/LadingSection/FlowSection";
import TalkSection from "@/features/LandingPageV2/LadingSection/TalkSection";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { color } from "three/tsl";

const LandingSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const backgroundStyles = {
        0: { color: "greenyellow", image: "Mage_0.png" },
        1: { color: "#DCAD67", image: "Warrior_0.png" },
        2: { color: "deepskyblue", image: "Archer_0.png" },
        3: { color: "#9D71BD", image: "Necro_0.png" },
        4: { color: "yellow", image: "Priest_0.png" },
    };
    const background = backgroundStyles[selectedIndex as 0 | 1 | 2 | 3 | 4];
    return (
        <LandingSectionWrapper style={{
            backgroundColor: background?.color,
            transition: "background 0.5s ease-in-out"
          }}>
            <ShortIntroSection/>
            <div className="text-white" style={{
                // backgroundImage: background ? `url(/background/${background.image})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: "1",
            }}>
                <Background style={{
                    backgroundImage: background ? `url(/background/${background.image})` : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "1",
                    transition: "opacity 1s",
                }}/>
                <GameIntroSection/>
                <CharacterIntroSection selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
            </div>
            <TalkSection/>
            <FlowSection />
            <DownloadSection/>
        </LandingSectionWrapper>
    )
}
const Background = styled.div`
    background: #0a0a0a;
    position: absolute;
    background-size: cover;
    width: 100%;
    height: 100%;
    
`

const LandingSectionWrapper = styled.div`
  padding-top: 3em;
  word-break: keep-all;
  overflow-wrap: break-word;
  white-space: normal;
`

export default LandingSection
