import ShortIntroSection from "@/features/LandingPageV2/LadingSection/ShortIntroSection";
import GameIntroSection from "@/features/LandingPageV2/LadingSection/GameIntroSection";
import CharacterIntroSection from "@/features/LandingPageV2/LadingSection/CharacterIntroSection";
import DownloadSection from "@/features/LandingPageV2/LadingSection/DownloadSection";
import FlowSection from "@/features/LandingPageV2/LadingSection/FlowSection";

const LandingSection = () => {

    return (
        <>
            <ShortIntroSection/>
            <FlowSection />
            <GameIntroSection/>

            <CharacterIntroSection/>
            <DownloadSection/>
        </>
    )
}

export default LandingSection
