import { useState } from "react"

export const useCounter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count + 1);
    }

    const setByValue = (val) => {
        setCount(val);
    }
}