import { create } from "zustand";

interface FriendModalStore {
  isModalOpen: boolean;
  setModalOpen: () => void;
  setModalClose: () => void;
}

const useFriendModalStore = create<FriendModalStore>((set) => ({
  isModalOpen: true,
  setModalOpen: () => set({ isModalOpen: true }),
  setModalClose: () => set({ isModalOpen: false }),
}));

export default useFriendModalStore;
