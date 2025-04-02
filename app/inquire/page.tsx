'use client'
import 'react-notion-x/src/styles.css'
import {useEffect, useState} from "react";
import FetchNoteNotion from "@/features/FetchNote/FetchNoteNotion";
import {ExtendedRecordMap} from "notion-types";
import TopNavBar from "@/UI/Navbar/TopNavBar";

const Inquire = () => {
    const [notionData, setNotionData] = useState<ExtendedRecordMap|null>(null)
    useEffect(() => {
        fetchNotionPage();
    }, []);


    const fetchNotionPage = async () => {
        const res = await fetch('/api/notion/inquire');
        const data = await res.json();
        const temp : ExtendedRecordMap = {
            ...data
        }
        await setNotionData(temp)
    };

    return (
        <div  style={{ paddingTop: "3em" }}  className={"w-full"}>
            <TopNavBar/>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeHkCg51oIaOxyEPewQR-YBgEct6PO5wPYSTs1mmJbJLQk8QQ/viewform?embedded=true"
                style={{width: "100%", height: "100vh"}}>로드 중…
            </iframe>
        </div>
    )
}

export default Inquire