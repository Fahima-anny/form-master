import { useState } from "react";

const UseInputState = (defaultValue = null) => {

let [value,setValue] = useState(defaultValue) ;

// const handleChange = e => {
//     setValue(e.target.value)
// }
// return [ value, handleChange ]

const onChange = e => {
    setValue(e.target.value)
}

return { value, onChange }

};

export default UseInputState;