import { forwardRef, useId } from "react";

export default forwardRef(function Select({
    label,
    className = "",
    options = [],
    ...props
},ref){
    const id = useId();
    return(
        <div className="w-full">
            {label && <label className="" htmlFor={id}></label>}
            {options?.map((option)=>(<option key={option} value={option}>{option}</option>))}
        </div>
    )
})