import ShortIntroSection from "@/features/LandingPageV2/LadingSection/ShortIntroSection";
import GameIntroSection from "@/features/LandingPageV2/LadingSection/GameIntroSection";
import CharacterIntroSection from "@/features/LandingPageV2/LadingSection/CharacterIntroSection";
import DownloadSection from "@/features/LandingPageV2/LadingSection/DownloadSection";
import FlowSection from "@/features/LandingPageV2/LadingSection/FlowSection";
import TalkSection from "@/features/LandingPageV2/LadingSection/TalkSection";

const LandingSection = () => {

    return (
        <>
            <ShortIntroSection/>
            <GameIntroSection/>
            <TalkSection/>
            <FlowSection />
            <CharacterIntroSection/>
            <DownloadSection/>
        </>
    )
}

export default LandingSection
