'use client'
import {ExtendedRecordMap} from "notion-types";
import {NotionRenderer} from "react-notion-x";
import {Modal} from "react-notion-x/build/third-party/modal";
import styled from "styled-components";

interface FetchNoteNotionProps {
    notionData: ExtendedRecordMap
}

const FetchNoteNotion = ({notionData} : FetchNoteNotionProps) => {


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