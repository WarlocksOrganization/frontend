import {useState} from "react";
import styled from "styled-components";
import ModelCanvas from "@/model/ModelCanvas";
import {ClericModel} from "@/model/ClericModel";

const ClericSection = () => {
    const [currentSkill, setCurrentSkill] = useState(-1);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const skillLabels = [
        "성스러운 광휘",
        "축복의 방패",
        "성스러운 치유",
        "???? ?",
        "??? ??? ??",
        "??? ??",
    ]

    const skillDescs = [
        "신성한 구체가 적을 심판합니다.",
        "신성한 힘이 방패를 만들어 모든 공격을 막아냅니다.",
        "거룩한 기운이 범위 안의 모두를 치유합니다.",
        "??????",
        "??????",
        "??????",
    ]
    // const skillLabels = [
    //     "성스러운 광휘",
    //     "축복의 방패",
    //     "성스러운 치유",
    //     "성스러운 창",
    //     "신성한 축복의 방패",
    //     "거룩한 치유",
    // ]

    // const skillDescs = [
    //     "신성한 구체가 적을 심판합니다.",
    //     "신성한 힘이 방패를 만들어 모든 공격을 막아냅니다.",
    //     "거룩한 기운이 범위 안의 모두를 치유합니다.",
    //     "성스러운 창을 던집니다.",
    //     "신성한 힘의 방패를 들고 있는동안 움직일 수 있습니다.",
    //     "거룩한 기운이 모두를 치유합니다.",
    // ]

    const skillIcons = [
        "/skill/v2/cleric/HollyAttack_icon.png",
        "/skill/v2/cleric/HollyShild_icon.png",
        "/skill/v2/cleric/HolyRecovery_icon.png",
        "/skill/v2/cleric/HollySpear_icon.png",
        "/skill/v2/cleric/HolyShildPlus_icon.png",
        "/skill/v2/cleric/HolyHeal_icon.png",
    ]

    return (
        <SectionContainer id={"character"}>
            <ContentSection>
                <div className={"flex flex-row justify-between"}>
                    <div>
                        <h2>???</h2>
                        <h3>??????</h3>
                        {/* <h2>성직자</h2>
                        <h3>Priest</h3> */}
                    </div>
                    <div className={"flex flex-col place-items-end"}>
                        <SkillTextWrapper>
                        {/* <Desription>신념이 담긴신의 뜻을 전하는 클래릭이 전장에 모습을 드러낸다. <br/>
                            치유의 손길 '생명의 축복'으로 쓰러진 아군을 일으키고<br/>
                            신성한 분노가 깃든 ‘심판의 빛'으로 적에게 천벌을 내린다. <br/>
                            <strong>—"절망 속에 희망을, 혼돈 속에 질서를! 클래릭과 함께라면, 죽음마저 두렵지 않다!"</strong></Desription> */}
                                <Title show={currentSkill === -1}>신의 사도가 곧 전장에 등장합니다!
                                    <br />기대해주세요!
                                </Title>
                                <SkillDesc show={currentSkill > -1}>
                                {
                                    currentSkill > -1 &&
                                    <SkillIcon src={skillIcons[currentSkill]}/>
                                }
                                {
                                    currentSkill > -1 &&
                                    skillDescs[currentSkill]
                                }
                                </SkillDesc>
                        </SkillTextWrapper>
                    </div>
                </div>

                <SkillGroupWrapper onMouseLeave={() => {setCurrentSkill(-1)}}>
                    <ModelCanvas>
                        <ClericModel/>
                    </ModelCanvas>

                    <SkillBox>
                        {[0,1,2].map(i => (
                        <SkillItem
                            key={i}
                            onMouseEnter={() => {
                            setCurrentSkill(i);
                            setHoveredIndex(i);
                            }}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img src={skillIcons[i]} alt={`icon-${i}`} />
                            <span>{skillLabels[i]}</span>
                        </SkillItem>
                        ))}
                    </SkillBox>
                    <SkillBox>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <ArrowItem key={i}>
                        <ArrowImage $isActive={hoveredIndex === i}>
                            <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M7.41 16.59L12 12L7.41 7.41L6 8.83L9.17 12L6 15.17L7.41 16.59Z" />
                            <path d="M13.41 16.59L18 12L13.41 7.41L12 8.83L15.17 12L12 15.17L13.41 16.59Z" />
                            </svg>
                        </ArrowImage>
                        </ArrowItem>
                    ))}
                    </SkillBox>
                    <SkillBox>
                        {[3,4,5].map(i => (
                        <SkillItem
                            key={i}
                            onMouseEnter={() => {
                            setCurrentSkill(i);
                            setHoveredIndex(i-3);
                            }}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img src={skillIcons[i]} alt={`icon-${i}`} />
                            <span>{skillLabels[i]}</span>
                        </SkillItem>
                        ))}
                    </SkillBox>
                </SkillGroupWrapper>
            </ContentSection>
        </SectionContainer>
    )
}
const SkillGroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: clamp(0.5rem, 1vw, 1rem);
  flex-wrap: nowrap;
`
const SkillTextWrapper = styled.div`
  height: 5em;
  min-width: 300px
  min-height: 60px;
  display: grid;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  padding-right: 1rem;
  white-space: nowrap;
`

const SkillDesc = styled.div<{ show?: boolean }>`
  right: 0;
  font-size: clamp(1.5em, 2.5vw, 2em);
  line-height: 2.5em;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-overflow: ellipsis;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s ease;
`

const Title = styled.p<{ show?: boolean }>`
  right: 0;
  //font-weight: bold;
  font-size: clamp(1.5em, 3vw, 2em);
  line-height: 1.2em; // 높이 부족 방지
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s ease;
`

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 5vh;
  margin-right: 1vw;
  font-size: clamp(1em, 2.5vw, 1.5em);
  white-space: nowrap;
  min-height: auto;
  flex-shrink: 0;
    &:last-child {
    margin-right: 0;
  }
  > div {
  height: clamp(60px, 8vw, 100px);
  display: flex;
  align-items: center;
  justify-content: center;
`
const SkillIcon = styled.img`
    width: 4.5rem;
    height: 4.5rem;
    margin-right: 1rem;
    border-radius: 50%;
`
const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: clamp(60px, 8vw, 100px);
    height: clamp(60px, 8vw, 100px);
    margin-bottom: 0.2rem;
  }

  span {
    font-size: clamp(0.9rem, 1.2vw, 1.2rem);
    line-height: 1.2;
    white-space: nowrap;
  }
`
const ArrowItem = styled.div`
  height: clamp(60px, 8vw, 100px); // 아이콘 높이 기준
  display: flex;
  align-items: center;
  justify-content: center;
`


const ArrowImage = styled.div.attrs(() => ({}))<{ $isActive?: boolean }>`
  width: clamp(30px, 4vw, 60px);
  height: clamp(30px, 4vw, 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-0.5rem);
  color: ${({ $isActive }) => ($isActive ? "black" : "white")};
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`
const Desription = styled.p`
    font-size: 1.3em;
    width: 80%;
`

const SectionContainer = styled.div`
    background-color: yellow;
    height: 100vh;
    min-height: 500px;
    max-height: 100svh;
    display: flex;
    flex-direction: column;
    padding-top: 3em;
    overflow: hidden;
`

const ContentSection = styled.div`
    width: 80%;
    margin: auto;
    
    h2 {
        font-size: 3em;
    } 
    h3 {
        font-size: 1.8em;
    }
`

export default ClericSection