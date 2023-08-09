import HookUseEffect from "./hooks/HookUseEffect";
import HookUseState from "./hooks/HookUseState";
import HookUseCallback from "./hooks/HookUseCallback";
import HookUseMemo from "./hooks/HookUseMemo";
import HookUseRef from "./hooks/HookUseRef";
import HookUseContext from "./hooks/HookUseContext";
import HookUseReducer from "./hooks/HookUseReducer";
import HookUseContextUseReducer from "./hooks/useContext+useReducer/HookUseContextUseReducer";


const App = () => {
    return (
        <HookUseContextUseReducer />
    )
}
export default App;