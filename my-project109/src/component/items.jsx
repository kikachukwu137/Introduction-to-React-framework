import { useState } from "react"
function Items(props){
    const [isClick, setIsClick] = useState(false)
    function addLine(){
        setIsClick(true)
    }
    function removeLine(){
        setIsClick(false)
    }
    return(
        <li 
            onMouseMove={addLine}onMouseOut={removeLine} style={{textDecoration: isClick ? "line-through": null}}>{props.text}</li>
    )
}

export default Items