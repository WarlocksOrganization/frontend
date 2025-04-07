'use client'
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopNavBar = () => {
    return (
        // <div className={"flex justify-between m-6"}>
        <FixedNavBar>
            <LeftNavContainer >
                <Link href={"/"}>
                    <Image src={"/images/smashUp_logo1.png"} alt={"logo"} width={100} height={50}></Image>
                </Link>
                <NavButton>
                    <Link href={"/#intro"}>소개</Link>
                </NavButton>
                <NavButton>
                    <Link href={"/#character"}>캐릭터 설명</Link>
                </NavButton>
                <NavButton>
                    <Link href={"https://drive.google.com/file/d/1K9gUWPtExBQhRgNIXUluqN3jtnJ_aiFF/view?usp=drive_link"} target={"_blank"}>다운로드</Link>
                 </NavButton>
            </LeftNavContainer>

            <RightNavContainer>
                <NavButton>
                    <Link href={"/inquire"}>문의하기</Link>
                 </NavButton>
                <NavButton>
                    <Link href={"/fetch"}>패치내역</Link>
                </NavButton>
            </RightNavContainer>
        </FixedNavBar>
    )
}


const FixedNavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3em;
  z-index: 999;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  backdrop-filter: blur(5px);
  overflow: hidden;
  position: fixed;    // ✅ 절대 유지

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.1);  // 다크용
    pointer-events: none;
  }
`

const NavButton = styled.button`
    font-family: mapleLight,serif ;
    font-size: 1.5em;
    margin: 0 1vw;
`

const LeftNavContainer = styled.div`
    display: flex;
`


const RightNavContainer = styled.div`
    display: flex;
`

export default TopNavBar