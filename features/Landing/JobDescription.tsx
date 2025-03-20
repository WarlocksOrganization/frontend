import LandingContent from "@/features/Landing/LandingContent";
import ContentTitle from "@/UI/text/ContentTitle";
import styled from "styled-components";
import Image from "next/image";

const JobDescription = () => {

    return (
        <LandingContent titleId={"job"}>
            <JobContainer className={"text-center"}>
                <ContentTitle> 직업 설명 </ContentTitle>
                <Image src={"/job/mage.png"} alt={"mage_image"} width={100} height={100}/>
                <div className={"mt-3"} style={{fontSize: "1.5em"}}> 마법사</div>
                <div className={"mt-3"} > 강력한 마법을 구사하여 적을 죽인다. </div>
                <Image src={"/job/archer.png"} alt={"archer_image"} width={100} height={100}/>
                <div className={"mt-3"} style={{fontSize: "1.5em"}}> 궁수 </div>
                <div className={"mt-3"} > 강력한 활을 구사하여 적을 죽인다. </div>
            </JobContainer>
        </LandingContent>
    );
}

const JobContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 5px;
`

const JDContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`

export default JobDescription