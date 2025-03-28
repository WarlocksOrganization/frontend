'use client'

import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'katex/dist/katex.min.css'
import {useEffect, useState} from "react";
import FetchNoteNotion from "@/features/FetchNote/FetchNoteNotion";
import {ExtendedRecordMap} from "notion-types";

const FetchNote = () => {
    const [notionData, setNotionData] = useState<ExtendedRecordMap|null>(null)
    useEffect(() => {
        fetchNotionPage();
    }, []);


    const fetchNotionPage = async () => {
        const res = await fetch('/api/notion/fetch');
        const data = await res.json();
        const temp : ExtendedRecordMap = {
            ...data
        }
        await setNotionData(temp)
    };

    return (
        <div className={"w-full"}>
            { notionData && <FetchNoteNotion notionData={notionData}/> }
        </div>
    )
}

export default FetchNote