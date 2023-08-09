import {useEffect, useRef, useState} from "react";

const useMyHook = (callB, delay = 1000) => {
    // const savedCallB = useRef();

    // useEffect(() => {
    //     savedCallB.current = callB
    // }, [callB])

    useEffect(() => {
        const interval = setInterval(() => {
            callB()
        }, delay);

        return () => clearInterval(interval);
    }, [callB, delay]);

};


const MyHook = () => {
    const [counter, setCounter] = useState(0);
    const [delay, setDelay] = useState(1000);
    const [increment, setIncrement] = useState(100)

    useMyHook(() => setCounter(c => c + 1), delay)

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <h3>Delay: {delay}</h3>
            <label>Delay: </label>
            <button onClick={() => setDelay(d => d + increment)}>+{increment}</button>
            <button onClick={() => setDelay(d => d - increment)}>-{increment}</button>
            <div>
                <label>Amount: </label>
                <input
                    type="text"
                    value={increment}
                    onChange={(e) => setIncrement(Number(e.target.value))}/>
            </div>
        </div>
    );
};

export default MyHook