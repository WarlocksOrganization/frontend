'use client'
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopNavBar = () => {
    return (
        <div className={"flex justify-between m-6"}>
            <LeftNavContainer >
                <Link href={"/"}>
                    <Image src={"/images/smashUp_logo1.png"} alt={"logo"} width={100} height={50}></Image>
                </Link>
                <NavButton>
                    <Link href={"/#intro"}>소개</Link>
                </NavButton>
                <NavButton>
                    <Link href={"/#charictor"}>캐릭터 설명</Link>
                </NavButton>
                <NavButton>
                    <Link href={"https://drive.google.com/file/d/1KjTMgWJkwlub28L_Y1JAvOyHsyfs4h4C/view?usp=sharing"} target={"_blank"}>다운로드</Link>
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
        </div>
    )
}

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