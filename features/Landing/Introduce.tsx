import ContentTitle from "@/UI/text/ContentTitle";
import LandingContent from "@/features/Landing/LandingContent";
import React, { Component } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Introduce = () => {
    const settings = {
        dots: true, // 하단 네비게이션 점 표시
        infinite: true, // 무한 루프
        speed: 500, // 전환 속도
        slidesToShow: 1, // 한 번에 표시할 슬라이드 개수
        slidesToScroll: 1, // 한 번에 넘기는 슬라이드 개수
        autoplay: true, // 자동 재생
        autoplaySpeed: 3000, // 자동 재생 속도 (3초)
        arrows: true // 좌우 화살표 제거 (필요하면 true로 변경 가능)
    };

    return (
        <LandingContent titleId={"intro"}>
            <ContentTitle> 소개 </ContentTitle>
            <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto", overflow: "hidden" }}>
                <Slider {...settings}>
                    <div className="slide">
                        <h3>🏹 마법 전투! 🔥</h3>
                        <img src="/images/ingame_fight1.png"/>
                        <p>최후의 생존자가 되기 위한 치열한 전투!</p>
                    </div>
                    <div className="slide">
                        <h3>💥 6명의 플레이어 전투!</h3>
                        <img src="/images/ingame_map.png"/>
                        <p>아기자기한 전장에서 펼쳐지는 전략적 대결!</p>
                    </div>
                    <div className="slide">
                        <h3>🎴 매 라운드 카드 선택</h3>
                        <img src="/images/ingame_upgrade.png"/>
                        <p>상점 없이, 매 라운드마다 3장의 카드를 골라 나만의 스킬을 강화하세요!</p>
                    </div>
                    <div className="slide">
                        <h3>🏰 다양한 직업 & PVP</h3>
                        <img src="/images/ingame_select.png"/>
                        <p>마법사, 전사, 네크로맨서, 궁수 등 전략을 맞춰 전투하세요!</p>
                    </div>
                    <div className="slide">
                        <h3>🌪️ 밀쳐내기 전투!</h3>
                        <img src="/images/ingame_fight2.png"/>
                        <p>스킬을 활용해 적을 밀쳐내고 맵 밖으로 떨어뜨리세요!</p>
                    </div>
                    <div className="slide">
                        <h3>⚔️ 귀여운 비주얼 + 깊이 있는 전략</h3>
                        <img src="/images/ingame_main.png"/>
                        <p>누구나 쉽게 즐길 수 있는 직관적인 전투! 지금 바로 도전하세요!</p>
                    </div>
                </Slider>
            </div>
        </LandingContent>
    );
;}
export default Introduce;