import {useState} from "react";
import styled from "styled-components";
import ModelCanvas from "@/model/ModelCanvas";
import {ClericModel} from "@/model/ClericModel";

const ClericSection = () => {

    const [currentSkill, setCurrentSkill] = useState(-1);

    const skillDescs = [
        "신성한 구체가 적을 심판합니다.",
        "신헝한 힘이 방패를 만들어 적의 공력을 막아냅니다.",
        "거룩한 기운이 범위 안의 모두를 치유합니다.",
    ]

    const skillIcons = [
        "/skill/v2/cleric/HollyAttack_icon.png",
        "/skill/v2/cleric/HollyShild_icon.png",
        "/skill/v2/cleric/HolyRecovery_icon.png"
    ]

    return (
        <ClericSectionContainer>
            <ContentSection>
                <div className={"flex flex-row justify-between"}>
                    <div className={"flex flex-col place-items-start w-full"}>
                        <Title>빛이 머무는 자, 생명을 부여하고 심판을 내리다!</Title>
                        <Desription>신념이 담긴신의 뜻을 전하는 클래릭이 전장에 모습을 드러낸다. <br/>
                            치유의 손길 '생명의 축복'으로 쓰러진 아군을 일으키고 <br/>
                            신성한 분노가 깃든 ‘심판의 빛'으로 적에게 천벌을 내린다. <br/>
                            <strong>— "절망 속에 희망을, 혼돈 속에 질서를! 클래릭과 함께라면, 죽음마저 두렵지 않다!"</strong></Desription>
                    </div>
                    <div className={"w-1/3 text-right"}>
                        <h2>성직자</h2>
                        <h3>Cleric</h3>
                    </div>
                </div>

                <div className={"flex flex-row justify-between mt-10 "}>

                    <SkillBox className={"text-center"}>
                    <div onClick={() => {setCurrentSkill(0)}}>
                            <img src={skillIcons[0]} alt="HollyAttack_icon"/>
                            <span>성스러운 광휘</span>
                        </div>
                        <div onClick={() => {setCurrentSkill(1)}}>
                            <img src={skillIcons[1]} alt="HollyShild_icon"/>
                            <span>축복의 방패</span>
                        </div>
                        <div onClick={() => {setCurrentSkill(2)}}>
                            <img src={skillIcons[2]} alt="HolyRecovery_icon"/>
                            <span>성스러운 치유</span>
                        </div>
                    </SkillBox>

                    <ModelCanvas>
                        <ClericModel/>
                    </ModelCanvas>
                </div>

                <SkillDesc>
                    {
                        currentSkill > -1 &&
                        <img src={skillIcons[currentSkill]} alt="skillIcon"
                             className={"w-1/12 mr-5"} style={{borderRadius: "50%"}}/>
                    }
                    {
                        currentSkill > -1 &&
                        skillDescs[currentSkill]
                    }
                </SkillDesc>
            </ContentSection>
        </ClericSectionContainer>
    )
}

const SkillDesc = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    text-align: center;
    margin: 2em 0;
`
const SkillBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    margin: 0 10vw ;
    img {
        width: 10vw;
        height: 10vw; 
    }
`
const Desription = styled.p`
    font-size: 1.3em;
    width: 100%;
`
const Title = styled.div`
    width: 100%;
    font-size: 3em;
`
const ClericSectionContainer = styled.div`
    background-color: yellow;
    padding: 10vh 0;
`

const ContentSection = styled.div`
    width: 80%;
    margin: auto;
    
    h2 {
        font-size: 3em;
        width: 5em;
    } 
    h3 {
        font-size: 1.8em;
    }
`

export default ClericSection