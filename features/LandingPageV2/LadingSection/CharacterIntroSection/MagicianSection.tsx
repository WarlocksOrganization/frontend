import {useState} from "react";
import styled from "styled-components";
import {MageModel} from "@/model/MageModel";
import ModelCanvas from "@/model/ModelCanvas";

const MagicianSection = () => {

    const [currentSkill, setCurrentSkill] = useState(-1);

    const skillDescs = [
        "타오르는 화염구를 날려 적을 불태웁니다.",
        "천둥을 불러 하늘의 분노를 적에게 내립니다.",
        "차가운 폭풍이 몰아쳐 적을 얼려버립니다.",
    ]
    const skillNames = [
        "화염구",
        "신의 심판",
        "빙설의 포효",
    ]
    const skillIcons = [
        "/skill/v2/mage/fireball_icon.png",
        "/skill/v2/mage/thunder_icon.png",
        "/skill/v2/mage/IceArea_icon.png"
    ]


    return (
        <SectionContainer >
            <ContentSection>
                <div className={"flex flex-row justify-between"}>

                    <div>
                        <h2>마법사</h2>
                        <h3>Mage</h3>
                    </div>
                    <div className={"flex flex-col place-items-end"}>
                        <Title>지식은 힘이요, 마력은 파멸이다!</Title>
                        <Desription>고대의 주문을 읊조리는 순간, 하늘이 갈라지고 불꽃이 쏟아진다. <br/>
                            마법사의 손끝에서 펼쳐지는 화염구는 적을 재로 만들고, <br/>
                            하늘에서 쏟아지는 얼음의 분노 눈보라로 전장을 얼려버린다. <br/>
                            <strong>— “이 세계의 법칙은, 내가 다시 쓴다!”</strong></Desription>
                    </div>
                </div>

                <div className={"flex flex-row justify-between mt-10 "}>
                    <ModelCanvas>
                        <MageModel/>
                    </ModelCanvas>
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
    background-color: deepskyblue;
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

export default MagicianSection