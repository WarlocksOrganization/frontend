import ContentTitle from "@/UI/text/ContentTitle";
import LandingContent from "@/features/Landing/LandingContent";

const Introduce = () => {

    return (
        <LandingContent titleId={"intro"}>
            <ContentTitle> 소개 </ContentTitle>
            <div className={""}>
                🏹 마법 전투! 🔥
            </div>
            <div>
                6명의 플레이어가 아기자기한 전장에서 펼치는 최후의 생존 싸움! 💥<br/>
                상점 없이, 라운드마다 3장의 카드를 골라 나만의 스킬을 강화하세요! 🎴✨ <br/>
            </div>
            <div>
                🏰 개인전 PVP! 다양한 직업(마법사, 전사, 네크로맨서, 궁수 등)을 선택해 맞춤 전략을 세우고, <br/>
                🌪️ 스킬을 활용해 적을 밀쳐내세요! 맵 밖으로 떨어지면 탈락! <br/>
                😆 가볍지만 깊이 있는 플레이로 누구나 쉽게 즐길 수 있어요! <br/>

                귀여운 비주얼 속 전략과 스킬이 빛나는 전투! 지금 바로 도전하세요! ⚔️🔮
            </div>
        </LandingContent>
    )
}
export default Introduce;