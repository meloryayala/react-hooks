import {useContext, createContext, useState} from "react";


const globalState = {
    title: 'The title context',
    body: 'The context body',
    counter: 0,
};

// eslint-disable-next-line no-undef
const GlobalContext = createContext();

const Div = () => {
    return (
        <>
            <H1/>
            <P />
        </>
    )
};

const H1 = () => {
    const theContext = useContext(GlobalContext);
    const { contextState: { title, counter } } = theContext;
    return <h1>{title} {counter}</h1>
};

const P = () => {
    const theContext = useContext(GlobalContext);
    const {
        contextState: { body, counter},
        contextState,
        setContextState,
    } = theContext;
    //Option 1 (needs the counter):
    return <p onClick={() => setContextState(s => ({...s, counter: counter + 1 }))}
    // Another option (needs the contextState):
    // return <p onClick={() => setContextState({ ...contextState, counter: 1 })}
    >
        {body}
    </p>
};


const HookUseContext = () => {
    const [contextState, setContextState] = useState(globalState)

    return (
        <GlobalContext.Provider value={{ contextState, setContextState }}>
            <Div/>
        </GlobalContext.Provider>
    )
}

export default HookUseContext