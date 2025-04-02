import ArcherSection from "@/features/LandingPageV2/LadingSection/CharacterIntroSection/ArcherSection";
import ClericSection from "@/features/LandingPageV2/LadingSection/CharacterIntroSection/ClericSection";
import MagicianSection from "@/features/LandingPageV2/LadingSection/CharacterIntroSection/MagicianSection";
import NecroSection from "@/features/LandingPageV2/LadingSection/CharacterIntroSection/NecroSection";
import WarriorSection from "@/features/LandingPageV2/LadingSection/CharacterIntroSection/WarriorSection";

const CharacterIntroSection = () => {

    return (
        <div className={"text-black"}>
            <ArcherSection />
            <WarriorSection />
            <MagicianSection />
            <NecroSection />
            <ClericSection />
        </div>
    )
}

export default CharacterIntroSection;