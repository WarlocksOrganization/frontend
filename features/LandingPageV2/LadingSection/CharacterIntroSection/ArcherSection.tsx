import styled from "styled-components";
import ModelCanvas from "@/model/ModelCanvas";
import {ArcherModel} from "@/model/ArcherModel";
import {useState} from "react";

const ArcherSection = () => {
    const [currentSkill, setCurrentSkill] = useState(-1);

    const skillDescs = [
        "정밀한 화살이 적을 꿰뚫습니다.",
        "맹독을 머금은 화살이 적의 생명을 갉가먹습니다.",
        "강력한 폭발을 일으키는 화살을 발사합니다.",
    ]

    const skillIcons = [
        "/skill/v2/archer/arrow_icon.png",
        "/skill/v2/archer/explosionArrow_icon.png",
        "/skill/v2/archer/poisonArrow_icon.png"
    ]

    return (
        <ArcherSectionContainer id={"charictor"}>
            <ContentSection>
                <div className={"flex flex-row justify-between"}>
                    <div>
                        <h2>궁수</h2>
                        <h3>Archer</h3>
                    </div>
                    <div className={"flex flex-col place-items-end"}>
                        <Title>강력한 화살로 순식간에 숨통을 끊는다!</Title>
                        <Desription>신념이 담긴 화살 한 발로 전장을 뒤흔드는 전설의 궁수! <br/>
                            그가 조준한 적은 결코 살아 돌아가지 못한다.<br/>
                            당신의 뒤에 나타났다면, 이미 늦었다 <br/>
                            <strong>— 정확하고 냉혹한 사냥꾼, 궁수가 전장에 합류한다!”</strong></Desription>
                    </div>
                </div>

                <div className={"flex flex-row justify-between mt-10 "}>
                    <ModelCanvas>
                        <ArcherModel/>
                    </ModelCanvas>

                    <SkillBox className={"text-center"}>
                        <div onClick={() => {setCurrentSkill(0)}}>
                            <img src={skillIcons[0]} alt="arrow_icon"/>
                            <span>신궁의 화살</span>
                        </div>
                        <div onClick={() => {setCurrentSkill(1)}}>
                            <img src={skillIcons[1]} alt="explosionArrow_icon"/>
                            <span>폭렬 화살</span>
                        </div>
                        <div onClick={() => {setCurrentSkill(2)}}>
                            <img src={skillIcons[2]} alt="arrow_icon.png"/>
                            <span>맹독 화살</span>
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
        </ArcherSectionContainer>
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
    width: 80%;
`
const Title = styled.h2`
    width: 70%;
    font-size: 1em;
`
const ArcherSectionContainer = styled.div`
    background-color: greenyellow;
    padding: 10vh 0;
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