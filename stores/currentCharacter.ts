// stores/notionStore.ts
import { create } from 'zustand'

interface CurrentCharacter {
    currentCharacter: string| null,
    setCurrentCharacter: any
}


export const  useCurrentCharacter = create<CurrentCharacter>((set) => ({
    currentCharacter: "Archer",

   setCurrentCharacter: (newState: string) => {
    set(() => ({ currentCharacter: newState }));
  },
}))
