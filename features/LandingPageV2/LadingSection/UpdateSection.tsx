import Slider from "react-slick";
import React, {useRef, useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, {css} from "styled-components";
import Link from "next/link";

const UpdateSection = () => {

    return (
        <Section id={"intro"}>
            <Title>신규 업데이트</Title>
            <Link href={"/fetch"} className={"flex justify-center"} style={{width: "80%", height: "80%"}}>
                <StyledImage src={"/images/update130.png"} alt={"update_ver1.11"}/>
            </Link>
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
  max-height: 100%;
  object-fit: contain;
  border-radius: 2rem;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`


export default UpdateSection