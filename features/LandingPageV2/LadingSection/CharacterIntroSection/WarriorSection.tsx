'use client'
import {useState} from "react";
import styled from "styled-components";
import ModelCanvas from "@/model/ModelCanvas";
import {WarriorModel} from "@/model/WarriorModel";

const WarriorSection = () => {
    const [currentSkill, setCurrentSkill] = useState(-1);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const skillLabels = [
        "참살의 도끼",
        "강화의 비약",
        "광폭 돌진",
        "멸절의 도끼",
        "광전사의 피",
        "멈출 수 없는 광란",
    ]

    const skillDescs = [
        "강력한 도끼질로 주변의 적을 단숨에 베어냅니다.",
        "일정 시간 동안 이동속도가 감소하지만 체력을 회복하고 방어가 증가합니다.",
        "거침없는 돌진으로 적을 쓸어버립니다.",
        "거대한 도끼를 내리쳐 전장을 가르며 눈앞의 모든 생명을 멸절시킵니다.",
        "광전사의 기운을 받아 체력을 희생하여 압도적인 힘을 발휘합니다.",
        "분노가 극에 달한 돌진으로 경로의 모든 적에게 파멸을 안깁니다.",
    ]

    const skillIcons = [
        "/skill/v2/warrior/slash_icon.png",
        "/skill/v2/warrior/powerBody_icon.png",
        "/skill/v2/warrior/charge_icon.png",
        "/skill/v2/warrior/powerSlash_icon.png",
        "/skill/v2/warrior/powerPowerBody_icon.png",
        "/skill/v2/warrior/powerCharge_icon.png",
    ]
    return (
        <SectionContainer id={"character"}>
            <ContentSection>
                <div className={"flex flex-row justify-between"}>
                    <div>
                        <h2>전사</h2>
                        <h3>Warrior</h3>
                    </div>
                    <div className={"flex flex-col place-items-end"}>
                        <SkillTextWrapper>
                        {/* <Desription>쇳덩이보다 단단한 육신과 투지로 무장한 전장의 파괴자, 전사가 돌격한다! <br/>
                            울부짖는 도끼로 적을 가르는 ‘참살의 도끼’, <br/>
                            순식간에 거리를 좁히는 맹렬한 ‘광폭 돌진’, <br/>
                            그리고 모든 공격을 막아내는 철벽의 ‘강화의 비약'까지... <br/>
                            <strong>— “앞길을 막는 자는, 전부 부숴버린다!”</strong></Desription> */}
                                <Title show={currentSkill === -1}>앞길을 막는 자는, 전부 부숴버린다!
                                    <br />누구도 부정할 수 없는 근접전의 최강자!
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
                        <WarriorModel/>
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
    background-color: #DCAD67;
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

export default WarriorSection