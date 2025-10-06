import { useState } from "react";

const useInputField = (defaultValue) => { 
    const [fieldValue, setFieldValue] = useState(defaultValue);
    const handleFieldValueOnChange = (e) => { 
        setFieldValue(e.target.value)
    }

    return [fieldValue, handleFieldValueOnChange]
}

export default useInputField;