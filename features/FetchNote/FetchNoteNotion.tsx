'use client'
import {NotionRenderer} from "react-notion-x";
import {Modal} from "react-notion-x/build/third-party/modal";
import styled from "styled-components";
import {useNotionStore} from "@/stores/notionStore";
import {useEffect, useState} from "react";
const FetchNoteNotion = () => {
    const [mounted, setMounted] = useState(false)
    const { notionData, isLoading, fetchNotionData } = useNotionStore()

    useEffect(() => {
        if (!notionData) {
            fetchNotionData()
        }
        setMounted(true)
    }, [])
    if (!mounted) return null
    if(notionData)
    return (
        <Container>
            <NotionRenderer
              disableHeader
              components={{
                Modal,
              }} // 사용할 컴포넌트들
              recordMap={notionData}
              fullPage={true} // 전체 페이지 설정
            />
        </Container>
    )
}
const Container = styled.div`
    text-align: center;
    
    h1, h3, h3, h4, ul{
        font-family: mapleLight;
    }
`
export default FetchNoteNotion