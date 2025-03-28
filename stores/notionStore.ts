// stores/notionStore.ts
import { create } from 'zustand'
import { ExtendedRecordMap } from 'notion-types'

interface NotionState {
    notionData: ExtendedRecordMap | null
    isLoading: boolean
    fetchNotionData: () => Promise<void>
}

export const useNotionStore = create<NotionState>((set) => ({
    notionData: null,
    isLoading: false,
    fetchNotionData: async () => {
        set({ isLoading: true })
        try {
            const res = await fetch('/api/notion/fetch')
            const data = await res.json()
            set({
                notionData: data,
                isLoading: false
            })
            console.log("data", data)
        } catch (error) {
            console.error('Failed to fetch Notion data:', error)
            set({ isLoading: false })
        }
    }
}))
