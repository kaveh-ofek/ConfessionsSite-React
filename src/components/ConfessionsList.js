import Confession from "./Confession";
import "../CssFiles/ConfessionsListStyling.css";

const ConfessionsList = (props) => {
    return (
        <div className='render-confessions'>
            {props.confessions.map((confession) => (
                <Confession 
                name={confession.name} 
                content={confession.content}
                time={confession.time}
                ></Confession>
            ))}
        </div>
    )
}

export default ConfessionsList;