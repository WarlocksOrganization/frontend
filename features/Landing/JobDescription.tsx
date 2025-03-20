import LandingContent from "@/features/Landing/LandingContent";
import ContentTitle from "@/UI/text/ContentTitle";
import styled from "styled-components";
import Image from "next/image";
import {useState} from "react";
import PowerMeter from "@/UI/job/PowerMeter";

const JobDescription = () => {
    const [curFocusJob, setCurFocusJob] = useState<number>(0);

    const jobImageUrl = [
        "/job/mage.png",
        "/job/archer.png",
        "/job/warrior.png",
        "/job/necromancer.png",
        "/job/priest.png",
    ]

    const jobSkillUrl = [
        "/job/mage_skill.png",
        "/job/archer_skill.png",
        "/job/warrior_skill.png",
        "/job/necromancer_skill.png",
        "/job/priest_skill.png",
    ]

    const jobImageAlt = [
        "마법사",
        "아쳐",
        "전사",
        "네크로맨서",
        "클레릭 ",
    ]
    const jobDescriptionTxt = [
        "강력한 마법을 구사한다.",
        "다양한 화살로 적을 관통한다.",
        "강력한 근접무기로 적을 공격한다.",
        "어둠의 마법으로 적을 혼란스럽게 한다.",
        "천사의 힘으로 적을 잡는다.",
    ]

    const jobPowerMeter = [
        {attack: 4, hp: 2, moveSpeed: 1, nuckBack: 3},
        {attack: 2, hp: 3, moveSpeed: 4, nuckBack: 1},
        {attack: 1, hp: 4, moveSpeed: 2, nuckBack: 3},
        {attack: 4, hp: 1, moveSpeed: 3, nuckBack: 2},
        {attack: 1, hp: 4, moveSpeed: 2, nuckBack: 3},
    ]

    return (
        <LandingContent titleId={"job"}>
            <JobDescriptionLayout>
                <ContentTitle> 직업 </ContentTitle>
                <JobImageContainer>
                    {
                        jobImageUrl.map((imgSrc, idx) =>
                                <div key={idx}>
                                    <Image
                                        key={idx}
                                        src={imgSrc}
                                        alt={jobImageAlt[idx]}
                                        width={100}
                                        height={100}
                                        onMouseEnter={() => setCurFocusJob(idx)}
                                    />
                                    <figcaption> {jobImageAlt[idx]}</figcaption>
                                </div>)
                    }
                </JobImageContainer>
                <JobDetail>
                    <div className={"place-items-center text-center flex flex-col mr-10"}>
                        <Image
                            src={jobImageUrl[curFocusJob]}
                            alt={jobImageAlt[curFocusJob]}
                            width={100}
                            height={100}
                        />
                        <div className={"mt-3"} style={{fontSize: "1.5em"}}> {jobImageAlt[curFocusJob]} </div>
                        <div className={"mt-3"} > {jobDescriptionTxt[curFocusJob]} </div>
                    </div>
                    <div className={"place-items-center text-center flex flex-col"} >
                        <PowerMeter
                            attack={jobPowerMeter[curFocusJob].attack}
                            hp={jobPowerMeter[curFocusJob].hp}
                            moveSpeed={jobPowerMeter[curFocusJob].moveSpeed}
                            nuckBack={jobPowerMeter[curFocusJob].nuckBack}/>
                    </div>
                </JobDetail>
                <Image
                            src={jobSkillUrl[curFocusJob]}
                            alt={jobImageAlt[curFocusJob]}
                            width={400}
                            height={100}
                        />
            </JobDescriptionLayout>
        </LandingContent>
    );
}

const JobDetail = styled.div`
    display: flex;
    flex-direction: row;
`

const JobImageContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: row;
`
const JobDescriptionLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 5px;
    width: 100%; /* 전체 너비 사용 */
    max-width: 60%; /* 60%로 제한 */
    margin: 5px auto; /* 중앙 정렬 */
    text-align: center; /* 내부 텍스트 중앙 정렬 */
`

const JDContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export default JobDescription