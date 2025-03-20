import ContentTitle from "@/UI/text/ContentTitle";
import LandingContent from "@/features/Landing/LandingContent";


const Download = () => {
    
    return (
        <LandingContent titleId={"download"}>
            <div className={"bg-green-50 p-10"}>
                <ContentTitle> 다운로드 </ContentTitle>
                <a className={"rounded-md p-2 bg-cyan-500 shadow-lg shadow-cyan-500/50"}
                   href={"https://drive.usercontent.google.com/download?id=13nybhPIKGdH_0HDd6waFBVcub8nsx29Y&export=download&authuser=0"}
                >
                    다운로드
                </a>
            </div>
        </LandingContent>
    )
}

export default Download