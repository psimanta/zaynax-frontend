import "./Button.css"
import getBtnColor from "../utils/getBtnColor";

const Button = ({ action, category }) => {
    return (<button style={{
        backgroundColor: getBtnColor(category)[0],
        color: getBtnColor(category)[1]
    }}>
        {action}
    </button>)
}

export default Button;