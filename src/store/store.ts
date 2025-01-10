import { create } from "zustand";

type Props = {
  refElem: null | React.RefObject<HTMLDivElement>;
  setRefElem: any;
  scrollElem: any;
};
export const useStoreScroll = create<Props>((set, get) => ({
  refElem: null,
  setRefElem: (ref: React.RefObject<HTMLDivElement>) => set({ refElem: ref }),
  scrollElem: () => {
    const ref = get().refElem;
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  },
}));
