'use client'
import {useState} from "react";
import styled from "styled-components";
import ModelCanvas from "@/model/ModelCanvas";
import {WarriorModel} from "@/model/WarriorModel";

const WarriorSection = () => {

    const [currentSkill, setCurrentSkill] = useState(-1);

    const skillDescs = [
        "강력한 도끼질로 적을 단숨에 베어냅니다.",
        "일정시간동안 체력을 회복하고 방어력이 증가합니다.",
        "거침없는 돌진으로 적을 쓸어버립니다.",
    ]
    const skillNames = [
        "참살의 조끼",
        "강화의 비약",
        "광폭 돌진",
    ]
    const skillIcons = [
        "/skill/v2/warrior/slash_icon.png",
        "/skill/v2/warrior/powerBody_icon.png",
        "/skill/v2/warrior/charge_icon.png"
    ]
    return(
        <SectionContainer >
            <ContentSection>
                <div className={"flex flex-row justify-between"}>
                    <div className={"flex flex-col place-items-start w-full"}>
                        <Title>방심하는 순간, 넌 두 동강이다!</Title>
                        <Desription>쇳덩이보다 단단한 육신과 투지로 무장한 전장의 파괴자, 전사가 돌격한다! <br/>
                            울부짖는 도끼로 적을 가르는 ‘참살의 도끼’, <br/>
                            순식간에 거리를 좁히는 맹렬한 ‘광폭 돌진’, <br/>
                            그리고 모든 공격을 막아내는 철벽의 ‘강화의 비약'까지... <br/>
                            <strong>— “앞길을 막는 자는, 전부 부숴버린다!”</strong></Desription>
                    </div>
                    <div className={"w-1/3 text-right"}>
                        <h2>전사</h2>
                        <h3>Warrior</h3>
                    </div>
                </div>

                <div className={"flex flex-row justify-between mt-10 "}>

                    <SkillBox className={"text-center"}>
                        <div onClick={() => {setCurrentSkill(0)}}>
                            <img src={skillIcons[0]} alt="HollyAttack_icon"/>
                            <span>{skillNames[0]}</span>
                        </div>
                        <div onClick={() => {setCurrentSkill(1)}}>
                            <img src={skillIcons[1]} alt="HollyShild_icon"/>
                            <span>{skillNames[1]}</span>
                        </div>
                        <div onClick={() => {setCurrentSkill(2)}}>
                            <img src={skillIcons[2]} alt="HolyRecovery_icon"/>
                            <span>{skillNames[2]}</span>
                        </div>
                    </SkillBox>

                    <ModelCanvas>
                        <WarriorModel/>
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
        </SectionContainer >
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
const SectionContainer = styled.div`
    background-color: #DCAD67;
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

export default WarriorSection