import { create } from "zustand";


const useMyStore = create((set) => ({
    count: 1,
    name: "MKL",
    increment: () =>
        set((state) => ({
            count: state.count + 1
        })),
}));


export default useMyStore;