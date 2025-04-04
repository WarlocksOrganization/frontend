import Slider from "react-slick";
import React, {useRef, useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, {css} from "styled-components";

const GameIntroSection = () => {
    const [currentImg, setCurrentImg] = useState(0)
    const [description, setDescription] = useState("누구나 쉽게 즐길 수 있는 직관적인 전투! 지금 바로 도전하세요!")
    const [descriptionFade, setDescriptionFade] = useState(false)

    const sliderRef = useRef<Slider>(null)

    const slideToIndex = (index: number) => {
        console.log(index)
        sliderRef.current?.slickGoTo(index)
    }
    const settings = {
        dots: false, // 하단 네비게이션 점 표시
        infinite: true, // 무한 루프
        speed: 500, // 전환 속도
        slidesToShow: 1, // 한 번에 표시할 슬라이드 개수
        slidesToScroll: 1, // 한 번에 넘기는 슬라이드 개수
        autoplay: true, // 자동 재생
        autoplaySpeed: 3000, // 자동 재생 속도 (3초)
        arrows: true, // 좌우 화살표 제거 (필요하면 true로 변경 가능)
        afterChange: (currentSlide: number) => {
            setCurrentImg(currentSlide)
            setDescriptionFade(true)
            setTimeout( () => {
                setDescriptionFade(false)
                setDescription(sliderDatas[currentSlide].description)
            }, 200)
        },
        ref: sliderRef
    };


    const sliderDatas = [
        {
            buttonName:"가벼운 플레이",
            buttonColor:"#FFD200",
            title: "⚔️ 귀여운 비주얼 + 깊이 있는 전략",
            url: "/images/1_main_image.png",
            description: "누구나 쉽게 즐길 수 있는 직관적인 전투! 지금 바로 도전하세요!"
        },
        {
            buttonName: "스킬강화",
            buttonColor: "#FFBDA3",
            title: "🏹 마법 전투! 🔥",
            url: "/images/2_card_image.png",
            description: "최후의 생존자가 되기 위한 치열한 전투!"
        },
        {
            buttonName: "아이템",
            buttonColor: "#FFB4B9",
            title: "💥 6명의 플레이어 전투!",
            url: "/images/3_item_image.png",
            description: "아기자기한 전장에서 펼쳐지는 전략적 대결!"
        },
        {
            buttonName: "전투",
            buttonColor: "#BEF5BE",
            title: "🎴 매 라운드 카드 선택",
            url: "/images/4_battle_image.png",
            description: "다양한 카드를 선택해 강화하세요!"
        },
        {
            buttonName: "다양한 맵",
            title: "🏰 다양한 직업 & PVP",
            buttonColor: "#EBAA5F",
            url: "/images/5_map_image.png",
            description: "마법사, 전사, 네크로맨서, 궁수 등 전략을 맞춰 전투하세요!"
        }
    ]

    return (
        <Section id={"intro"}>
            <h1 style={{textAlign: "center", fontSize: "3em"}}>게임 소개</h1>
            <ButtonContainer>
                {
                    sliderDatas.map( (item, key) =>
                        <Button
                            key={item.buttonName}
                            $isCurrent={currentImg == key}
                            $color={item.buttonColor}
                            onClick={() => {slideToIndex(key);
                                console.log(key)} }
                        >
                            {item.buttonName}
                        </Button>
                    )
                }
            </ButtonContainer>
            <SliderContainer>
                <SliderWrapper>
                    <Slider {...settings}>
                        {sliderDatas.map(item => (
                        <div key={item.url} style={{ height: '100%' }}>
                            <Slide>
                            <StyledImage src={item.url} alt={item.description} />
                            </Slide>
                        </div>
                        ))}
                    </Slider>
                </SliderWrapper>
                {/*<Description $fade={descriptionFade}> {description}</Description>*/}
            </SliderContainer>


        </Section>
    )
}

const Section = styled.section`
  scroll-margin-top: 80px;
`

const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 85vh;
    margin: 0 auto;
    justify-content: space-between;
    overflow: hidden;
`
const SliderWrapper = styled.div`
  height: 75vh;
  overflow: hidden;
`

const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
//   padding: 2vh 0;
`

const StyledImage = styled.img`
  max-height: auto;
  max-width: 70%;
  object-fit: contain;
  display: block;
  margin: 0 auto;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Button = styled.div<{$isCurrent: boolean, $color: string}>`
    font-size: 1.3em;
    padding: 1vh 2vh;
    margin: 1vh;
    
    &:hover {
        ${({$isCurrent}) => {
            if(!$isCurrent) return css`
                border-radius: 3vh;
                background-color: darkgrey; 
        `
        }};
    };
    
    ${({$isCurrent, $color}) => {
        if($isCurrent) return css`
            background-color: ${$color};
            border-radius: 3vh;
        `
    }};
    
    transition: background-color 0.5s, border-radius 0.5s
`
const Description = styled.p<{$fade:boolean}>`
    font-size: 1.5em;
    margin: 3vh 0;
    opacity: ${({$fade}) => $fade ? 0: 1};
    transition: opacity 0.5s;
    text-align: center;
`
export default GameIntroSection