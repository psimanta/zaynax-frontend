import "./Button.css"
import getBtnColor from "../utils/getBtnColor";

const Button = ({ action, category, styleProps, cb }) => {
    return (<button style={{
        backgroundColor: getBtnColor(category)[0],
        color: getBtnColor(category)[1],
        ...styleProps
    }} className="button" onClick={cb}>
        {action}
    </button>)
}

export default Button;