import { useState } from 'react';
function useToggle(initialValue) {
    const [state, setState] = useState(initialValue);
    const toggle = (evt) => {
        evt.preventDefault();
        setState(!state);
    };
    return [state, toggle];
}
export default useToggle;