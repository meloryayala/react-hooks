import P from "prop-types";
import React, {useCallback, useState} from "react";


const Button = React.memo(({incrementButton}) => {
    console.log('Children rendered');
    return <button onClick={() => incrementButton(10)}>+</button>
});

Button.propTypes = {
    incrementButton: P.func,
};

const HookUseCallback = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = useCallback((num) => {
        setCounter((c) => c + num)
    },[],
    );

    console.log('Dad rendered');

  return(
      <>
        <h1>Counter: {counter}</h1>
          <Button incrementButton={incrementCounter}/>
      </>
  );
};

export default HookUseCallback