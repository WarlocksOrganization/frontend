import Slider from "react-slick";
import React, {useRef, useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, {css} from "styled-components";

const UpdateSection = () => {

    return (
        <Section id={"intro"}>
            <Title>신규 업데이트</Title>
            <StyledImage src={"/images/update111.png"} alt={"update_ver1.11"}/>
            {/* <SliderContainer>
                <SliderWrapper>
                    <Slider>
                            <Slide>
                            
                            </Slide>
                    </Slider>
                </SliderWrapper>
            </SliderContainer> */}
        </Section>
    )
}

const Section = styled.section`
  height: 100vh;
  min-height: 500px;
  max-height: 100svh;
  display: flex;
  flex-direction: column;
  padding-top: 3em;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  text-align: center;
  font-size: 3em;
  color: white;
  text-shadow: 
    -2px -2px 0 black,
     2px -2px 0 black,
    -2px  2px 0 black,
     2px  2px 0 black;
  margin-bottom: 2rem;   // 이미지와 h1 사이 간격
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  border-radius: 2rem;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`


export default UpdateSection