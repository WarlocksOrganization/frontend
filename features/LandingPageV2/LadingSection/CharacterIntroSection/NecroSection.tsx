import {useState} from "react";
import styled from "styled-components";
import ModelCanvas from "@/model/ModelCanvas";
import {NecroModel} from "@/model/NecroModel";

const NecroSection = () => {

    const [currentSkill, setCurrentSkill] = useState(-1);

    const skillDescs = [
        "망령이 어둠을 가르고 장애물을 무시하며 돌진합니다.",
        "광기의 소용돌이가 영혼을 끌어당기며 적들을 중심으로 끌어모읍니다.",
        "지옥불이 적을 불태우고 사용자의 생명을 치유합니다.",
    ]
    const skillNames = [
        "망령의 급습",
        "영혼 소용돌이",
        "지옥의 갈증",
    ]
    const skillIcons = [
        "/skill/v2/necro/PhantomAttack_icon.png",
        "/skill/v2/necro/SoulVortex_icon.png",
        "/skill/v2/necro/InfernalFlask_icon.png"
    ]

    return (
        <SectionContainer >
            <ContentSection>
                <div className={"flex flex-row justify-between"}>

                    <div>
                        <h2>네크로맨서</h2>
                        <h3>Necromancer</h3>
                    </div>
                    <div className={"flex flex-col place-items-start w-full"}>
                        <Title>죽음을 넘나드는 자, 망자의 군주가 깨어난다.</Title>
                        <Desription>영혼의 소용돌이로 적을 휘감아 끌어당기고, <br/>
                            ‘망령의 돌진’으로 깨어난 혼령이 전장을 질주한다. <br/>
                            마지막엔 ‘지옥의 갈증’, 저주받은 불꽃이 적을 불태우며 <br/>
                            도망칠 틈조차 허락하지 않는다. <br/>
                            <strong>— “살아있는 자는 두려워하고,
                                        죽은 자는 그를 따른다—
                                        그 이름, 네크로맨서.”
                            </strong></Desription>
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
                        <NecroModel/>
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
    background-color: 	#9D71BD;
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

export default NecroSection