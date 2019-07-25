import { useState } from 'react';
import { async } from 'q';
function useToggle(initialValue) {
    const [state, setState] = useState(initialValue);
    const toggle = event => {

        setState(!state);

    };
    const hideDropDown = event => {
        setState(false);
    };
    return [state, toggle, hideDropDown];
}
export default useToggle;