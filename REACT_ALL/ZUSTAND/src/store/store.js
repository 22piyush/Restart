import { create } from "zustand";


const useMyStore = create((set) => ({
    count: 1,
    name: "MKL",
    increment: ()=>{
        set({
            count: 2,
        })
    }
}));


export default useMyStore;