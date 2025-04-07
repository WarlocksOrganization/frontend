import styled from "styled-components";
import ModelCanvas from "@/model/ModelCanvas";
import {ArcherModel} from "@/model/ArcherModel";
import {useState} from "react";

const ArcherSection = () => {
    const [currentSkill, setCurrentSkill] = useState(-1);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const skillLabels = [
        "신궁의 화살",
        "맹독 화살",
        "폭렬 화살",
        "얼음 송곳",
        "독사의 포효",
        "유성 사격",
    ]

    const skillDescs = [
        "정밀한 화살이 적을 꿰뚫습니다.",
        "맹독을 머금은 화살이 적의 생명을 갉아먹습니다.",
        "강력한 폭발을 일으키는 화살을 발사합니다.",
        "차가운 화살이 적의 움직임을 둔화시킵니다.",
        "집중한 한 발이 독을 머금고 적을 관통합니다.",
        "하늘에서 떨어지는 별처럼 강렬한 화살이 적을 덮칩니다.",
    ]

    const skillIcons = [
        "/skill/v2/archer/arrow_icon.png",
        "/skill/v2/archer/poisonArrow_icon.png",
        "/skill/v2/archer/explosionArrow_icon.png",
        "/skill/v2/archer/IceArrow_icon.png",
        "/skill/v2/archer/PoisonSpore_icon.png",
        "/skill/v2/archer/StarFall_icon.png",
    ]

    return (
        <SectionContainer>
            <ContentSection>
                <div className={"flex flex-row justify-between"}>
                    <div>
                        <h2>궁수</h2>
                        <h3>Archer</h3>
                    </div>
                    <div className={"flex flex-col place-items-end"}>
                        <SkillTextWrapper>
                        {/* <Desription>신념이 담긴 화살 한 발로 전장을 뒤흔드는 전설의 궁수! <br/>
                            그가 조준한 적은 결코 살아 돌아가지 못한다.<br/>
                            당신의 뒤에 나타났다면, 이미 늦었다 <br/>
                            <strong>— 정확하고 냉혹한 사냥꾼, 궁수가 전장에 합류한다!”</strong></Desription> */}
                                <Title show={currentSkill === -1}>보고 피하기에는 이미 늦었다!
                                    <br />강력한 화살이 순식간에 숨통을 끊는다!
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
                        <ArcherModel/>
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
    border-radius: 1rem;
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
    background-color: greenyellow;
    height: 100vh;
    min-height: 500px;
    max-height: 100svh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 1rem;
    padding: 0 1em;
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
export default ArcherSection;