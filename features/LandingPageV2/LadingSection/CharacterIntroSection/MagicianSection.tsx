import {useState} from "react";
import styled from "styled-components";
import {MageModel} from "@/model/MageModel";
import ModelCanvas from "@/model/ModelCanvas";

const MagicianSection = () => {
    const [currentSkill, setCurrentSkill] = useState(-1);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const skillLabels = [
        "화염구",
        "신의 심판",
        "폭렬 화살",
        "빙설의 포효",
        "천상의 격노",
        "극한의 서리",
    ]

    const skillDescs = [
        "타오르는 화염구를 발사하여 적을 불태웁니다.",
        "천둥을 불러 하늘의 분노를 적에게 내립니다.",
        "차가운 폭풍이 몰아쳐 적을 얼려버립니다.",
        "거대한 유성이 떨어져 모든 것을 불태웁니다.",
        "신의 분노가 연속적인 천둥으로 쏟아집니다.",
        "점차 퍼지는 영원의 겨울이 적을 얼어붙게 만듭니다.",
    ]

    const skillIcons = [
        "/skill/v2/mage/fireball_icon.png",
        "/skill/v2/mage/thunder_icon.png",
        "/skill/v2/mage/IceArea_icon.png",
        "/skill/v2/mage/meteor_icon.png",
        "/skill/v2/mage/ThunderStrorm_icon.png",
        "/skill/v2/mage/FreezeArea_icon.png",
    ]

    return (
        <SectionContainer id={"character"}>
            <ContentSection>
                <div className={"flex flex-row justify-between"}>
                    <div>
                        <h2>마법사</h2>
                        <h3>Mage</h3>
                    </div>
                    <div className={"flex flex-col place-items-end"}>
                    <SkillTextWrapper>
                        {/* <Title>지식은 힘이요, 마력은 파멸이다!</Title> */}
                        {/* <Desription>고대의 주문을 읊조리는 순간, 하늘이 갈라지고 불꽃이 쏟아진다. <br/>
                            마법사의 손끝에서 펼쳐지는 화염구는 적을 재로 만들고, <br/>
                            하늘에서 쏟아지는 얼음의 분노 눈보라로 전장을 얼려버린다. <br/>
                            <strong>— “이 세계의 법칙은, 내가 다시 쓴다!”</strong></Desription> */}
                            <Title show={currentSkill === -1}>이 세계의 법칙은 내가 다시 쓴다!
                                <br />변수를 창출하는 마법의 전문가!
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
                        <MageModel/>
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
    background-color: deepskyblue;
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

export default MagicianSection