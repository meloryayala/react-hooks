import P from 'prop-types'
import {createContext, useContext, useReducer, useRef} from "react";

//actions.jsx
const actions = {
    CHANGE_TITLE : 'CHANGE_TITLE',
};

//data.jsx
const globalState = {
    title: 'The title context',
    body: 'The context body',
    counter: 0,
};


//reducer.jsx
const reducer = (state, action) => {
    switch (action.type) {
        case actions.CHANGE_TITLE: {
            console.log('Change title');
            return {...state, title: action.payload};
        }
    };

    return {...state};
};


//AppContext
const Context = createContext();
const AppContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, globalState);

    const changeTitle = (payload) => {
        dispatch({ type: actions.CHANGE_TITLE, payload });
    };

    return (
        <Context.Provider value={{ state, changeTitle }}>
            {children}
        </Context.Provider>
    );
};

AppContext.propTypes = {
    children: P.node,
};


// H1 /  index.jsx
const H1 = () => {
    const context = useContext(Context);
    // const  inputRef = useRef();

    return (
        <>
        <h1 onClick={() => context.changeTitle('Hello')}>
            {context.state.title}
        </h1>
            {/*<input type="text" ref={inputRef} />*/}
        </>
    );
};


//App.jsx
const HookUseContextUseReducer = () => {
    return (
        <AppContext>
            <div>
                <H1 />
            </div>
        </AppContext>
    );
};

export default HookUseContextUseReducer;