import {useEffect, useState} from "react";


const HookUseEffect = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const eventFn = ()  => {
        console.log('H1 was clicked!')
    }

    //componentDidUpdate - execute every time the component update
    // useEffect(() => {
    //     console.log('componentDidUpdate');
    // });

    //componentDidMount - execute 1x
    // useEffect(() => {
    // console.log('componentDidMount');
    // }, []);

    //componentDidMount -> with dependency[] - execute every time the dependency change
    // useEffect(() => {
    //     console.log('Counter[1]:', counter1, '| Counter[2]:', counter2);
    //     //Attention to change the dependency inside, because it can cause an infinite loop
    //     //like infinite loop ->  setCounter1(counter + 1)
    //     //But setCounter is safe -> setCounter(10)
    // }, [counter1, counter2]);


    //componentDidMount -> 1x
    useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // componentWillUnmount - cleaning
        return() => {
            document.querySelector('h1')?.removeEventListener('click', eventFn)
        }
    }, []);

    return (
        <>
            <h1>Counter[1]: {counter1} | Counter[2]: {counter2}</h1>
            <button onClick={() => setCounter1(counter1 + 1)}>+ [1]</button>
            <button onClick={() => setCounter2(counter2 + 1)}>+ [2]</button>

        </>
    );
}

export default HookUseEffect