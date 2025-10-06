import { useState } from "react"

const useProductField = (defaultValue) => { 
    const[fieldValue, setFieldValue] = useState(defaultValue);
    const handleProductValueOnChange = (e) => { 
        setFieldValue(e.target.value)
    }

    return [fieldValue, handleProductValueOnChange]
}

export default useProductField;