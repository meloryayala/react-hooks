import {useReducer} from "react";

const globalState = {
    title: 'The title context',
    body: 'The context body',
    counter: 0,
};
const reducer = (state, action) => {
  switch(action.type) {
      case 'change': {
          console.log('Called change with', action.payload);
          return {...state, title: action.payload };
      }

      case 'reverse': {
          console.log('Called reverse');
          const {title} = state;
          return { ...state, title: title.split('').reverse().join('') };
      }
  }
  console.log('NENHUMA ACTION ENCONTRADA')
  return {...state};
};

const HookUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, globalState);
    const { title, body, counter } = state
    return (
        <div>
            <h1>{title} {counter}</h1>
            <button onClick={() =>
                dispatch({
                type: 'change',
                payload: new Date().toLocaleString('pt-BR'),
            })}>Change</button>
            <button onClick={() => dispatch({type: 'reverse'})}>Reverse</button>
            <button onClick={() => dispatch({type: ''})}>No action</button>
        </div>
    )
}

export default HookUseReducer