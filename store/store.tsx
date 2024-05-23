import { create } from 'zustand'

type State = {
  isOpen: boolean
}

type Action = {
  setIsOpen: (isOpen: boolean) => void
}

const useOpenStore = create<State & Action>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => {
    set(() => ({ isOpen: isOpen }))
  }
}))

export default useOpenStore;