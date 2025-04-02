'use client'
import ShortIntroSection from "@/features/LandingPageV2/LadingSection/ShortIntroSection";
import GameIntroSection from "@/features/LandingPageV2/LadingSection/GameIntroSection";
import CharacterIntroSection from "@/features/LandingPageV2/LadingSection/CharacterIntroSection";
import DownloadSection from "@/features/LandingPageV2/LadingSection/DownloadSection";
import FlowSection from "@/features/LandingPageV2/LadingSection/FlowSection";
import TalkSection from "@/features/LandingPageV2/LadingSection/TalkSection";
import styled from "styled-components";

const LandingSection = () => {

    return (
        <LandingSectionWrapper>
            <ShortIntroSection/>
            <GameIntroSection/>
            <CharacterIntroSection/>
            <TalkSection/>
            <FlowSection />
            <DownloadSection/>
        </LandingSectionWrapper>
    )
}

const LandingSectionWrapper = styled.div`
  padding-top: 80px;
  word-break: keep-all;
  overflow-wrap: break-word;
  white-space: normal;
`

export default LandingSection
