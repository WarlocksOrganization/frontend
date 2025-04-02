import styled, {keyframes} from "styled-components";
import Slider from "react-slick";
import {abs} from "stylis";

const TalkSection = () => {

    const settings = {
        dots: false, // 하단 네비게이션 점 표시
        infinite: true, // 무한 루프
        speed: 500, // 전환 속도
        slidesToShow: 1, // 한 번에 표시할 슬라이드 개수
        slidesToScroll: 1, // 한 번에 넘기는 슬라이드 개수
        autoplay: true, // 자동 재생
        autoplaySpeed: 3000, // 자동 재생 속도 (3초)
        arrows: true, // 좌우 화살표 제거 (필요하면 true로 변경 가능)
        fade: true,
    };
    const talkList = [
        {
            name: "구본관",
            talk: "너를 믿는 너를 믿어.",
            level: "리더",
            img: "/profile/gu.png"
        },
        {
            name: "김승우",
            talk: "무슨 말을 해도 따옴표로 묶어놓으면 명언처럼 보인다.",
            level: "기획",
            img: "/profile/kim.png"
        },
        {
            name: "김성일",
            talk: "Keep Going",
            level: "통계",
            img: "/profile/kimsung.png",
        },
        {
            name: "전상혁",
            talk: "똥을 싸라, 그럼 유명해질 것이다.",
            level: "소켓 서버 개발",
            img: "/profile/chun.png",
        },
        {
            name: "이승록",
            talk: "시작하고 하다보면 되어있다.",
            level: "미러 서버 개발",
            img: "/profile/lee.png",
        },
        {
            name: "손정찬",
            talk: "나에게 게임이란 그저 오락일 뿐이다.",
            level: "로그 서버",
            img: "/profile/son.png",
        }
    ]

    return (
        <>

            <SliderContainer>
                <span style={{fontSize: "5em", height: "10px", position: "absolute", color: "#CD8F49"}}>“</span>
                <Slider {...settings}>
                    {talkList.map((item, key) => {
                        return (
                            <div className="slide" >
                                <TalkContainer>
                                    <Talk> {item.talk} </Talk>
                                    <div className={"flex flex-col"}>
                                        <span style={{fontSize: "1.3em", fontWeight: 900}}>Github</span>
                                        <div className={"flex flex-row"}>
                                            <ImageBox>
                                                <Background></Background>
                                                <Profile src={item.img} alt={"프로필 이미지"}/>
                                            </ImageBox>
                                            <div className={"flex flex-col justify-center"}>
                                                <Who> {item.name} </Who>
                                                <span> {item.level}</span>
                                            </div>
                                        </div>
                                    </div>

                                </TalkContainer>
                            </div>
                        )
                    })}
                </Slider>
            </SliderContainer>
        </>
    )
}

const rotateAnimation= keyframes`
    0% {
        rotate: 0deg;
    }
    100% {
        rotate: 360deg;
    }
`
const TalkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 4em 0;
    margin-right: 7em;
    flex-direction: row;
    font-family: "Roboto", sans-serif;
`

const Who = styled.div`
    display: flex;
    flex-direction: column;
`

const Talk = styled.div`
    width: 80%;
    font-size: 2.5em;
`

const SliderContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    justify-content: center;
    overflow: hidden;
`

const ImageBox = styled.div`
    position: relative;
    margin: 2vh 0;
    margin-right: 3vh ;
`
const Background = styled.div`
    width: 3.375rem;
    height: 3.375rem;
    border-radius: 50%;
    background: repeating-conic-gradient(deeppink 0deg 18deg, transparent 18deg 30deg);
    animation: ${rotateAnimation} 25s linear infinite;
`
const Profile = styled.img`
    position: absolute;
    width: 3rem;
    height: 3rem;
    top:0.1875rem; 
    left:0.1875rem;
    border-radius: 50%
`
export default TalkSection