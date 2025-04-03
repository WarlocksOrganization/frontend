import styled from "styled-components";
import ModelCanvas from "@/model/ModelCanvas";
import {NecroModel} from "@/model/NecroModel";
import {useState} from "react";

const NecroSection = () => {
    const [currentSkill, setCurrentSkill] = useState(-1);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const skillLabels = [
        "망령의 급습",
        "영혼 소용돌이",
        "지옥의 갈증",
        "망령의 추격자",
        "영혼의 심연",
        "저주의 연소",
    ]

    const skillDescs = [
        "망령이 어둠을 가르고 장애물을 무시하며 돌진합니다.",
        "영혼의 소용돌이가 적들을 중심으로 끌어모읍니다.",
        "지옥불이 적을 불태우고 사용자의 생명을 치유합니다.",
        "선택된 영혼이 깨어나 눈앞의 적을 집요하게 추적합니다.",
        "저주받은 늪이 이동을 방해하고 생명을 갉아먹습니다.",
        "중독된 불꽃이 적을 집어삼키며 지속적인 고통을 안깁니다.",
    ]

    const skillIcons = [
        "/skill/v2/necro/PhantomAttack_icon.png",
        "/skill/v2/necro/SoulVortex_icon.png",
        "/skill/v2/necro/InfernalFlask_icon.png",
        "/skill/v2/necro/PhantomSmart_icon.png",
        "/skill/v2/necro/SoulSwamp_icon.png",
        "/skill/v2/necro/InfernalPoison_icon.png",
    ]

    return (
        <SectionContainer id={"character"}>
            <ContentSection>
                <div className={"flex flex-row justify-between"}>
                    <div>
                        <h2>네크로맨서</h2>
                        <h3>Necromancer</h3>
                    </div>
                    <div className={"flex flex-col place-items-end"}>
                        <SkillTextWrapper>
                        {/* <Desription>신념이 담긴 화살 한 발로 전장을 뒤흔드는 전설의 궁수! <br/>
                            그가 조준한 적은 결코 살아 돌아가지 못한다.<br/>
                            당신의 뒤에 나타났다면, 이미 늦었다 <br/>
                            <strong>— 정확하고 냉혹한 사냥꾼, 궁수가 전장에 합류한다!”</strong></Desription> */}
                                <Title show={currentSkill === -1}>산 자는 두려워하고 죽은 자는 그를 따른다!
                                    <br />전장을 장악하는 망자의 군주
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
                        <NecroModel/>
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
    background-color: #9D71BD;
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
export default NecroSection;

// import {useState} from "react";
// import styled from "styled-components";
// import ModelCanvas from "@/model/ModelCanvas";
// import {NecroModel} from "@/model/NecroModel";

// const NecroSection = () => {

//     const [currentSkill, setCurrentSkill] = useState(-1);

//     const skillDescs = [
//         "망령이 어둠을 가르고 장애물을 무시하며 돌진합니다.",
//         "광기의 소용돌이가 영혼을 끌어당기며 적들을 중심으로 끌어모읍니다.",
//         "지옥불이 적을 불태우고 사용자의 생명을 치유합니다.",
//     ]
//     const skillNames = [
//         "망령의 급습",
//         "영혼 소용돌이",
//         "지옥의 갈증",
//     ]
//     const skillIcons = [
//         "/skill/v2/necro/PhantomAttack_icon.png",
//         "/skill/v2/necro/SoulVortex_icon.png",
//         "/skill/v2/necro/InfernalFlask_icon.png"
//     ]

//     return (
//         <SectionContainer >
//             <ContentSection>
//                 <div className={"flex flex-row justify-between"}>

//                     <div>
//                         <h2>네크로맨서</h2>
//                         <h3>Necromancer</h3>
//                     </div>
//                     <div className={"flex flex-col place-items-start w-full"}>
//                         <Title>죽음을 넘나드는 자, 망자의 군주가 깨어난다.</Title>
//                         <Desription>영혼의 소용돌이로 적을 휘감아 끌어당기고, <br/>
//                             ‘망령의 돌진’으로 깨어난 혼령이 전장을 질주한다. <br/>
//                             마지막엔 ‘지옥의 갈증’, 저주받은 불꽃이 적을 불태우며 <br/>
//                             도망칠 틈조차 허락하지 않는다. <br/>
//                             <strong>— “살아있는 자는 두려워하고,
//                                         죽은 자는 그를 따른다—
//                                         그 이름, 네크로맨서.”
//                             </strong></Desription>
//                     </div>
//                 </div>

//                 <div className={"flex flex-row justify-between mt-10 "}>
//                     <SkillBox className={"text-center"}>

//                         <div onClick={() => {setCurrentSkill(0)}}>
//                             <img src={skillIcons[0]} alt="HollyAttack_icon"/>
//                             <span>{skillNames[0]}</span>
//                         </div>
//                         <div onClick={() => {setCurrentSkill(1)}}>
//                             <img src={skillIcons[1]} alt="HollyShild_icon"/>
//                             <span>{skillNames[1]}</span>
//                         </div>
//                         <div onClick={() => {setCurrentSkill(2)}}>
//                             <img src={skillIcons[2]} alt="HolyRecovery_icon"/>
//                             <span>{skillNames[2]}</span>
//                         </div>
//                     </SkillBox>

//                     <ModelCanvas>
//                         <NecroModel/>
//                     </ModelCanvas>
//                 </div>
//                 <SkillDesc>
//                     {
//                         currentSkill > -1 &&
//                         <img src={skillIcons[currentSkill]} alt="skillIcon"
//                              className={"w-1/12 mr-5"} style={{borderRadius: "50%"}}/>
//                     }
//                     {
//                         currentSkill > -1 &&
//                         skillDescs[currentSkill]
//                     }
//                 </SkillDesc>
//             </ContentSection>
//         </SectionContainer >
//     )
// }

// const SkillDesc = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     font-size: 1.5em;
//     text-align: center;
//     margin: 2em 0;
// `
// const SkillBox = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-evenly;
    
//     margin: 0 10vw ;
//     img {
//         width: 10vw;
//         height: 10vw; 
//     }
// `
// const Desription = styled.p`
//     font-size: 1.3em;
//     width: 100%;
// `
// const Title = styled.div`
//     width: 100%;
//     font-size: 3em;
// `
// const SectionContainer = styled.div`
//     background-color: 	#9D71BD;
//     padding: 10vh 0;
// `

// const ContentSection = styled.div`
//     width: 80%;
//     margin: auto;
    
//     h2 {
//         font-size: 3em;
//         width: 5em;
//     } 
//     h3 {
//         font-size: 1.8em;
//     }
// `

// export default NecroSection