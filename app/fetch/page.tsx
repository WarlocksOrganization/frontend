'use client'
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'katex/dist/katex.min.css'
import TopNavBar from "@/UI/Navbar/TopNavBar";
import dynamic from 'next/dynamic'

const FetchNoteNotion = dynamic(() => import('@/features/FetchNote/FetchNoteNotion'), {
    ssr: false
})

const FetchNote = () => {
    return (

        <div style={{ paddingTop: "3em" }} className={"w-full"}>
            <TopNavBar/>
            <FetchNoteNotion />
        </div>
    )
}

export default FetchNote
