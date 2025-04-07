import styled from "styled-components";
import ModelCanvas from "@/model/ModelCanvas";
import {useState} from "react";
import {useCurrentCharacter} from "@/stores/currentCharacter";

type CharacterConfigType = {
    id: string;
    label: string;
    color: string;
    description: string;
    skillLabels: string[];
    skillDescs: string[];
    skillIcons: string[];
    ModelComponent: React.ComponentType<any>;
  };

const CharacterSection = ({
    id,
    label,
    color,
    description,
    skillLabels,
    skillDescs,
    skillIcons,
    ModelComponent
}: CharacterConfigType) => {

    const [currentSkill, setCurrentSkill] = useState(-1);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { currentCharacter } = useCurrentCharacter()

    const renderDescription = (text: string) =>
        text.split("\n").map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ));

    if(currentCharacter !== id) null
    else
    return (
        <div className="w-[80vw] p-10 flex flex-col rounded-xl text-black" style={{ backgroundColor: color }}>
            <div className={"flex flex-row justify-between gap-8"}>
                <div>
                    <p className="text-5xl">{label}</p>
                    <p className="text-3xl">{id}</p>
                </div>
                <div className={"flex flex-col place-items-end"}>
                    <div className="min-w-[300px] min-h-[100px] grid justify-end items-center">
                        {
                            currentSkill === -1 ?  <Title>{renderDescription(description)}</Title>
                                :
                                <SkillDesc >
                                    <img className = "w-[4.5rem] h-[4.5rem] mb-1 rounded-[50]" src={skillIcons[currentSkill]} alt={`icon-${currentSkill}`} />
                                    {renderDescription(skillDescs[currentSkill])}
                                </SkillDesc>
                        }

                    </div>
                </div>
            </div>
            <div className="flex flex-row place-content-evenly gap-[clamp(0.5rem, 1vw, 1rem)] flex-nowrap" onMouseLeave={() => {setCurrentSkill(-1)}}>
                <ModelCanvas>
                    <ModelComponent/>
                </ModelCanvas>
                <div className="flex flex-col justify-around align-center gap-[5vh] mr-[1vw] last:mr-0 text-[clamp(1rem,2.5vw,1.5rem)] whitespace-nowrap min-h-auto flex-shrink-0">
                    {[0,1,2].map(i => (
                    <div className="justify-center items-center text-center h-[clamp(60px,8vw,100px)]"
                        key={i}
                        onMouseEnter={() => {
                        setCurrentSkill(i);
                        setHoveredIndex(i);
                        }}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img className="w-[clamp(60px,8vw,100px)] h-[clamp(60px,8vw,100px)] mb-1 rounded-xl" src={skillIcons[i]} alt={`icon-${i}`} />
                        <span className="text-[clamp(0.9rem,1.2vw,1.2rem)] leading-[1.2] whitespace-nowrap">{skillLabels[i]}</span>
                    </div>
                    ))}
                </div>
                <div className="flex flex-col justify-around align-center gap-[5vh] mr-[1vw] last:mr-0 text-[clamp(1rem,2.5vw,1.5rem)] whitespace-nowrap min-h-auto flex-shrink-0">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div className="h-[clamp(60px, 8vw, 100px)] flex align-center justify-center" key={i}>
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
                    </div>
                ))}
                </div>
                <div className="flex flex-col justify-around align-center gap-[5vh] mr-[1vw] last:mr-0 text-[clamp(1rem,2.5vw,1.5rem)] whitespace-nowrap min-h-auto flex-shrink-0">
                    {[3,4,5].map(i => (
                    <div className="justify-center items-center text-center h-[clamp(60px,8vw,100px)]"
                        key={i}
                        onMouseEnter={() => {
                        setCurrentSkill(i);
                        setHoveredIndex(i-3);
                        }}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img className="w-[clamp(60px,8vw,100px)] h-[clamp(60px,8vw,100px)] mb-1 rounded-xl" src={skillIcons[i]} alt={`icon-${i}`} />
                        <span className="text-[clamp(0.9rem,1.2vw,1.2rem)] leading-[1.2] whitespace-nowrap">{skillLabels[i]}</span>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const SkillDesc = styled.div`
  right: 0;
  font-size: clamp(1.5em, 2.5vw, 2em);
  line-height: 1.5em;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-overflow: ellipsis;
  transition: opacity 0.3s ease;
`

const Title = styled.p`
  right: 0;
  //font-weight: bold;
  font-size: clamp(1.5em, 3vw, 2em);
  line-height: 1.2em; // 높이 부족 방지
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  transition: opacity 0.3s ease;
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
export default CharacterSection;